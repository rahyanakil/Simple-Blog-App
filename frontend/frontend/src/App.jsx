import { useEffect, useState } from "react";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "./api";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => setBlogs(await getBlogs());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateBlog(editId, { title, content });
      setEditId(null);
    } else {
      await createBlog({ title, content });
    }
    setTitle("");
    setContent("");
    fetchBlogs();
  };

  return (
    <div>
      <h2>Simple Blog App</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">{editId ? "Update" : "Create"} Blog</button>
      </form>

      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button
              onClick={() => {
                setTitle(blog.title);
                setContent(blog.content);
                setEditId(blog._id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteBlog(blog._id);
                fetchBlogs();
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
