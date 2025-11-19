import React from 'react';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <small>Built with React + Axios.</small>
      </footer>
    </div>
  );
}