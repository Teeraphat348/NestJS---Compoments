import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: "1",
    name: "BLVCKHEART",
    genre: "Pop / R&B / Hip-Hop",
    image: "/images/bands/BLVCKHEART.jpg",
    description: "ศิลปินเดี่ยวฮิปฮอป เจ้าของเพลง ฟีโรโมน และ อยากจะกอดเธอนานๆ",
    members: [
      { name: "แซม (BLACKHEART)", role: "ศิลปินเดี่ยว / นักร้องนำ" },
    ],
  },

  {
    id: "2",
    name: "Three Man Down",
    genre: "Pop Rock / Alternative Rock",
    image: "/images/bands/Three Man Down.jpg",
    description: "เจ้าของเพลง ฝนตกไหม และ ถ้าเธอรักใครจริง",
    members: [
      { name: "กิต - กฤตย์ จีรพัฒนานุวงศ์", role: "ร้องนำ" },
      { name: "ตูน - พีรพล เอี่ยมจำรัส", role: "กีตาร์" },
      { name: "เต - เตธนันท์ วงศ์ปรีชาโชค", role: "กลอง" },
    ],
  },

  {
    id: "3",
    name: "guncharlie",
    genre: "Indie Pop / T-Pop",
    image: "/images/bands/guncharlie.jpg",
    description: "เจ้าของเพลง สถานะคุย และ เผื่อวันไหนเธอจะกลับมา",
    members: [
      { name: "กันต์ (guncharlie)", role: "ศิลปินเดี่ยว / นักร้องนำ" },
    ],
  },
];