import { bandsData } from "@/data/bands";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">วงดนตรียอดนิยม</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
}