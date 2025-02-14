import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const getBlogs = async () => (await axios.get(API_URL)).data;
export const createBlog = async (blog) =>
  (await axios.post(API_URL, blog)).data;
export const updateBlog = async (id, blog) =>
  (await axios.put(`${API_URL}/${id}`, blog)).data;
export const deleteBlog = async (id) => await axios.delete(`${API_URL}/${id}`);
