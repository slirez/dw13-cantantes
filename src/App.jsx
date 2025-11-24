import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Singer from './pages/Singer.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singers/:id" element={<Singer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 • Página no encontrada</h2>} />
        </Routes>
      </main>
      <footer className="footer">
        <small>© {new Date().getFullYear()} DW13 • Cantantes</small>
      </footer>
    </div>
  );
}

