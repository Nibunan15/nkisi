// Order matters: styles → globals (React, GSAP, lucide, design system on window) → page modules → app.
import './styles/index.css';
import './globals.js';
import './legacy/index.js';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// No <React.StrictMode>: its double-invoked effects would replay the GSAP / canvas intro animations.
createRoot(document.getElementById('root')).render(<App />);
