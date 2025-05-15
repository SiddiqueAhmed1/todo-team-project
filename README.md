# 📝 Dozy – A calm, minimalist Todo Application

A full-stack Todo management app Dozy built for task coordination. This application leverages modern technologies for optimal performance, scalability, and user experience.

## 🌐 Live Demo

- **Frontend:** [Vercel Deployment Link](#)  
- **Backend:** [Render Deployment Link](#)

## 🎨 Figma Design

- [View UI Design on Figma](https://www.figma.com/design/T9DqrMrrgfE0uuJ3IcYteM/To-do-List-Web-App-Design--Community-?m=auto&is-community-duplicate=1&fuid=1253275827982167590)
---

## ⚙️ Tech Stack

### 🧩 Frontend

| Tech               | Purpose                            |
|--------------------|-------------------------------------|
| **React (Vite)**   | Fast and modern frontend framework |
| **Tailwind CSS**   | Utility-first CSS framework        |
| **React Router DOM** | Client-side routing              |
| **Axios**          | API requests                       |
| **Context API**    | State management (no Redux/Zustand)|
| **SweetAlert2**    | Modals & alerts                    |
| **React Icons**    | Icon set                           |
| **Framer Motion**  | Animations                         |

### 🛠️ Backend

| Tech               | Purpose                            |
|--------------------|-------------------------------------|
| **Node.js**        | JavaScript runtime                 |
| **Express.js**     | Backend framework                  |
| **MongoDB** + **Mongoose** | Database & ODM            |
| **JWT + bcrypt**   | Authentication & password hashing  |
| **Dotenv**         | Environment variables              |
| **Multer.js**      | File upload                        |
| **Nodemailer**     | Email sending                      |

---

## 🔐 Authentication

Authentication is implemented using **JWT (JSON Web Tokens)** and **bcrypt** for secure password hashing.

### Features:
- User registration with hashed passwords
- Secure login with JWT token generation
- Protected routes using token verification middleware
- Token stored in localStorage or HTTP-only cookies (configurable)
- Role-based access control (if needed for team features)

---

## ✅ Todo App Features

- User Authentication (Register/Login)
- Create, Read, Update, Delete (CRUD) Todo items
- Assign tasks to team members
- Set due dates and priorities
- Mark tasks as completed
- Filter and sort todos by status, date, or priority
- Real-time UI feedback with SweetAlert2 & Framer Motion
- File attachments to tasks (Multer)
- Email notifications on task assignment (Nodemailer)
- Responsive and mobile-friendly design

---

## 🚀 Deployment

| Service  | Purpose     |
|----------|-------------|
| **Vercel** | Frontend Hosting |
| **Render** | Backend Hosting  |

---

## 🧪 Development Tools

| Tool            | Purpose                     |
|--------------   |-----------------------------|
| **GitHub**      | Version Control             |
| **Concurrently**| Run multiple scripts in parallel |
| **Nodemon**     | Auto-restart backend on changes |

---

## 📁 Project Structure

```text
root/
│
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── tailwind.config.js
│
├── server/                 # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .env
├── package.json            # Root script with concurrently
└── README.md


```
---

## 📤 File Upload & Email

- File uploads handled with **Multer.js**
- Email notifications using **Nodemailer** (e.g., on new task assignments)

---

## 📦 Scripts

### Start both frontend & backend in development mode
npm run dev

### Run backend only
npm run server

### Run frontend only
cd client && npm run dev

# Changelog
# Version number v1.0.0
# Release date -- -- --


## [1.0.0] - 2025-05-15
### ✅ Added – new features

### 🛠️ Fixed – bug fixes
- Bug in todo update logic when marking as complete

### 🔄 Changed – improvements or updates

### ❌ Removed – deprecated or deleted features

### ⚠️ Security – security patches


🧑‍💻 Contributors
ScriptVolt Management Team
