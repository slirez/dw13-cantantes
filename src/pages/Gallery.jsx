import singers from '../data/singers.js';
import SingerCard from '../components/SingerCard.jsx';

export default function Gallery() {
  return (
    <section>
      <h2>Galería</h2>
      <div className="grid">
        {singers.map(s => <SingerCard key={s.id} singer={s} />)}
      </div>
    </section>
  );
}
