export default function Avatar({ name, size = 96, seed }) {
  const initials = name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase();
  const hue = (typeof seed === 'number' ? seed * 57 : name.length * 37) % 360;
  const colorA = `hsl(${hue}, 75%, 55%)`;
  const colorB = `hsl(${(hue+40)%360}, 75%, 45%)`;

  return (
    <div
      style={{
        width: size, height: size, borderRadius: 12,
        background: `linear-gradient(135deg, ${colorA}, ${colorB})`,
        display: 'grid', placeItems: 'center', color: 'white',
        fontWeight: 700, fontSize: size*0.36, letterSpacing: 1
      }}
      aria-label={`Avatar de ${name}`}
    >
      {initials}
    </div>
  );
}
