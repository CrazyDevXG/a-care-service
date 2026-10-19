
export const company = {
  name: "บริษัท เอ-แคร์ เซอร์วิส จำกัด",
  phone: "099-619-4691",
  secondaryPhone: "098-151-7561",
  email: "acareservice@hotmail.com",
  address: "55/709 หมู่ 5 ตำบลลาดสวาย อำเภอลำลูกกา จังหวัดปทุมธานี 12150",
  facebookUrl: "https://m.facebook.com/acareserviceth",
  lineUrl: "https://line.me/ti/p/3-UDH4Y0gi",
};

const photo = (file: string) => `/images/${file}`;
const work = (file: string) => `/images/works/${file}`;

export const photos = {
  panyaHall: photo("mg70172.png"),
  cleanAirs: photo("mg70178.png"),
  panyaCrew: photo("LINE_ALBUM_ล้างแอร์ หมู่บ้านปัญญาอินทรา_261011_3.jpg"),
  panyaShirt: photo("LINE_ALBUM_ล้างแอร์ หมู่บ้านปัญญาอินทรา_261011_2.jpg"),
  wirelessHome: photo("LINE_ALBUM_ล้างแอร์บ้านลูกค้า ถ.วิทยุ_261011_1.jpg"),
  sukhumvitUnits: photo("LINE_ALBUM_ล้างแอร์ติดผนัง สุขุมวิท 49_261011_1.jpg"),
  sukhumvitOutdoor: photo("LINE_ALBUM_ล้างแอร์ติดผนัง สุขุมวิท 49_261011_2.jpg"),
  officeClean: photo("LINE_ALBUM_ล้างแอร์ สำนักงาน อาคารไพโรจน์กิจจา บา2.jpg"),
  officeCheck: photo("LINE_ALBUM_ล้างแอร์ สำนักงาน อาคารไพโรจน์กิจจา บา.jpg"),
  peaOffice: photo("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_75.jpg"),
  peaCover: work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_12.jpg"),
  peaRepair: photo("mg70170.png"),
  peaUnits: photo("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_77.jpg"),
  factoryJob: photo("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน5.jpg"),
  carrierTeam: photo("mg70175.png"),
  maintenace: photo("mg70176.png"),
  prosecutorTeam: photo("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261009_2.jpg"),
};

export const services = [
  {
    slug: "clean",
    icon: "snow",
    title: "ล้างแอร์",
    image: photos.cleanAirs,
    imageAlt: "ทีมช่างล้างเครื่องปรับอากาศที่หมู่บ้านปัญญาอินทรา",
    description: "ทำความสะอาดและตรวจเช็ก เพื่อให้แอร์ทำงานได้อย่างมีประสิทธิภาพ ทั้งบ้านและอาคาร",
  },
  {
    slug: "repair",
    icon: "tool",
    title: "ซ่อมและตรวจเช็ก",
    image: photos.peaRepair,
    imageAlt: "ช่าง A-Care Service ซ่อมคอยล์ร้อนที่การไฟฟ้าส่วนภูมิภาค",
    description: "ตรวจสอบอาการผิดปกติ ซ่อมแซม และเปลี่ยนอะไหล่ที่ชำรุด โดยทีมงานที่มีประสบการณ์",
  },
  {
    slug: "install",
    icon: "air",
    title: "ติดตั้งและย้ายแอร์",
    image: photos.carrierTeam,
    imageAlt: "ทีมช่างหลังติดตั้งแอร์ Carrier Inverter",
    description: "ติดตั้ง รื้อถอน และย้ายเครื่องปรับอากาศ พร้อมตรวจสอบระบบให้พร้อมใช้งาน",
  },
  {
    slug: "maintain",
    icon: "shield",
    title: "บำรุงรักษาระบบ",
    image: photos.maintenace,
    imageAlt: "ช่างล้างแอร์ในสำนักงานของการไฟฟ้าส่วนภูมิภาค",
    description: "ดูแลเชิงป้องกันสำหรับระบบ Wall Type / Cassette Type / Ceiling Type / Chiller ในองค์กร",
  },
];

export const homeServices = [services[0], services[1], services[2]];

export const offers = [
  { title: "บริการล้างแอร์บ้านติดผนัง", price: 800, unit: "ต่อเครื่อง" },
  { title: "บริการล้างแอร์สำนักงานออฟฟิศ 2-4 ตัว", price: 1000, unit: "ต่อเครื่อง" },
];

export const reasons = [
  { icon: "tool", title: "ทีมช่างมีประสบการณ์", text: "ดูแลระบบปรับอากาศและระบบทำความเย็นต่อเนื่องตั้งแต่ปี 2010" },
  { icon: "air", title: "บริการครบวงจร", text: "ล้าง ซ่อม ติดตั้ง ย้าย และบำรุงรักษา ในทีมเดียวกัน" },
  { icon: "clock", title: "นัดหมายตามหน้างาน", text: "จัดคิวเข้าดูแลทั้งบ้านพัก สำนักงาน โรงงาน และร้านค้า" },
  { icon: "check", title: "ตรวจเช็กก่อนลงมือ", text: "ดูอาการและแจ้งแนวทางซ่อมให้ชัดเจน ก่อนเริ่มทำงาน" },
  { icon: "snow", title: "ครอบคลุมทุกระบบ", text: "รับงาน Wall Type / Cassette Type / Ceiling Type / Chiller" },
  { icon: "shield", title: "ใส่ใจทุกขั้นตอน", text: "ตรวจงานหลังให้บริการ เพื่อให้ระบบกลับมาใช้งานได้" },
];

export const systems = [
  { icon: "air", title: "Wall Type", text: "เครื่องปรับอากาศติดผนังสำหรับบ้านและพื้นที่ใช้งานทั่วไป" },
  { icon: "snow", title: "Cassette Type / Ceiling Type", text: "เครื่องฝังฝ้าและเครื่องแขวนเพดานสำหรับสำนักงาน ร้านค้า และอาคาร" },
  { icon: "shield", title: "Chiller", text: "ระบบทำความเย็นขนาดใหญ่ที่ต้องตรวจและบำรุงเป็นรอบ" },
  { icon: "tool", title: "ล้างและตรวจเช็ก", text: "ทำความสะอาด ตรวจอาการ และซ่อมจุดที่ทำให้ระบบทำงานตก" },
];

export const sectors = ["โรงงาน", "สำนักงาน", "สถานศึกษา", "หน่วยงานราชการ", "ร้านอาหาร", "ที่พักอาศัย"];

export const brands = [
  { name: "Daikin", src: "/images/brands/daikin.jpg" },
  { name: "Central Air", src: "/images/brands/central-air.jpg" },
  { name: "Carrier", src: "/images/brands/carrier.jpg" },
  { name: "Hitachi", src: "/images/brands/hitachi.jpg" },
  { name: "Haier", src: "/images/brands/haier.jpg" },
  { name: "LG", src: "/images/brands/lg.jpg" },
  { name: "Mitsubishi Electric", src: "/images/brands/mitsubishi-electric.jpg" },
  { name: "Samsung", src: "/images/brands/samsung.jpg" },
  { name: "Saijo Denki", src: "/images/brands/saijo-denki.jpg" },
  { name: "Sharp", src: "/images/brands/sharp.jpg" },
];

export const projects = [
  {
    title: "หมู่บ้านปัญญาอินทรา",
    category: "ที่พักอาศัย",
    alt: "ช่างล้างแอร์ที่หมู่บ้านปัญญาอินทรา",
    description: "ล้างเครื่องปรับอากาศในบ้านพัก",
    images: [
      work("LINE_ALBUM_ล้างแอร์ หมู่บ้านปัญญาอินทรา_261011_1.jpg"),
      work("LINE_ALBUM_ล้างแอร์ หมู่บ้านปัญญาอินทรา_261011_3.jpg"),
    ],
  },
  {
    title: "หมู่บ้านนาราสิริ",
    category: "ที่พักอาศัย",
    alt: "ช่างล้างแอร์และอบโอโซนที่หมู่บ้านนาราสิริ",
    description: "ล้างแอร์และอบโอโซนในบ้านพัก",
    images: [
      work("LINE_ALBUM_ล้างแอร์-อบโอโซน หมู่บ้านนาราสิริ-กรุง.jpg"),
      work("LINE_ALBUM_ล้างแอร์-อบโอโซน หมู่บ้านนาราสิริ-กรุง2.jpg"),
      work("LINE_ALBUM_ล้างแอร์-อบโอโซน หมู่บ้านนาราสิริ-กรุง3.jpg"),
      work("LINE_ALBUM_ล้างแอร์-อบโอโซน หมู่บ้านนาราสิริ-กรุง4.jpg"),
      work("LINE_ALBUM_ล้างแอร์-อบโอโซน หมู่บ้านนาราสิริ-กรุง5.jpg"),
    ],
  },
  {
    title: "ออฟฟิศ สายไหม",
    category: "สำนักงาน",
    alt: "ช่างล้างแอร์ในออฟฟิศสายไหม",
    description: "ล้างแอร์ในสำนักงาน",
    images: [
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261008_79.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261008_190.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261018_1.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261018_2.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261018_3.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261018_4.jpg"),
      work("LINE_ALBUM_ล้างแอร์ ออฟฟิศ สายไหม_261018_5.jpg"),
    ],
  },
  {
    title: "อาคารไพโรจน์กิจจา",
    category: "สำนักงาน",
    alt: "ช่างล้างแอร์สำนักงานที่อาคารไพโรจน์กิจจา",
    description: "ล้างแอร์สำนักงาน",
    images: [
      work("LINE_ALBUM_ล้างแอร์ สำนักงาน อาคารไพโรจน์กิจจา บา.jpg"),
      work("LINE_ALBUM_ล้างแอร์ สำนักงาน อาคารไพโรจน์กิจจา บา3.jpg"),
    ],
  },
  {
    title: "ห้องประชุม สวนหลวง",
    category: "สำนักงาน",
    alt: "ช่างล้างแอร์คาสเซ็ตในห้องประชุมสวนหลวง",
    description: "ล้างแอร์ห้องประชุม",
    images: [
      work("LINE_ALBUM_ล้างแอร์ห้องประชุม สวนหลวง_261010_1.jpg"),
      work("LINE_ALBUM_ล้างแอร์ห้องประชุม สวนหลวง_261010_2.jpg"),
      work("LINE_ALBUM_ล้างแอร์ห้องประชุม สวนหลวง_261010_5.jpg"),
      work("LINE_ALBUM_ล้างแอร์ห้องประชุม สวนหลวง_261010_6.jpg"),
    ],
  },
  {
    title: "คาเฟ่ เฉลิมพระเกียรติ ร.9",
    category: "ร้านอาหาร",
    alt: "ช่างล้างแอร์ในคาเฟ่เฉลิมพระเกียรติ ร.9",
    description: "ล้างแอร์ในร้าน",
    images: [work("LINE_ALBUM_ล้างแอร์คาเฟ่ เฉลิมพระเกียรติ ร.9 (งานกล.jpg")],
  },
  {
    title: "การไฟฟ้าส่วนภูมิภาค",
    category: "หน่วยงานราชการ",
    alt: "ช่างล้างแอร์ที่การไฟฟ้าส่วนภูมิภาค",
    description: "ซ่อมและล้างเครื่องปรับอากาศ",
    images: [
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_75.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_12.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_23.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_67.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_79.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_81.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_85.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_87.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_117.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_124.jpg"),
      work("LINE_ALBUM_งานซ่อม-การไฟฟ้าส่วนภูมิภาค_261009_125.jpg"),
    ],
  },
  {
    title: "สำนักงานอัยการคลอง 6",
    category: "หน่วยงานราชการ",
    alt: "ช่างล้างคอยล์ร้อนที่สำนักงานอัยการคลอง 6",
    description: "ซ่อมและล้างเครื่องปรับอากาศ",
    images: [
      work("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261009_1.jpg"),
      work("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261018_1.jpg"),
      work("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261018_2.jpg"),
      work("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261018_3.jpg"),
      work("LINE_ALBUM_งานซ่อมและล้างแอร์ สนง.อัยการ คลอง 6_261018_4.jpg"),
    ],
  },
  {
    title: "โรงงาน จังหวัดปทุมธานี",
    category: "โรงงาน",
    alt: "ช่างรื้อถอนและติดตั้งแอร์ที่โรงงานจังหวัดปทุมธานี",
    description: "รื้อถอนและติดตั้งเครื่องปรับอากาศ",
    images: [
      work("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน.jpg"),
      work("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน00.jpg"),
      work("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน3.jpg"),
      work("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน4.jpg"),
      work("LINE_ALBUM_งานรื้อถอนติดตั้งแอร์ โรงงาน จ.ปทุมธาน5.jpg"),
    ],
  },
  {
    title: "ระบบ VRF ถนนรัชดา",
    category: "สำนักงาน",
    alt: "ช่างเปลี่ยนคอมเพรสเซอร์แอร์ระบบ VRF",
    description: "เปลี่ยนคอมเพรสเซอร์ระบบ VRF",
    images: [
      work("LINE_ALBUM_งานเปลี่ยนคอมเพรสเซอร์ แอร์ระบบ VRF_261010_1.jpg"),
      work("LINE_ALBUM_งานเปลี่ยนคอมเพรสเซอร์ แอร์ระบบ VRF_261010_2.jpg"),
      work("LINE_ALBUM_งานเปลี่ยนคอมเพรสเซอร์ แอร์ระบบ VRF_261010_7.jpg"),
      work("LINE_ALBUM_งานเปลี่ยนคอมเพรสเซอร์ แอร์ระบบ VRF_261010_8.jpg"),
    ],
  },
].map((project) => ({ ...project, image: project.images[0] }));

export const extraServices = [
  { icon: "air", title: "เครื่องปรับอากาศ", subtitle: "Wall Type / Cassette Type / Ceiling Type / Chiller", description: "ตรวจเช็ก ล้าง ซ่อม เปลี่ยนอะไหล่ ติดตั้งและย้ายเครื่อง" },
  { icon: "snow", title: "ตู้เย็นและตู้แช่", subtitle: "Refrigerators & Freezers", description: "ตรวจสอบและปรับอุณหภูมิ ซ่อมระบบทำความเย็น ทำความสะอาด ติดตั้งและย้าย" },
  { icon: "droplets", title: "ตู้กดน้ำ เครื่องทำน้ำแข็ง", subtitle: "Ice Machines", description: "ตรวจเช็กและปรับระบบ ซ่อม บำรุงรักษา ทำความสะอาด ติดตั้งและย้าย" },
  { icon: "heater", title: "คอยล์ร้อน", subtitle: "Heaters", description: "ซ่อมบำรุง ล้างทำความสะอาด คอยล์ร้อนภายนอกอาคาร" },
];
