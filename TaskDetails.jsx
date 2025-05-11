import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(\`http://localhost:5000/tasks/\${id}\`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

export default TaskDetails;
