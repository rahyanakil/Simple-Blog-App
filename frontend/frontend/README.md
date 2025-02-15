# MERN Blog App

A simple **MERN (MongoDB, Express, React, Node.js) Blog App** where users can create, read, update, and delete blog posts.

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) blog posts
- Responsive UI
- Backend with Express and MongoDB
- Frontend with React.js (Vite)
- User authentication with JWT
- Comments on blog posts
- Like and dislike functionality

---

## 📂 Project Structure

```
mern-blog-app/
│── backend/        # Express & MongoDB server
│── frontend/       # React client
│── README.md
```

---

## 🔧 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
```

### 2️⃣ Install Backend Dependencies

```sh
cd backend
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file inside the `backend/` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Backend Server

```sh
npm start
```

### 5️⃣ Install Frontend Dependencies

```sh
cd ../frontend
npm install
```

### 6️⃣ Start the Frontend Server

```sh
npm run dev
```

---

## 📜 API Endpoints

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | /api/blogs              | Get all blogs          |
| POST   | /api/blogs              | Create a new blog post |
| PUT    | /api/blogs/:id          | Update a blog post     |
| DELETE | /api/blogs/:id          | Delete a blog post     |
| POST   | /api/users/register     | Register a new user    |
| POST   | /api/users/login        | Authenticate user      |
| POST   | /api/blogs/:id/comments | Add a comment          |
| POST   | /api/blogs/:id/like     | Like a blog post       |

---

## 📷 Screenshots

> (Add screenshots here if needed)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📃 License

This project is licensed under the MIT License.

---

### 🌟 Show Support

Give this project a ⭐ if you like it!
