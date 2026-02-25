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
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771841039/freepik__recreate-this-image-in-high-resolution__95930_lxb6cl.png",
  },
  {
    title: "Smart Metering Solutions",
    description: "We offer complete Automatic Metering Infrastructure (AMI) Solution based on various meters and technology for Infrastructure, Industrial, Utility and Oil & Gas market segments.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771841184/smart-metering_vniwm0.png",
  },
  {
    title: "Automation Solutions",
    description: "We offer complete Substation Automation Solution based on various equipment, technology with our partner COPA-DATA, Schneider Electric, ETAP and others for Power Utility.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771841226/automation-solutions_i9vs3d.png",
  },
  {
    title: "LV Power Distribution",
    description: "We provide a wide range of Low Voltage Power Distribution Solutions which are type tested to latest industry standard IEC- 61439 and suitable for infrastructure applications.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771841236/power-_msyxv1.png",
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
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844853/high-power-electricity-poles-technology-background-energy-supply-distribution-energy-high-voltage-supply-concept_j7gdnu.png",
    alt: "Substations",
  },
  {
    title: "Enhancing Grid<br/>Stability - AFIF BSP",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844855/electricity-pylons-city-night-with-reflection-ecological-electrical-power-plants-all-one-frame-ai-generated_wvihj2.png",
    alt: "Transmission",
  },
  {
    title: "A Pilot SAS<br/>Implementation<br/>FRUSYAH (FRS)",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844863/smart-grid-system-powering-urban-landscape-dusk_ikljq1.png",
    alt: "City",
  },
  {
    title: "Powering ROSHN<br/>AL-AROUS Substation",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771844863/electricity-transmission-towers-with-orange-glowing-wires-against-night-sky_awuhgg.png",
    alt: "Industry",
  },
];

export const locationMaps: Record<string, string> = {
  "head-office": "https://i.postimg.cc/qBL9hG2y/Layer_0_(2).jpg",
  "location-01": "https://i.postimg.cc/xjRWJPKD/Layer_0_(1).jpg",
  "location-02": "https://i.postimg.cc/G3QZ8jkC/Layer_0.jpg",
};
