import { Card, CardContent } from "@/components/ui/card";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 px-4 grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map(id => (
        <Card key={id}>
          <CardContent>
            <img src={`/artists/sample${id}.jpg`} alt={`Artist ${id}`} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold">Artist {id}</h3>
            <p className="text-sm text-zinc-400">Specializes in fantasy, realism & 3D NFT art.</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}