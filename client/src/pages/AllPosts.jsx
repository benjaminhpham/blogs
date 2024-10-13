import { useEffect, useState } from "react";
import BlogPostsAPI from "../services/postsApi";
import Post from "../components/Post";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await BlogPostsAPI.getAllPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch all posts: ", err.message);
      }
    })();
  }, []);

  if (error) return <div>{error}</div>;

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
