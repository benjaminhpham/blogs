import { useState } from "react";
import BlogPostsAPI from "../services/postsApi";

export default function NewPost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState(null);

  const clearInputFields = () => ({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await BlogPostsAPI.createPost(post);
      clearInputFields();
      window.location = "/";
    } catch (err) {
      setError("Failed to create a new blog post", err);
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <h2>Create New Blog Post</h2>

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          placeholder="title"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={post.content}
          placeholder="content"
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Create</button>
      {error && <h3>{error}</h3>}
    </form>
  );
}
