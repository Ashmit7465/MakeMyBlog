import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((result) => {
      if (result) {
        setPosts(result.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center border-solid border-2 border-black/10 pt-10 pl-10 pr-10 pb-10">
              <h1 className="text-4xl font-bold mb-7">
                !! Welcome to the posts section of MakeMyBlog !!
              </h1>
              <p className="text-2xl mb-6">
                There are no posts for you to view currently.{" "}
                <Link className=" text-3xl underline mb-6" to="/add-post">
                  Add your own post
                </Link>{" "}
                .{" "}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
