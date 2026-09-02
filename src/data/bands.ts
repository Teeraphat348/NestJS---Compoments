import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: "1",
    name: "25hours",
    genre: "Alternative Rock / Britpop",
    image: "/images/bands/25hours.jpg",
    description: "เจ้าของเพลง ทำได้เพียง, ยินดีที่ไม่รู้จัก และ ไม่เคย",
    members: [
      { name: "สมพล รุ่งพาณิชย์ (แหลม)", role: "ร้องนำ" },
      { name: "ประทีป สิริอิสสระนันท์ (โฟร์)", role: "กีต้าร์" },
      { name: "ปิยวัฒน์ มีเครือ (ปู๋)", role: "กีต้าร์" },
      { name: "เอกศิริ กำบังภัย (บัง)", role: "เบส" },
      { name: "กฤตพงศ์ สกุลนามอเนก (จ๊อบ)", role: "กลอง" },
    ],
  },

  {
    id: "2",
    name: "Three Man Down",
    genre: "Pop Rock",
    image: "/images/bands/Three Man Down.jpg",
    description: "เจ้าของเพลง ฝนตกไหม และ ถ้าเธอรักฉันจริง",
    members: [
      { name: "กิต - กฤตย์ จีรพัฒนานุวงศ์", role: "ร้องนำ" },
      { name: "ตูน - พีรพล เอี่ยมจำรัส", role: "กีตาร์" },
      { name: "เต - เตธนันท์ วงศ์ปรีชาโชค", role: "กลอง" },
    ],
    formerMembers: [
      { name: "เส็ง - วิศรุต ปฐมสิริไพศาล", role: "ซินธิไซเซอร์" },
      { name: "โอม - กิจฏิเมธ ชาญพานิช", role: "เบส" },
    ],
  },

  {
    id: "3",
    name: "SERIOUS BACON",
    genre: "Pop",
    image: "/images/bands/SERIOUS BACON.jpg",
    description: "เจ้าของเพลง พี่ๆ ตัดแว่นให้หน่อย และ ไม่พิเศษ",
    members: [
      { name: "เปรมิกา จิระนารักษ์ (เค้ก)", role: "นักร้อง" },
      {
        name: "สองเมือง ไชยฤทธิ์ (เมือง)",
        role: "นักร้อง กีตาร์ เบส กลอง เปียโน",
      },
    ],
  },
];