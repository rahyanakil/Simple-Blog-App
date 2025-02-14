require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Blog Model
const BlogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

// API Routes
app.post("/api/blogs", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.status(201).json(newBlog);
});

app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.put("/api/blogs/:id", async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBlog);
});

app.delete("/api/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog Deleted" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
