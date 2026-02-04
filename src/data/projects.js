export const projects = [
  {
    id: "wristwatch",
    title: "Precision Wristwatch",
    category: "Machining",
    summary: "Custom designed and manufactured mechanical wristwatch case.",
    description: "A complete exercise in precision manufacturing. I designed and machined a custom wristwatch case, focusing on tight tolerances and surface finish. This project demonstrates high-level CNC and manual machining capabilities.",
    tech: ["CAD", "CNC machining", "Manual machining", "Metrology", "GD&T"],
    year: "2025",
    challenges: "Maintaining tolerances within 0.01mm while working with hardened steel. The challenge was achieving a consistent mirror finish on the case while keeping the internal movement tolerances tight enough for reliable operation.",
    pdfPath: "/assets/WatchDrawings.pdf",
    layout: "steps",
    steps: [
      {
        title: "Design & CAD Modeling",
        description: "Created detailed 3D models in SolidWorks with precise dimensions and GD&T callouts. Designed both the case back and front cover to hold the movement securely while maintaining aesthetic appeal.",
        images: ["/assets/wristwatch-cad-1.jpg", "/assets/wristwatch-cad-2.jpg"]
      },
      {
        title: "CNC Programming & Machining",
        description: "Generated G-code for the CNC mill and carefully programmed the toolpaths to machine the case from stainless steel blanks. Multiple setups required to achieve all features within tolerance.",
        images: ["/assets/wristwatch-cnc-1.jpg"]
      },
      {
        title: "Finishing & Assembly",
        description: "Hand-finished all surfaces to achieve a mirror polish, assembled the case with the movement and tested for functionality and water resistance.",
        images: ["/assets/wristwatch-finish-1.jpg", "/assets/wristwatch-assembly-1.jpg"]
      }
    ]
  },
  {
    id: "filament-winder",
    title: "Carbon Fiber Winder",
    category: "Automation",
    summary: "4-axis filament winding machine for Space Concordia.",
    description: "Co-lead on the design and fabrication of a 4-axis filament winding machine. This automated system is designed to manufacture carbon fiber rocket fuselage components for the Space Concordia team.",
    tech: ["CAD", "Design", "Automation", "Coding", "Welding and fabrication", "Team skills", "Management"],
    year: "2025",
    challenges: "Coordinating 4 axes simultaneously while maintaining consistent fiber tension and preventing buckling during the winding process.",
    layout: "steps",
    steps: [
      {
        title: "Structural Design & Fabrication",
        description: "Designed and welded the main frame using steel tubing. Incorporated precision mounting points for the four stepper motors and mandrel assembly. Used laser cutting for precision brackets.",
        images: ["/assets/winder-frame-1.jpg", "/assets/winder-weld-1.jpg"]
      },
      {
        title: "Electronics & Control System",
        description: "Integrated NEMA 23 stepper motors with CNC drivers. Developed Python control script that coordinates all 4 axes to create complex fiber winding patterns. Implemented real-time feedback from tension sensors.",
        images: ["/assets/winder-electronics-1.jpg", "/assets/winder-control-1.jpg"]
      }
    ]
  },
  {
    id: "pottery-wheel",
    title: "Upcycled Pottery Wheel",
    category: "Mechatronics",
    summary: "Built from a treadmill motor and laundry machine gearbox.",
    description: "An engineering challenge in upcycling. I constructed a high-torque pottery wheel by repurposing a 2.25HP treadmill motor and mating it with a step-down gearbox salvaged from a washing machine. Includes custom speed control electronics.",
    tech: ["Design", "Electronics", "Welding and fabrication", "Automation"],
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
    tech: ["Design", "Electronics", "Welding and fabrication", "Coding"],
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
    tech: ["Design", "Design for manufacturing", "Manual machining"],
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
    tech: ["CAD", "Design", "Electronics", "Coding", "Automation"],
    year: "2024",
    challenges: "Tuning Klipper firmware parameters for high-speed printing while maintaining dimensional accuracy and surface quality.",
    layout: "steps",
    steps: [
      {
        title: "Frame Assembly & Calibration",
        description: "Built the Prusa i3 frame from aluminum extrusions and acrylic panels. Installed linear rails for smooth motion, calibrated XYZ axes to ensure perfect perpendicularity.",
        images: ["/assets/printer-frame-1.jpg", "/assets/printer-frame-2.jpg"]
      },
      {
        title: "Extruder & Hot End Integration",
        description: "Installed a Volcano hot end with custom cooling ducts for maximum cooling performance. Calibrated nozzle height and bed leveling for perfect first-layer adhesion.",
        images: ["/assets/printer-hotend-1.jpg"]
      },
      {
        title: "Klipper Firmware Installation",
        description: "Flashed Raspberry Pi with Klipper firmware and connected to printer electronics via USB. Configured motion planning, thermistor calibration, and created custom macros for automated bed leveling.",
        images: ["/assets/printer-pi-1.jpg", "/assets/printer-klipper-1.jpg"]
      },
      {
        title: "Testing & Optimization",
        description: "Ran numerous test prints with varying speeds and acceleration settings. Achieved 200mm/s print speeds while maintaining dimensional accuracy better than ±0.1mm.",
        images: ["/assets/printer-test-1.jpg", "/assets/printer-final-1.jpg"]
      }
    ]
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
  "CAD",
  "CAM",
  "Manual machining",
  "CNC machining",
  "Electronics",
  "Design",
  "Design for manufacturing",
  "Management",
  "Team skills",
  "Welding and fabrication",
  "Metrology",
  "GD&T",
  "Automation",
  "Coding"
];