import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '', completed: false });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" value={task.title} onChange={e => setTask({...task, title: e.target.value})} />
        <textarea className="form-control mb-2" placeholder="Description" value={task.description} onChange={e => setTask({...task, description: e.target.value})} />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
