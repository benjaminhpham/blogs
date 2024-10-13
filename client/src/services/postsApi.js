import { request } from "../utilities/api";

const postsURL = "http://localhost:3001/api/posts";

const getAllPosts = () => request("GET", postsURL);
const getPostById = (id) => request("GET", `${postsURL}/${id}`);
const createPost = (id, post) => request("POST", postsURL, post);
const updatePost = (id, post) => request("PATCH", `${postsURL}/${id}`, post);
const deletePost = (id) => request("DELETE", `${postsURL}/${id}`);

export default { getAllPosts, getPostById, createPost, updatePost, deletePost };
