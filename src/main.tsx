import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Global pointer tracking for spotlight background
window.addEventListener('pointermove', (e) => {
  document.documentElement.style.setProperty('--spot-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--spot-y', `${e.clientY}px`)
})
