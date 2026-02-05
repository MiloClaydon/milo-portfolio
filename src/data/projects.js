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
    id: "portfolio-site",
    title: "Portfolio Website",
    category: "Software",
    summary: "A React-based portfolio built from scratch to showcase engineering work.",
    description: "I wanted a portfolio that actually felt like *me*—technical, precise, and a little retro—not just another Squarespace template. I treated this website like an engineering project: defining the constraints (no bloat, high performance), choosing the right tools (React, Vite), and iterating until the user experience felt snappy. It was a deep dive into modern web development, teaching me how to structure component architecture and manage assets properly in a production environment.",
    tech: ["React.js", "Vite", "CSS3", "JavaScript", "Cloudinary"],
    year: "2026",
    layout: "single",
    images: [],
    technicalSpecs: [
      "Stack: React 18, Vite, React Router DOM for seamless client-side navigation.",
      "Deployment: Continuous Integration/Deployment (CI/CD) via Netlify.",
      "Performance: Implemented Cloudinary CDN with f_auto/q_auto optimization, reducing image payloads by ~60%.",
      "Styling: Hand-coded CSS variables for strict theming; complex SVG manipulation for the responsive 'hockey stick' stripes.",
      "Architecture: Modular design with reusable 'ProjectCard' and 'ProjectDetail' components handling dynamic data structures.",
      "Challenge: Designing a responsive SVG background that maintains aspect ratio and precise stripe alignment across every viewport size."
    ]
  },
  {
    id: "wristwatch",
    title: "Precision Wristwatch",
    category: "Machining",
    summary: "A deep dive into high-tolerance product design and stainless steel machining.",
    description: "It started with a challenge from my mentor, Mr. Rembacz: 'Design something you can't just buy.' I chose a watch because it’s the ultimate test of patience. It wasn't just about cutting metal; it was about battling thermal expansion, fighting work-hardening stainless steel, and realizing that my CAD model’s 'perfect' dimensions were a fantasy until I learned how to actually machine them. This project was a 100-hour lesson in humility, metrology, and the stubborn reality of manufacturing.",
    tech: ["SolidWorks", "CAM", "Tormach 1100MX", "Metrology", "DFM"],
    year: "2025",
    pdfPath: "/assets/watchdrawing.pdf",
    layout: "steps",
    steps: [
      {
        title: "The Design Reality Check",
        description: "I started with an ambitious CAD model full of micron-level tolerances. But when I got to the Tormach 1100MX, reality hit hard. The machine couldn't consistently hold those microns in stainless steel without massive effort. I had to pivot hard and learn Design for Manufacturability (DFM)—redesigning the seal locations and geometry so the watch would be bulletproof without requiring a $500k Swiss lathe.",
        images: [WatchMilling1, WatchMilling2]
      },
      {
        title: "The Grind (Literally)",
        description: "Machining this was a marathon. I generated complex G-code for multiple setups and spent dozens of hours standing at the machine, listening to the cutter. I learned that precision isn't just about the tool—it's about how you hold the part. I had to design custom soft jaws and constantly adjust feed rates to prevent the stainless steel from work-hardening and destroying my carbide end mills.",
        images: [WatchMilling3, WatchMilling4, CNCMilling1, CNCMilling2, CNCMilling3]
      },
      {
        title: "The Finished Piece",
        description: "Putting this on my wrist for the first time was surreal. Sure, I can still see the tiny imperfections that nobody else notices, but that's part of the charm. It works, it's waterproof, and it's proof that I can take an idea from a sketch to a functional mechanical assembly. I'm almost afraid to wear it and scratch it, but it drives me to want to build the next one even better.",
        images: [Watch1, Watch2, Watch3, Watch4]
      }
    ],
    technicalSpecs: [
      "Material: 316L Stainless Steel (Case), Brass (Movement Ring), Sapphire Crystal.",
      "Machine: Tormach 1100MX CNC Mill with flood coolant.",
      "Tolerance Target: ±0.01mm on critical bearing surfaces.",
      "Workholding: Custom aluminum soft jaws machined in-situ for perfect concentricity during the Op 2 flip.",
      "Tooling Strategy: Adaptive clearing paths to manage tool load; specific carbide coatings for stainless.",
      "Finishing: Hand-polished to 2000 grit, followed by diamond paste buffing for a mirror finish.",
      "Water Resistance: Dual O-ring seal design rated for 5ATM (static testing)."
    ]
  },
  {
    id: "filament-winder",
    title: "Carbon Fiber Winder",
    category: "Automation",
    summary: "Turning a 3-day manual process into a 2-hour automated system for Space Concordia.",
    description: "Space Concordia builds the most powerful student rocket engines on the planet. The problem? It took 10 people three full days to hand-lay the carbon fiber fuselage. I co-led a team of six to fix this. We didn't just automate a process; we built a 4-axis robot from scratch. I acted as the 'utility player'—doing the structural welding, calculating the motion paths, and writing the Python code to synchronize everything. We turned a 3-day nightmare into a 2-hour push-button operation.",
    tech: ["Python", "Mechatronics", "Structural Welding", "Automation", "NEMA 52 Servos"],
    year: "2025",
    layout: "steps",
    steps: [
      {
        title: "The 'Toy' vs. The Beast",
        description: "We started by buying an off-the-shelf winder, but it was a joke—tiny NEMA 17 motors and plastic wheels trying to pull 60lbs of fiber tension. It was basically a toy. We realized immediately we had to scrap it. I helped design a custom welded steel chassis and sourced massive NEMA 52 servos that could actually handle the torque requirements of a rocket engine.",
        images: [buildingfilamentwinder, WeldedFoot1]
      },
      {
        title: "Full-Stack Engineering",
        description: "This project forced me to do everything. One day I was under the frame MIG welding the steel feet; the next I was debugging a Python multi-threading script to get the 4 axes to talk to each other. The software was the biggest hurdle for me, but solving the synchronization logic gave me a huge appreciation for control systems.",
        images: [wiringfilamentwinder, Winder1, Winder2]
      },
      {
        title: "Optimized Performance",
        description: "The results speak for themselves. By using continuous fiber tows instead of square sheets, we eliminated the weak points between layers. We reduced the engine's mass while keeping the same structural integrity. Watching the machine run its first full pattern autonomously was one of the proudest moments of my degree.",
        images: [WinderVideo, Winder3]
      }
    ],
    technicalSpecs: [
      "Control System: Raspberry Pi 4 running a custom Python script with multi-threading for real-time axis control.",
      "Motors: NEMA 52 (Mandrel Axis) for high-torque rotation; NEMA 23 (Carriage/Eye) for rapid linear positioning.",
      "Kinematics: 4-Axis synchronized motion (Mandrel Rotation, Carriage Linear, Eye Rotation, Eye Linear).",
      "Power Transmission: Precision ball screws for zero-backlash carriage movement.",
      "Tension Control: Active closed-loop feedback maintaining 10-60lbs tension on the fiber tows.",
      "Fabrication: MIG welded mild steel RHS frame; water-jet cut 6061 aluminum motor mounts.",
      "Challenge: Mathematically mapping the linear carriage velocity to the variable angular velocity of the mandrel to maintain a constant winding angle."
    ]
  },
  {
    id: "pottery-wheel",
    title: "Upcycled Pottery Wheel",
    category: "Mechatronics",
    summary: "A 20,000 RPM treadmill motor meets a salvaged laundry transmission.",
    description: "My girlfriend mentioned she wanted to try pottery. Most people would just buy a wheel; I saw an opportunity to build a monster. I went hunting for parts and found a 'broken' washing machine (which, fun fact, turned out to be full of about 1,000 sewing needles—don't ask) and a 2.25HP motor from an old treadmill. The engineering challenge was mating a motor that wants to spin at 20,000 RPM with a wheel that needs to go 30 RPM. It’s a piece of 'Frankenstein engineering' that works better than the pro gear.",
    tech: ["Upcycling", "Power Electronics", "Mechanical Mating", "Fabrication"],
    year: "2023",
    layout: "single",
    images: [Wheel1, ReefTank1],
    technicalSpecs: [
      "Motor: 2.25HP DC Brush Motor (130V) salvaged from a NordicTrack treadmill.",
      "Transmission: 20:1 Planetary Gearbox salvaged from a Kenmore washer.",
      "Controller: PWM DC Speed Controller adapted with a custom foot-pedal potentiometer.",
      "Torque Output: Estimated 80ft-lbs at low RPM (virtually stall-proof during centering).",
      "Fabrication: Custom welded steel frame designed to align the motor shaft with the gearbox spline.",
      "Challenge: Coupling a smooth-shaft DC motor to a splined input shaft without access to a lathe at the time; solved using a heat-shrink interference fit coupler."
    ]
  },
  {
    id: "logic-voltmeter",
    title: "Hard-Wired Logic Voltmeter",
    category: "Electronics",
    summary: "A digital voltmeter built from discrete logic gates—no microcontrollers allowed.",
    description: "In a world of cheap Arduinos, I wanted to do this the hard way. I needed to understand exactly *how* a digital display works, not just how to code one. I built this voltmeter using nothing but discrete logic chips—gates, comparators, and timers. It forced me to manage signal timing, switch bounce, and logic states physically rather than in software. It was an exercise in first-principles engineering that taught me that sometimes, hardware logic is faster, cheaper, and more robust than a processor.",
    tech: ["Digital Logic", "Integrated Circuits", "PCB Design", "Circuit Analysis"],
    year: "2023",
    layout: "single",
    images: [Voltmeter1, Voltmeter2, Voltmeter3, Voltmeter4, Voltmeter5],
    technicalSpecs: [
      "Architecture: Flash ADC utilizing comparator arrays and priority encoders.",
      "Logic Family: 7400-series TTL and CD4000-series CMOS logic.",
      "Display: 3-Digit 7-Segment LED driven by BCD-to-7-Segment decoders.",
      "Power Supply: Linear regulated 5V supply with noise filtering.",
      "Challenge: Designing a hardware-only debounce circuit for the inputs without using software delays.",
      "Outcome: Functional 0-5V range with 0.1V resolution and near-zero latency."
    ]
  },
  {
    id: "foundry",
    title: "Backyard Metallurgy",
    category: "Fabrication",
    summary: "A charcoal-powered foundry for casting aluminum and brass.",
    description: "This is where I really fell in love with making things. I built this foundry with my Grandpa in the backyard. It's pure scrappy engineering: a metal trash can lined with concrete, an electric campfire blower for oxygen injection, and—my favorite part—a crucible made from a cut-off section of a steel ship's mast. We used it to melt down scrap aluminum and cast a full chess set using sand molds. There's nothing quite like the danger and excitement of pouring molten metal to teach you respect for materials.",
    tech: ["Sand Casting", "Pattern Making", "Anodizing", "Thermal Management"],
    year: "2019",
    layout: "single",
    images: [ClaydonBuilding, BuildingWithGrandpa],
    technicalSpecs: [
      "Crucible: Salvaged steel ship mast section (5mm wall thickness) with a welded plate bottom.",
      "Refractory: Homemade mix of Portland cement and Perlite for high insulation.",
      "Fuel Source: Hardwood charcoal with forced air induction via electric blower.",
      "Max Temperature: ~1100°C (Capable of melting Aluminum, Brass, and Copper).",
      "Process: Green sand casting using split-patterns.",
      "Challenge: Controlling the melt temperature to prevent hydrogen porosity in the aluminum while avoiding crucible failure from thermal shock."
    ]
  },
  {
    id: "3d-printers",
    title: "Custom 3D Printers",
    category: "Additive Mfg",
    summary: "From restoring broken machines to building high-speed Voron toolheads.",
    description: "I don't just use printers; I engineer them. This project covers two distinct builds. First, the 'Ship of Theseus': I bought a broken, terrible acrylic printer off Facebook Marketplace and spent hundreds of hours replacing every single part until it became a Klipper-powered workhorse. Second, my Voron V0: I needed something portable and fast for school, so I built a machine that lives in my backpack and prints parts on demand between classes. I optimized both with macros for auto-leveling and nozzle cleaning so I can hit 'print' and walk away.",
    tech: ["Klipper", "Voron Design", "BigTreeTech", "Mechanical Design", "Remote Monitoring"],
    year: "2024",
    layout: "steps",
    steps: [
      {
        title: "The 'Ship of Theseus' Rebuild",
        description: "I bought a pile of junk—a broken acrylic printer—and rebuilt it from the ground up. I designed a rigid aluminum extrusion frame, printed PETG brackets, and swapped the brains for a BigTreeTech board. The biggest upgrade was moving to Klipper firmware, which lets me monitor prints from my phone and stop them if things go spaghetti.",
        images: [_3DPrinterBefore1, _3DPrinterBefore2, _3DPrinterBefore3, _3dprinting, Gridfinity1, _3dprintedgridfinity]
      },
      {
        title: "Voron V0: Speed & Portability",
        description: "This is my 'rapid response' unit. I built it from a kit but tuned it for pure speed. It features a high-flow hotend and custom macros. It allows me to design a part in a lecture and have it printed by the time the next class starts.",
        images: [Voron1, Voron2]
      }
    ],
    technicalSpecs: [
      "Firmware: Klipper running on Raspberry Pi (Mainsail OS) for offloaded motion planning.",
      "Voron Specs: CoreXY kinematics, 120x120mm volume, 5000mm/s² acceleration.",
      "Custom Printer Specs: Cartesian kinematics, Aluminum extrusion frame, Direct Drive Volcano Hotend.",
      "Upgrades: BLTouch auto-leveling, ADXL345 input shaping sensors, filament runout detection.",
      "Challenge: Tuning 'Pressure Advance' and 'Input Shaping' to eliminate ringing/ghosting at high print speeds (200mm/s+)."
    ]
  },
  {
    id: "battery-packs",
    title: "Lithium-Ion Battery Packs",
    category: "Energy",
    summary: "Custom e-bike batteries built with a DIY spot welder.",
    description: "I wanted to build custom batteries for e-bikes, but commercial spot welders were expensive. So, I built one. I salvaged a transformer from an old microwave, cut out the secondary coil, and rewound it with thick gauge wire to dump massive current at low voltage. Using this 'scary but effective' tool, I welded nickel strips to 18650 cells (harvested from old laptops) to build safe, high-capacity packs. It taught me a lot about battery chemistry, thermal management, and respecting high-amperage circuits.",
    tech: ["Design", "Electronics", "Welding", "Coding"],
    year: "2022",
    layout: "single",
    images: [],
    technicalSpecs: [
      "Configuration: 10S4P (36V Nominal) and 13S4P (48V Nominal) packs.",
      "Cells: 18650 Li-Ion (Samsung 25R for performance, salvaged laptop cells for prototypes).",
      "Welder: DIY Microwave Oven Transformer (MOT) rewound for ~800A output.",
      "Controller: Arduino-based pulse timer to control weld duration with millisecond precision.",
      "Safety: BMS integration for cell balancing; Kapton tape and Fishpaper insulation for short prevention.",
      "Challenge: Achieving consistent nickel-to-cell welds without piercing the thin cell casing or overheating the chemistry."
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