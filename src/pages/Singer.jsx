import { useParams, Link } from 'react-router-dom';
import singers from '../data/singers.js';
import Avatar from '../components/Avatar.jsx';

export default function Singer() {
  const { id } = useParams();
  const singer = singers.find(s => String(s.id) === id);

  if (!singer) {
    return (
      <section>
        <h2>Perfil no encontrado</h2>
        <Link to="/gallery" className="btn">Volver a la galería</Link>
      </section>
    );
  }

  return (
    <section className="profile">
      <div className="profile-header">
        <Avatar name={singer.name} seed={singer.id} size={128} />
        <div>
          <h2>{singer.name}</h2>
          <p className="card-meta">{singer.genre} • {singer.country} • {singer.years}</p>
        </div>
      </div>

      <p className="bio">{singer.bio}</p>
      <h3>Destacados</h3>
      <ul className="highlights">
        {singer.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>

      <div className="profile-actions">
        <Link to="/gallery" className="btn">Volver</Link>
      </div>
    </section>
  );
}
