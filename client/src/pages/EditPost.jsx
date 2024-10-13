import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPostsAPI from "../services/postsApi";

export default function EditPost() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: "",
  });
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await BlogPostsAPI.getPostById(id);
      setPost(data);
    })();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditPost = async (e) => {
    e.preventDefault();
    await BlogPostsAPI.updatePost(id, post);
    window.location = "/";
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    await BlogPostsAPI.deletePost(id);
    window.location = "/";
  };

  return (
    <form onSubmit={handleEditPost}>
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
        />
      </div>
      <div className="edit-buttons">
        <button type="submit">Edit</button>
        <button onClick={handleDeletePost}>Delete</button>
      </div>
    </form>
  );
}
