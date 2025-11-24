import { Link } from 'react-router-dom';
import Avatar from './Avatar.jsx';

export default function SingerCard({ singer }) {
  return (
    <article className="card">
      <Avatar name={singer.name} seed={singer.id} size={96} />
      <div className="card-body">
        <h3 className="card-title">{singer.name}</h3>
        <p className="card-meta">{singer.genre} • {singer.country}</p>
        <p className="card-desc">{singer.summary}</p>
        <Link to={`/singers/${singer.id}`} className="btn">Ver perfil</Link>
      </div>
    </article>
  );
}
