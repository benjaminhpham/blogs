import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogPostsAPI from "../services/postsApi";

export default function NewPost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const resetInputFields = () =>
    setPost({
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
      resetInputFields();
      navigate("/");
    } catch (err) {
      console.error("Failed to create a new blog post:", err);
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <h2>Create New Blog Post</h2>

      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          placeholder="title"
          onChange={handleInputChange}
          required
        />
      </label>

      <label htmlFor="content">
        Content
        <textarea
          id="content"
          name="content"
          value={post.content}
          placeholder="content"
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}
