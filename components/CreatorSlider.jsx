export default function CreatorSlider() {
  return (
    <section className="py-16 px-4 text-center bg-zinc-950">
      <h3 className="text-2xl font-bold mb-6 text-purple-200">🎯 Featured Artists</h3>
      <div className="flex gap-6 justify-center overflow-x-auto">
        {[1, 2, 3].map(id => (
          <img key={id} src={`/artists/sample${id}.jpg`} alt={`Creator ${id}`} className="h-48 rounded-xl border border-purple-600" />
        ))}
      </div>
    </section>
  );
}