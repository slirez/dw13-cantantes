import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Galería de Cantantes</h1>
        <p>Explora perfiles, estilos y momentos destacados con navegación fluida.</p>
        <Link to="/gallery" className="btn btn-primary">Entrar a la galería</Link>
      </div>
    </section>
  );
}
