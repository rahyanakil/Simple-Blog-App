# Simple Blog App

A simple full-stack blog application built using the **MERN** stack (**MongoDB, Express, React, Node.js**). This app allows users to create, view, update, and delete blog posts.

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) blog posts
- Responsive user interface with React.js
- Backend API using Node.js and Express.js
- MongoDB database for storing blog data

---

## 📂 Project Structure

```
simple-blog-app/
│── backend/        # Express & MongoDB server
│── frontend/       # React client
│── README.md
```

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/rahyanakil/mern-blog-app.git
cd mern-blog-app
```

### 2️⃣ Setup Backend (Node.js + Express + MongoDB)

```sh
cd backend
npm install
```

#### 🔹 Create a `.env` file in `backend/` and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### 🔹 Start the Backend Server

```sh
npm start
```

### 3️⃣ Setup Frontend (React.js)

```sh
cd ../frontend
npm install
```

#### 🔹 Start the Frontend Server

```sh
npm run dev
```

---

## 📌 API Endpoints (Backend)

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/blogs`     | Create a new blog |
| GET    | `/api/blogs`     | Get all blogs     |
| PUT    | `/api/blogs/:id` | Update a blog     |
| DELETE | `/api/blogs/:id` | Delete a blog     |

---

## 🎯 Technologies Used

- **Frontend:** React.js (Vite), Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)

---

## 🛠️ Future Improvements

- Authentication with JWT
- User comments on blogs
- Image uploads for blog posts

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 📬 Contact

For any questions or issues, feel free to reach out!

- **GitHub:** Rahyan Akil
- **Email:** [rahyanakil89@gmail.com](mailto:rahyanakil89@gmail.com)

---

**Happy Coding! 🚀**
