import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSave, editingTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || '');
      setDescription(editingTask.description || '');
      setStatus(editingTask.status || 'Pending');
      setError('');
    } else {
      setTitle('');
      setDescription('');
      setStatus('Pending');
      setError('');
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }

    const payload = { title: title.trim(), description: description.trim(), status };
    onSave(payload);
    // don't clear when editing — parent will reset editingTask
      if (!editingTask) {
    setTitle('');
    setDescription('');
    setStatus('Pending');
    setError('');
  }
  }

  return (
    <div className="card">
      <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Buy milk"
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
          />
        </label>

        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </label>

        {error && <div className="error">{error}</div>}

        <div className="form-actions">
          <button type="submit">{editingTask ? 'Update' : 'Add'}</button>
          {editingTask && (
            <button type="button" className="btn-ghost" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}