const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/posts").get(getPosts).post(createPost);
router
  .route("/posts/:post_id")
  .get(getPostById)
  .patch(updatePost)
  .delete(deletePost);

module.exports = router;
