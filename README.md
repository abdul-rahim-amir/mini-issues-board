# Mini Issues Board

A simple MERN stack application for managing issues with authentication, CRUD functionality, and filtering/search capabilities.

---

## 📂 Project Structure

```
/client   # React frontend
/server   # Node.js + Express backend
```

---

## 🚀 Setup & Run Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/abdul-rahim-amir/mini-issues-board.git
cd mini-issues-board
```

---

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create a `.env` file inside `server`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 API Summary

### Authentication
| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login existing user |

### Issues
| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/api/issues`   | Get all issues       |
| POST   | `/api/issues`   | Create new issue     |
| GET    | `/api/issues/:id` | Get issue by ID     |
| PATCH  | `/api/issues/:id` | Update issue by ID  |
| DELETE | `/api/issues/:id` | Delete issue by ID  |

---

## 📌 Example Requests

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Rahim", "email":"rahim@example.com", "password":"123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"rahim@example.com", "password":"123456"}'
```

### Create Issue
```bash
curl -X POST http://localhost:5000/api/issues -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_TOKEN" -d '{"title":"Bug in login", "description":"Fix login issue"}'
```

---

## ⚖️ Trade-offs / Assumptions
1. Basic authentication with JWT for simplicity.
2. No refresh token mechanism implemented.
3. No file upload support for issues.
4. Basic filtering/search; no advanced query building.
5. Pagination added but with default limit = 10.
6. Error handling is minimal for demo purposes.
7. MongoDB Atlas used for cloud DB connection.
8. CORS allowed for `localhost:5173` only.
9. No deployment configuration included.
10. Built for local development & testing.

---
