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
    summary: "A deep dive into high-tolerance product design and stainless steel machining.",
    description: "Inspired by my mentor, Mr. Rembacz, I set out to bridge the gap between 'ideal CAD' and 'real-world manufacturing.' This project was a 100+ hour masterclass in GD&T, CAM, and the stubborn reality of machining stainless steel.",
    tech: ["SolidWorks", "CAM", "Tormach 1100MX", "Metrology", "DFM"],
    year: "2025",
    challenges: "The primary technical hurdle was reconciling the micron-level tolerances in my CAD with the capabilities of a Tormach 1100MX. Stainless steel work-hardening required a complete redesign of the seals and geometry to ensure the part could be manufactured reliably without requiring impossible machine precision.",
    pdfPath: "/assets/watchdrawing.pdf",
    layout: "steps",
    steps: [
      {
        title: "The Design Challenge",
        description: "I initially designed for tolerances that were theoretically perfect but practically impossible. This forced a major pivot: I redesigned the entire assembly for manufacturability (DFM), modifying seal locations so the watch would be bulletproof without needing a $500k machine.",
        images: [WatchMilling1, WatchMilling2]
      },
      {
        title: "Manufacturing & Metrology",
        description: "Executing complex G-code on multiple setups. I learned that the secret to precision isn't just the tool—it's the manipulation of the process to account for tool wear and material deflection.",
        images: [WatchMilling3, WatchMilling4, CNCMilling1, CNCMilling2, CNCMilling3]
      },
      {
        title: "The Finished Piece",
        description: "Wearing a piece of solid steel you machined yourself is a unique feeling. It isn't just jewelry; it's a working mechanical assembly that proves I can take an idea from a napkin sketch to a finished, waterproof product.",
        images: [Watch1, Watch2, Watch3, Watch4]
      }
    ]
  },
  {
    id: "filament-winder",
    title: "Carbon Fiber Winder",
    category: "Automation",
    summary: "Turning a 3-day manual process into a 2-hour automated system for Space Concordia.",
    description: "Space Concordia builds the most powerful student rocket engines in the world, but hand-laying the carbon fiber fuselage took 10 people three days. I co-led a team of six to build a 4-axis winder that slashed that time to just 2 hours with only two operators.",
    tech: ["Python", "Mechatronics", "Structural Welding", "Automation", "NEMA 52 Servos"],
    year: "2025",
    challenges: "We originally tried modifying an off-the-shelf winder, but the NEMA 17 motors were woefully underpowered for 60lbs of fiber tension. We had to scrap it and engineer a custom chassis with NEMA 52 servos, solving complex 4-axis synchronization issues in Python along the way.",
    layout: "steps",
    steps: [
      {
        title: "The Problem: Scaling a Toy",
        description: "The commercial machine was a toy—plastic wheels and tiny motors. We realized we needed a machine capable of winding 6 continuous tows of carbon fiber at high tension, which required a complete structural redesign using welded steel.",
        images: [buildingfilamentwinder, WeldedFoot1]
      },
      {
        title: "Full-Stack Integration",
        description: "I acted as a jack-of-all-trades: handling engineering calcs, structural welding, and writing the Python control logic. Debugging the 4-axis synchronization was the hardest part, but it sparked my interest in software development.",
        images: [wiringfilamentwinder, Winder1, Winder2]
      },
      {
        title: "Optimized Performance",
        description: "By using continuous fiber tows instead of square sheets, we eliminated weak points and reduced the overall mass of the engine without sacrificing strength.",
        images: [WinderVideo, Winder3]
      }
    ]
  },
  {
    id: "pottery-wheel",
    title: "Upcycled Pottery Wheel",
    category: "Mechatronics",
    summary: "A 20,000 RPM treadmill motor meets a salvaged laundry transmission.",
    description: "When my girlfriend wanted to try pottery, I saw an opportunity for 'Frankenstein Engineering.' I salvaged a 2.25HP treadmill motor and mated it to a transmission from a 'broken' washing machine (which I discovered was actually just full of about 1,000 sewing needles).",
    tech: ["Upcycling", "Power Electronics", "Mechanical Mating", "Fabrication"],
    year: "2023",
    layout: "single",
    challenges: "The main challenge was mechanical integration: mating a high-speed (20k RPM) motor to a low-speed application. The washing machine transmission provided a 20:1 reduction, allowing me to achieve high torque at low speeds without stalling.",
    images: [Wheel1, ReefTank1]
  },
  {
    id: "logic-voltmeter",
    title: "Hard-Wired Logic Voltmeter",
    category: "Electronics",
    summary: "A digital voltmeter built from discrete logic gates—no microcontrollers allowed.",
    description: "While most would reach for an Arduino, I wanted to understand the 'why' behind the digital display. I built this voltmeter using discrete logic chips to master circuit design from first principles.",
    tech: ["Digital Logic", "Integrated Circuits", "PCB Design", "Circuit Analysis"],
    year: "2023",
    layout: "single",
    challenges: "Avoiding the easy route (microcontrollers) meant I had to manually manage signal timing and logic states. It proved that for simple tasks, dedicated hardware logic is often more efficient and cheaper than a general-purpose processor.",
    images: [Voltmeter1, Voltmeter2, Voltmeter3, Voltmeter4, Voltmeter5]
  },
  {
    id: "foundry",
    title: "Backyard Metallurgy",
    category: "Fabrication",
    summary: "A charcoal-powered foundry for casting aluminum and brass.",
    description: "Built with my Grandpa, this foundry was a masterclass in 'scrappy engineering.' We used a concrete-lined metal can, a campfire blower for oxygen, and a section of a ship's mast as our crucible. We successfully cast a full aluminum chess set.",
    tech: ["Sand Casting", "Pattern Making", "Anodizing", "Thermal Management"],
    year: "2019",
    layout: "single",
    challenges: "Managing thermal gradients in a charcoal-fired system is difficult. We had to carefully control the blower speed and fuel mix to reach melting temps for brass without overheating the crucible or oxidizing the melt.",
    images: [ClaydonBuilding, BuildingWithGrandpa]
  },
  {
    id: "3d-printers",
    title: "Custom 3D Printers",
    category: "Additive Mfg",
    summary: "From restoring broken machines to building high-speed Voron toolheads.",
    description: "I don't just use printers; I engineer them. This project covers two distinct builds: the complete overhaul of a broken 'trash' printer into a reliable Klipper workhorse, and the assembly of a portable high-speed Voron V0.",
    tech: ["Klipper", "Voron Design", "BigTreeTech", "Mechanical Design", "Remote Monitoring"],
    year: "2024",
    challenges: "The biggest technical leap was migrating to Klipper. It allowed me to offload processing to a Raspberry Pi, enabling complex motion planning and remote monitoring that standard firmware couldn't handle.",
    layout: "steps",
    steps: [
      {
        title: "The 'Ship of Theseus'",
        description: "I bought a broken acrylic printer and replaced nearly every part. I designed a rigid aluminum frame, printed PETG brackets, and installed a BigTreeTech board. It went from a reliable failure to a remotely-monitored workhorse.",
        images: [_3DPrinterBefore1, _3DPrinterBefore2, _3DPrinterBefore3, _3dprinting, Gridfinity1, _3dprintedgridfinity]
      },
      {
        title: "Voron V0: Portable Precision",
        description: "I needed a printer I could take to school for on-demand prototyping. This Voron V0 is tuned for speed and reliability, featuring auto-bed leveling and nozzle cleaning macros so I can print parts between classes.",
        images: [Voron1, Voron2]
      }
    ]
  },
  {
    id: "battery-packs",
    title: "Lithium-Ion Battery Packs",
    category: "Energy",
    summary: "Custom e-bike batteries built with a DIY spot welder.",
    description: "Designed and assembled custom Lithium-Ion battery packs for electric bikes. To build these safely, I first engineered and built a spot welder using a microwave oven transformer.",
    tech: ["Design", "Electronics", "Welding", "Coding"],
    year: "2022",
    layout: "single",
    challenges: "Achieving consistent weld strength without damaging the cells, and ensuring the BMS (Battery Management System) safely monitors all cells.",
    images: []
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