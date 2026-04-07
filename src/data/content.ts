export const clientLogos = [
  "https://i.postimg.cc/FH9k3Hyv/Whats_App_Image_2026_02_24_at_2_47_49_PM_(1).jpg",
  "https://i.postimg.cc/k5g83gG1/Whats_App_Image_2026_02_24_at_2_47_49_PM_(2).jpg",
  "https://i.postimg.cc/7LZ78Zhj/Whats_App_Image_2026_02_24_at_2_47_49_PM_(3).jpg",
  "https://i.postimg.cc/YSCgKC0Z/Whats_App_Image_2026_02_24_at_2_47_49_PM_(4).jpg",
  "https://i.postimg.cc/Ls8fK857/Whats_App_Image_2026_02_24_at_2_47_49_PM_(5).jpg",
  "https://i.postimg.cc/JhzJVz0F/Whats_App_Image_2026_02_24_at_2_47_49_PM_(6).jpg",
  "https://i.postimg.cc/d0VdPV3z/Whats_App_Image_2026_02_24_at_2_47_49_PM.jpg",
];

export interface StatItem {
  end: number;
  suffix: string;
  title: string;
  subtitle: string;
}

export const statsSlides: StatItem[][] = [
  [
    { end: 300, suffix: "+", title: "Team Members", subtitle: "" },
    { end: 15, suffix: "+", title: "years in Business", subtitle: "" },
    { end: 15000, suffix: "+", title: "Panels supplied", subtitle: "" },
  ],
  [
    { end: 120, suffix: "+", title: "Substations completed", subtitle: "(RCP)" },
    { end: 70, suffix: "+", title: "Substations completed", subtitle: "(SAS & PSA)" },
    { end: 1500, suffix: "+", title: "Panels Production Capacity", subtitle: "per year" },
  ],
];

export interface ProductItem {
  title: string;
  description: string;
  image: string;
}

export const products: ProductItem[] = [
  {
    title: "Protection Relay & Control Panels",
    description: "We are approved local manufacturer for Protection Relay and Control Panels up to",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774788943/freepik_0001_5_krwzzr.png",
  },
  {
    title: "Smart Metering Solutions",
    description: "We offer complete Automatic Metering Infrastructure (AMI) Solution based on various meters and technology for Infrastructure, Industrial, Utility and Oil & Gas market segments.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774788853/freepik_0001_4_nbcav6.png",
  },
  {
    title: "Automation Solutions",
    description: "We offer complete Substation Automation Solution based on various equipment, technology with our partner COPA-DATA, Schneider Electric, ETAP and others for Power Utility.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787180/freepik_photo-a-large-electrical-control-panel-with-many-buttons-switches-and-digital-displays-with-a-server-rack-in-the-background-inside-a-room-with-wooden-floors_0001_pbtiir.png",
  },
  {
    title: "LV Power Distribution",
    description: "We provide a wide range of Low Voltage Power Distribution Solutions which are type tested to latest industry standard IEC- 61439 and suitable for infrastructure applications.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787805/freepik_0001_3_ghc3s8.png",
  },
  {
    title: "Prefabricated Substation",
    description: "Complete prefabricated substation solutions designed for rapid deployment, safety, and maximum reliability in diverse environments.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787742/freepik_0001_2_blfsra.png",
  },
  {
    title: "Empty Enclosure & Control Desk",
    description: "High-quality empty enclosures and customized control desks designed to meet stringent industrial standards for various applications.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787729/freepik_photo-a-white-counter-with-a-blue-and-red-logo-multiple-screens-and-chairs-in-the-background-inside-a-control-room_0001_ztdcak.png",
  },
  {
    title: "Sungrow Solar PV Inverter",
    description: "High-efficiency Sungrow Solar PV inverters providing reliable and sustainable solar energy conversion and seamless grid integration.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787619/freepik_photo-solar-panels-and-wind-turbines-in-the-foreground-with-a-city-skyline-and-green-trees-in-the-background-under-a-blue-sky-with-clouds_0001_fnw6xt.png",
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    title: "Testing & Commissioning",
    description: "GIS & AIS Systems up to 380kV & Power Transformers up to 750MVA & Distribution Transformers.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771841423/shutterstock_2615909869_szlltt.png",
  },
  {
    title: "Automation Services",
    description: "Design, Testing & troubleshooting of all types of SAS systems",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844701/Layer_0_ratve0.png",
  },
  {
    title: "Design & Engineering",
    description: "Using the very latest software in design technology (EPLAN,Elecdes, Paneldes, AutoCAD, Photoshop)…",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844701/shutterstock_2499962275_ticmrs.png",
  },
  {
    title: "Trainings",
    description: "SEP offers training on testing of major types of protection relays & SAS Solution (ZENON SAS) & Our team focus on hands on experience to have real time experience for the clients.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844704/shutterstock_682590154_cckram.png",
  },
  {
    title: "Upgrade & Modification for Electrical Installations",
    description: "Our Project team is equipped with vastly experienced and highly skilled engineers, who will take the complete responsibility of the project, understands the complete scope.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844704/shutterstock_1901551999_xz92ew.png",
  },
  {
    title: "Fibre Optic Cabling",
    description: "To support our clients on their requirements during commissioning we are offering accessories/loose material supply for substations which mainly includes supply, splicing.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844704/fibre-optic-cables-blue-purple-background_bzerlc.png",
  },
];

export interface ProjectItem {
  title: string;
  image: string;
  alt: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Powering the<br/>North-West - NIC<br/>CIRCLE BSP",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774787325/shutterstock_2228811757_qlupld.jpg",
    alt: "Substations",
  },
  {
    title: "Enhancing Grid<br/>Stability - AFIF BSP",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774786711/shutterstock_2600820821_dbszpk.jpg",
    alt: "Transmission",
  },
  {
    title: "A Pilot SAS<br/>Implementation<br/>FRUSYAH (FRS)",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774786956/shutteerrrr_f9ror5.png",
    alt: "City",
  },
  {
    title: "Powering ROSHN<br/>AL-AROUS Substation",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1774786962/shutterstock_2423043069_whludf.png",
    alt: "Industry",
  },
  {
    title: "Oil & Gas<br/>Case Studies",
    image: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775559281/Screen_Shot_2026-04-07_at_12.54.26_PM_ukblcm.png",
    alt: "Refinery Substation",
  },
];

export interface LocationDetail {
  title: string;
  address1: string;
  address2: string;
  email: string;
  pinPos: string;
}

export const locationDetails: Record<string, LocationDetail> = {
  'head-office': {
    title: 'Head Office',
    address1: '2nd Industrial City-Riyadh, KSA',
    address2: 'P.O Box: 355950, 11383-Riyadh',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[45%] left-[55%]',
  },
  'location-01': {
    title: 'Al Gihaz Holding – Jeddah branch',
    address1: 'Prince Mohammed Bin Abdulaziz',
    address2: 'St, Al-Andalus, Jeddah 23326, Saudi Arabia',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[55%] left-[35%]',
  },
  'location-02': {
    title: 'Location 02',
    address1: 'King Fahd Road, Olaya District',
    address2: 'Riyadh, KSA',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[38%] left-[58%]',
  },
};
