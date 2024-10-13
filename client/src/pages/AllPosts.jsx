import { useEffect, useState } from "react";
import BlogPostsAPI from "../services/postsApi";
import Post from "../components/Post";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const data = await BlogPostsAPI.getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch all posts:", err);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <main>
      {posts.length > 0 ? (
        posts?.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <h3>No Blog Posts Found 😔</h3>
      )}
    </main>
  );
}
