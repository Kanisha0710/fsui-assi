# fsui-assi
# 📝 Task Management Web Application

## 🚀 Overview

This is a full-stack **Task Management Web Application** built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It enables users to:

- Add new tasks
- View a list of tasks
- View task details
- Update or delete tasks

The application is designed with **modular, maintainable architecture** using modern technologies like **Redux** for state management and **React Router** for navigation. The interface is fully responsive, built using **Bootstrap**, and includes dynamic behavior powered by **jQuery** and **ES6 JavaScript**.

---

## 🧰 Technologies Used

### ✅ Frontend
- **React.js** – UI library for building components
- **Redux** – Global state management
- **React Router** – Client-side routing
- **Bootstrap 5** – Responsive styling
- **jQuery** – Form validation and UI interactivity
- **JavaScript (ES6)** – Modern JS features and DOM logic

### ✅ Backend
- **Node.js** – Server-side JavaScript runtime
- **Express.js** – Minimalist web framework for Node.js
- **MongoDB** – NoSQL document-based database
- **Mongoose** – ODM (Object Document Mapper) for MongoDB

---

## 📂 Project Structure

task-manager/
├── backend/
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express route handlers
│ ├── index.js # Main server file
│ └── .env # Environment variables (e.g., Mongo URI)
├── frontend/
│ ├── src/
│ │ ├── components/ # React UI components
│ │ ├── redux/ # Redux actions, reducers, store
│ │ ├── App.jsx # Root component with routing
│ │ └── index.js # React entry point
│ └── public/
└── README.md


## 🌐 Features

- 📋 **Task List**: View all tasks from the MongoDB database.
- ➕ **Add Task**: Input form with real-time validation.
- 🔍 **Task Details**: View individual task details by ID.
- 🔄 **Update/Delete Tasks**: Modify or remove tasks via API.
- ⚡ **State Management**: Redux manages task list across components.
- 🧭 **Routing**: React Router enables seamless single-page navigation.
- 📱 **Responsive Design**: Works well on desktop and mobile devices.
- ✅ **Form Validation**: Implemented using jQuery and native checks.
