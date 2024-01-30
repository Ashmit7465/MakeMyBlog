import React from "react";
import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.document);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div class="w-[300px] rounded-md border">
        <img
          src="https://www.shutterstock.com/image-photo/blog-blogging-homepage-social-media-600nw-381746308.jpg"
          alt="Laptop"
          class="h-[200px] w-full rounded-md object-cover"
        />
        <div class="p-4">
          <h1 class="text-lg font-semibold">
            .....Please Login to Read Posts.....
          </h1>
          <p class="mt-3 text-sm text-gray-600">
            Use the 'Login' button to start reading posts or to post your own
            posts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
              {/* <PostCard post={post}/> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
