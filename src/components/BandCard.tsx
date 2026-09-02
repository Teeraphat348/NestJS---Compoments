import Image from "next/image";

interface Member {
  name: string;
  role: string;
}

interface Band {
  id: string;
  name: string;
  genre: string;
  members: Member[];
  image: string;
  description: string;
}

export default function BandCard({ band }: { band: Band }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#ffffff",
        maxWidth: "350px",
        margin: "16px auto",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "250px",
          marginBottom: "12px",
          overflow: "hidden",
          borderRadius: "6px",
        }}
      >
        <Image
          src={band.image}
          alt={band.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "4px", color: "#111827" }}>
        {band.name}
      </h2>
      
      {/* เพิ่มคำว่า แนวเพลง: ด้านหน้า */}
      <p style={{ fontSize: "14px", color: "#059669", fontWeight: "600", marginBottom: "8px" }}>
        แนวเพลง: {band.genre}
      </p>

      <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "12px" }}>
        {band.description}
      </p>
      <div>
        <strong style={{ fontSize: "14px", color: "#374151" }}>สมาชิก:</strong>
        <ul style={{ paddingLeft: "20px", margin: "4px 0 0 0", fontSize: "14px", color: "#4b5563" }}>
          {band.members.map((member, index) => (
            <li key={index}>
              {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}