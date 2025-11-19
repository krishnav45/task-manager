import React from 'react';

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task-item">
      <div className="task-main">
        <h3>{task.title}</h3>
        <p className="muted">{task.description}</p>
      </div>
      <div className="task-meta">
        <div className={`status ${task.status.replace(/\s+/g, '-').toLowerCase()}`}>
          {task.status}
        </div>
        <div className="task-actions">
          <button onClick={() => onEdit(task)}>Edit</button>
          <button className="btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}