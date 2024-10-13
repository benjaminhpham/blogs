const { pool } = require("../config/database");

const getPosts = async (req, res) => {
  try {
    const getPostsQuery = "SELECT * FROM posts";
    const results = await pool.query(getPostsQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { post_id } = req.params;
    const getPostByIdQuery = "SELECT * FROM posts WHERE id = $1";
    const values = [post_id];
    const results = await pool.query(getPostByIdQuery, values);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const insertPostQuery =
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *";
    const values = [title, content];
    const results = await pool.query(insertPostQuery, values);
    res.status(201).json(results.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const { title, content } = req.body;
    const updatePostQuery =
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3";
    const values = [title, content, post_id];
    const results = await pool.query(updatePostQuery, values);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const deletePostQuery = "DELETE FROM posts WHERE id = $1";
    const values = [post_id];
    const results = await pool.query(deletePostQuery, values);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
