import Image from "next/image";
import { Band } from "@/types/band";

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white max-w-sm mx-auto my-4">
      {/* จำกัดความสูงกล่องใส่รูปไว้ที่ h-64 */}
      <div className="relative w-full h-64 bg-gray-100">
        <Image
          src={band.image}
          alt={band.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-900">{band.name}</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {band.genre}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{band.description}</p>
        
        <h3 className="text-sm font-semibold text-gray-800 mb-2">สมาชิก:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {band.members.map((member, index) => (
            <li key={index}>
              • {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}