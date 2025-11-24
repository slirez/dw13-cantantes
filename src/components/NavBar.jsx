import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="brand">Cantantes</div>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
        <li><NavLink to="/gallery" className={({isActive}) => isActive ? 'active' : ''}>Galería</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>Acerca</NavLink></li>
      </ul>
    </nav>
  );
}
