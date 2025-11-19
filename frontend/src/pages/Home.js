import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import * as taskService from '../services/taskService';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  // simple filter and pagination state
  const [filterStatus, setFilterStatus] = useState('All');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 3; // simple client-side pagination

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    setError('');
    try {
      const res = await taskService.getTasks();
      setTasks(res.data);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(payload) {
    try {
      if (editingTask) {
        // update
        const res = await taskService.updateTask(editingTask._id, payload);
        setTasks((prev) => prev.map((t) => (t._id === res.data._id ? res.data : t)));
        setEditingTask(null);
      } else {
        // create
        const res = await taskService.createTask(payload);
        setTasks((prev) => [res.data, ...prev]);
      }
    } catch (err) {
      alert('Error saving task');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this task?')) return;
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      alert('Failed to delete');
    }
  }

  function handleEdit(task) {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCancelEdit() {
    setEditingTask(null);
  }

  // Filtering
  const filtered = tasks.filter((t) => (filterStatus === 'All' ? true : t.status === filterStatus));

  // Pagination (client-side)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    // if page too large after filter change
    if (page > totalPages) setPage(1);
  }, [filterStatus, tasks]);

  return (
    <div className="home">
      <div className="top-grid">
        <TaskForm onSave={handleSave} editingTask={editingTask} onCancel={handleCancelEdit} />

        <div className="card">
          <h2>Tasks</h2>

          <div className="controls">
            <label>
              Filter:&nbsp;
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option>All</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </label>&nbsp;

            <button onClick={fetchTasks} className="btn-ghost">Refresh</button>
          </div>

          {loading ? (
            <div className="muted">Loading...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <TaskList tasks={paged} onEdit={handleEdit} onDelete={handleDelete} />

              <div className="pagination">
                <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                  Prev
                </button>
                <span>
                  Page {page} / {totalPages}
                </span>
                <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
