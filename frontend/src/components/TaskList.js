import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <div className="card">No tasks yet. Add your first task!</div>;
  }

  return (
    <div className="task-list card">
      {tasks.map((t) => (
        <TaskItem key={t._id} task={t} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}