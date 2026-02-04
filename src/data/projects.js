export const projects = [
  {
    id: "wristwatch",
    title: "Precision Wristwatch",
    category: "Machining",
    summary: "Custom designed and manufactured mechanical wristwatch case.",
    description: "A complete exercise in precision manufacturing. I designed and machined a custom wristwatch case, focusing on tight tolerances and surface finish. This project demonstrates high-level CNC and manual machining capabilities.",
    tech: ["CNC Machining", "SolidWorks", "Metrology", "GD&T"],
    year: "2025",
    images: ["/assets/wristwatch-1.jpg", "/assets/wristwatch-2.jpg", "/assets/wristwatch-3.jpg"],
    challenges: "Maintaining tolerances within 0.01mm while working with hardened steel. The challenge was achieving a consistent mirror finish on the case while keeping the internal movement tolerances tight enough for reliable operation."
  },
  {
    id: "filament-winder",
    title: "Carbon Fiber Winder",
    category: "Automation",
    summary: "4-axis filament winding machine for Space Concordia.",
    description: "Co-lead on the design and fabrication of a 4-axis filament winding machine. This automated system is designed to manufacture carbon fiber rocket fuselage components for the Space Concordia team.",
    tech: ["Mechatronics", "4-Axis CNC", "Composite Materials", "Python"],
    year: "2025",
    images: ["/assets/winder-1.jpg", "/assets/winder-2.jpg"],
    challenges: "Coordinating 4 axes simultaneously while maintaining consistent fiber tension and preventing buckling during the winding process."
  },
  {
    id: "pottery-wheel",
    title: "Upcycled Pottery Wheel",
    category: "Mechatronics",
    summary: "Built from a treadmill motor and laundry machine gearbox.",
    description: "An engineering challenge in upcycling. I constructed a high-torque pottery wheel by repurposing a 2.25HP treadmill motor and mating it with a step-down gearbox salvaged from a washing machine. Includes custom speed control electronics.",
    tech: ["Power Electronics", "Mechanical Design", "Fabrication", "Upcycling"],
    year: "2023",
    images: ["/assets/pottery-1.jpg", "/assets/pottery-2.jpg"],
    challenges: "Matching the motor speed curve to pottery wheel requirements and creating a smooth speed control without vibration."
  },
  {
    id: "battery-packs",
    title: "Lithium-Ion Battery Packs",
    category: "Energy",
    summary: "Custom e-bike batteries built with a DIY spot welder.",
    description: "Designed and assembled custom Lithium-Ion battery packs for electric bikes. To build these safely, I first engineered and built a spot welder using a microwave oven transformer to weld the nickel strips to the 18650 cells (recycled from laptops).",
    tech: ["Battery Safety", "Spot Welding", "Electronics", "Sustainability"],
    year: "2022",
    images: ["/assets/battery-1.jpg", "/assets/battery-2.jpg", "/assets/battery-3.jpg"],
    challenges: "Achieving consistent weld strength without damaging the cells, and ensuring the BMS (Battery Management System) safely monitors all cells."
  },
  {
    id: "foundry",
    title: "Metal Foundry",
    category: "Fabrication",
    summary: "Backyard foundry for casting aluminum and brass parts.",
    description: "Built a propane-powered metal foundry capable of melting aluminum and brass. Used for casting custom mechanical parts and prototyping components for other engineering projects.",
    tech: ["Thermodynamics", "Casting", "Safety Protocols", "Mold Making"],
    year: "2019",
    images: ["/assets/foundry-1.jpg", "/assets/foundry-2.jpg"],
    challenges: "Controlling melt temperature and pour rate to avoid defects like porosity and shrinkage in the final castings."
  },
  {
    id: "3d-printers",
    title: "Custom 3D Printers",
    category: "Additive Mfg",
    summary: "Heavily modified Prusa i3 & Klipper conversions.",
    description: "I don't just use printers; I build them. My fleet includes a heavily modified acrylic Prusa i3 clone with a custom frame and print head. I also converted machines to run Klipper firmware, enabling wireless control, AI print failure detection, and high-speed printing.",
    tech: ["Klipper", "Firmware", "3D Printing", "Electronics"],
    year: "2024",
    images: ["/assets/printer-1.jpg", "/assets/printer-2.jpg", "/assets/printer-3.jpg"],
    challenges: "Tuning Klipper firmware parameters for high-speed printing while maintaining dimensional accuracy and surface quality."
  }
];

export const education = {
  school: "Concordia University, Montreal",
  degree: "BEng in Mechanical Engineering",
  year: "2025",
  details: [
    "Dean's List for three consecutive years",
    "GPA: 4.12 / 4.3",
    "Engineering Technician (2023-2025)",
    "Teaching Assistant (2022-2024)"
  ]
};

export const skills = [
  "SolidWorks / Fusion 360 / Inventor",
  "CNC & Manual Machining",
  "Lithium Battery Design",
  "Mechatronics & Automation",
  "3D Printing (FDM & Klipper)",
  "Welding & Fabrication",
  "Python & C++",
  "English / French / Spanish"
];