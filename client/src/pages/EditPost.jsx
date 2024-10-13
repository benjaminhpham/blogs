import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogPostsAPI from "../services/postsApi";

export default function EditPost() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      async () => {
        try {
          const data = await BlogPostsAPI.getPostById(id);
          setPost(data);
        } catch (err) {
          console.error("Failed to fetch post:", err);
        }
      };
    };

    fetchPost();
  }, [id]);

  const truncateContent = (content, length = 100) => {
    return content.length > length ? content.slice(0, length) + "..." : content;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditPost = async (e) => {
    e.preventDefault();
    try {
      await BlogPostsAPI.updatePost(id, post);
      navigate("/");
    } catch (err) {
      console.error("Failed to update post: ", err);
    }
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      await BlogPostsAPI.deletePost(id);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete post: ", err);
    }
  };

  return (
    <form onSubmit={handleEditPost}>
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
      <div className="edit__buttons">
        <button type="submit">Edit</button>
        <button type="button" onClick={handleDeletePost}>
          Delete
        </button>
      </div>
    </form>
  );
}
