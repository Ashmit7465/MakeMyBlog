import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileID);
  }

  async downloadPost(slug, downloadPath) {
    try {
      // Get the post document to retrieve the file ID
      const post = await this.getPost(slug);

      if (!post || !post.$id) {
        console.log(`Post not found for slug: ${slug}`);
        return false;
      }

      // Assuming the file ID is stored in the 'featuredImage' field
      const fileId = post.featuredImage;

      // Download the file using the Appwrite Storage API
      const fileDetails = await this.bucket.getFile(
        conf.appwriteBucketId,
        fileId
      );

      if (!fileDetails || !fileDetails.$id) {
        console.log(`File not found for post with slug: ${slug}`);
        return false;
      }

      // Save the file to the specified download path
      const fileStream = await this.bucket.getFileDownload(
        conf.appwriteBucketId,
        fileId
      );
      const writeStream = fs.createWriteStream(downloadPath);

      fileStream.pipe(writeStream);

      return new Promise((resolve, reject) => {
        writeStream.on("finish", () => {
          console.log(`File downloaded successfully to: ${downloadPath}`);
          resolve(true);
        });

        writeStream.on("error", (err) => {
          console.error(
            `Error downloading file for post with slug ${slug}: ${err}`
          );
          reject(false);
        });
      });
    } catch (error) {
      console.log("Appwrite service :: downloadPost :: error", error);
      return false;
    }
  }
}

const authService = new Service();

export default authService;
