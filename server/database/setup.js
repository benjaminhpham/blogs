const { pool } = require("../config/database");
const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "data.json"), "utf-8");

const createBlogPostsTable = async () => {
  try {
    const createBlogsTableQuery = `
      DROP TABLE IF EXISTS posts;

      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
      );`;

    await pool.query(createBlogsTableQuery);
  } catch (err) {
    console.error(error);
  }
};

const insertBlogPosts = async () => {
  try {
    const insertBlogPostQuery =
      "INSERT INTO posts (title, content) VALUES ($1, $2)";
    const blogPosts = JSON.parse(data);

    for (const blogPost of blogPosts) {
      const { title, content } = blogPost;
      const values = [title, content];
      await pool.query(insertBlogPostQuery, values);
    }
  } catch (err) {
    console.error(err);
  }
};

const setup = async () => {
  await createBlogPostsTable();
  await insertBlogPosts();
};

module.exports = {
  createBlogPostsTable,
  insertBlogPosts,
  setup,
};
