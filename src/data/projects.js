import Watch1 from '../assets/Watch1.jpg';
import Watch2 from '../assets/Watch2.mp4';
import Watch3 from '../assets/Watch3.jpg';
import Watch4 from '../assets/Watch4.mp4';
import WatchMilling1 from '../assets/WatchMilling1.jpg';
import WatchMilling2 from '../assets/Watchmilling2.jpg';
import WatchMilling3 from '../assets/WatchMilling3.jpg';
import WatchMilling4 from '../assets/WatchMilling4.jpg';
import CNCMilling1 from '../assets/CNCMilling1.mp4';
import CNCMilling2 from '../assets/CNCMilling2.mp4';
import CNCMilling3 from '../assets/CNCMilling3.mp4';
import Winder1 from '../assets/Winder1.mp4';
import Winder2 from '../assets/Winder2.jpg';
import Winder3 from '../assets/Winder3.mp4';
import WinderVideo from '../assets/WinderVideo.mp4';
import WeldedFoot1 from '../assets/WeldedFoot1(forWinder).jpg';
import Weldin1 from '../assets/Weldin1.jpg';
import Welding2 from '../assets/Welding2.jpg';
import Welding3 from '../assets/Welding3.jpg';
import buildingfilamentwinder from '../assets/buildingfilamentwinder.jpg';
import wiringfilamentwinder from '../assets/wiringfilamentwinder.jpg';
import HomePagePhoto from '../assets/HomePagePhoto.JPG';
import Wheel1 from '../assets/Wheel1.jpg';
import ReefTank1 from '../assets/ReefTank1.jpg';
import Voltmeter1 from '../assets/Voltmeter1.jpg';
import Voltmeter2 from '../assets/Voltmeter2.mp4';
import Voltmeter3 from '../assets/Voltmeter3.mp4';
import Voltmeter4 from '../assets/Voltmeter4.mp4';
import Voltmeter5 from '../assets/Voltmeter5.mp4';
import Voron1 from '../assets/Voron1.mp4';
import Voron2 from '../assets/Voron2.jpg';
import Nomad1 from '../assets/Nomad1.jpg';
import Modix1 from '../assets/Modix1.mp4';
import Modix2 from '../assets/Modix2.jpg';
import CNCParts1 from '../assets/CNCParts1.jpg';
import CNCParts2 from '../assets/CNCParts2.jpg';
import CNCParts3 from '../assets/CNCParts3.jpg';
import cncmillingmachine from '../assets/cncmillingmachine.jpg';
import CNCmachinedPart from '../assets/CNCmachinedPart.jpg';
import ClaydonBuilding from '../assets/ClaydonBuilding.jpg';
import BuildingWithGrandpa from '../assets/BuildingWithGrandpa.jpg';
import Gridfinity1 from '../assets/Gridfinity1.jpg';
import _3dprintedgridfinity from '../assets/3dprintedgridfinity.jpg';
import _3DPrintedPerson from '../assets/3DPrintedPerson(forsurgicalinstrumenttesting).jpg';
import _3DPrinterBefore1 from '../assets/3DPrinterBefore1.jpg';
import _3DPrinterBefore2 from '../assets/3DPrinterBefore2.jpg';
import _3DPrinterBefore3 from '../assets/3DPrinterBefore3.jpg';
import _3dprinting from '../assets/3dprinting.jpg';
import AXYZ1 from '../assets/AXYZ1.mp4';

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
    pdfPath: "/assets/watchdrawing.pdf",
    layout: "steps",
    steps: [
      {
        title: "Design & CAD Modeling",
        description: "Created detailed 3D models in SolidWorks with precise dimensions and GD&T callouts. Designed both the case back and front cover to hold the movement securely while maintaining aesthetic appeal.",
        images: [],
        showPDF: true
      },
      {
        title: "CNC Programming & Machining",
        description: "Generated G-code for the CNC mill and carefully programmed the toolpaths to machine the case from stainless steel blanks. Multiple setups required to achieve all features within tolerance.",
        images: [Watch1, Watch2, Watch3, Watch4, WatchMilling1, WatchMilling2, WatchMilling3, WatchMilling4,CNCMilling1,CNCMilling2,CNCMilling3]
      },
      {
        title: "Finishing & Assembly",
        description: "Hand-finished all surfaces to achieve a mirror polish, assembled the case with the movement and tested for functionality and water resistance.",
        images: [Watch1, Watch2]
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
        images: [buildingfilamentwinder, WeldedFoot1]
      },
      {
        title: "Electronics & Control System",
        description: "Integrated NEMA 23 stepper motors with CNC drivers. Developed Python control script that coordinates all 4 axes to create complex fiber winding patterns. Implemented real-time feedback from tension sensors.",
        images: [wiringfilamentwinder, Winder1]
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
    images: [Wheel1, ReefTank1],
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
    images: [Voltmeter1, Voltmeter2, Voltmeter3],
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
    images: [ClaydonBuilding, BuildingWithGrandpa],
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
        images: [Gridfinity1, _3dprintedgridfinity]
      },
      {
        title: "Extruder & Hot End Integration",
        description: "Installed a Volcano hot end with custom cooling ducts for maximum cooling performance. Calibrated nozzle height and bed leveling for perfect first-layer adhesion.",
        images: [_3dprinting]
      },
      {
        title: "Klipper Firmware Installation",
        description: "Flashed Raspberry Pi with Klipper firmware and connected to printer electronics via USB. Configured motion planning, thermistor calibration, and created custom macros for automated bed leveling.",
        images: [_3DPrinterBefore1, _3DPrinterBefore2]
      },
      {
        title: "Testing & Optimization",
        description: "Ran numerous test prints with varying speeds and acceleration settings. Achieved 200mm/s print speeds while maintaining dimensional accuracy better than ±0.1mm.",
        images: [_3DPrinterBefore3, _3dprinting]
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