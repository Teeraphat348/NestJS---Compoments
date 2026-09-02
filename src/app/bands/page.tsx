import { bandsData } from "@/data/bands";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  return (
    <div style={{ padding: "32px 16px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "24px" }}>
        วงดนตรีโปรด
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
}