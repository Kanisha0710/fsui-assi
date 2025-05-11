import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => dispatch(setTasks(data)));
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Task</Link>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item">
            <Link to={`/task/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
