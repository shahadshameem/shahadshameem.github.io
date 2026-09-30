export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'embedded' | 'web';
  categoryLabel: string;
  badge?: string;
  badgeType?: 'live' | 'featured' | 'verified';
  shortDesc: string;
  fullDesc: string;
  role: string;
  period: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  architectureDiagram?: string;
  problem: string;
  solution: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  color: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  status: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shahad Shameem V.P",
    title: "Embedded Systems Engineer & Systems Developer",
    location: "Trivandrum, Kerala, India",
    email: "shahadshameemvp@gmail.com",
    phone: "+91 9495816772",
    github: "https://github.com/shahadshameem",
    linkedin: "https://linkedin.com/in/shahad-shameem-v-p-0929a2281",
    tagline: "Building resilient hardware, IoT edge networks, and full-stack software where physical circuits meet cloud scale.",
    status: "Available for engineering roles & collaborative systems projects",
    college: "College of Engineering Trivandrum (CET)",
  },

  stats: [
    { value: "5+", label: "Shipped Projects", sub: "Hardware, IoT & Web" },
    { value: "1.2 km+", label: "LoRa LOS Range", sub: "Survivor Protocol tested" },
    { value: "7 Mos", label: "Enterprise Exp", sub: "Cherrylabs, Bangalore" },
    { value: "8.99", label: "Diploma CGPA", sub: "Electronics Engg / 10" },
  ],

  projects: [
    {
      id: "lora-wsn",
      number: "01",
      title: "LoRa Fault-Tolerant Weather Monitoring System",
      tagline: "Autonomous 'Dual-Brain' Wireless Sensor Network with Survivor Failover Protocol",
      category: "embedded",
      categoryLabel: "Embedded & IoT",
      badge: "Featured Flagship",
      badgeType: "featured",
      shortDesc: "A dual-microcontroller Wireless Sensor Network communicating over 433 MHz LoRa exceeding 1.2 km line-of-sight. Engineered with a custom Survivor Protocol for autonomous failover.",
      fullDesc: "Designed and deployed a mission-critical environmental telemetry network utilizing STM32 ARM Cortex-M3 as the primary processing brain and an ESP32 as a failover/gateway node. When simulated gateway faults or power drops occur, the custom Survivor Protocol triggers a hardware GPIO interrupt, restoring telemetry transmission within 15 seconds without manual intervention.",
      role: "Hardware Architect & Firmware Developer",
      period: "2024",
      tags: ["STM32 (ARM Cortex-M3)", "ESP32", "LoRa SX1278 (433MHz)", "Embedded C++", "Python Flask", "MongoDB Atlas", "Vercel"],
      metrics: [
        { label: "LOS Range", value: "1.2+ km" },
        { label: "Failover Recovery", value: "<15 sec" },
        { label: "Cloud Ingestion", value: "<200 ms" },
        { label: "Sensors Calibrated", value: "Gas, Dust, Atm" },
      ],
      highlights: [
        "Dual-brain architecture using STM32 as compute core and ESP32 as fallback gateway node",
        "Survivor Protocol: GPIO-level interrupt triggers autonomous telemetry rerouting upon node timeout",
        "Calibrated MQ gas, optical dust, and atmospheric barometric sensors using mathematical polynomial models",
        "Python Flask cloud middleware API with sub-200ms ingestion pipeline into MongoDB Atlas",
        "Bypassed institutional firewall restrictions via custom TLS socket streaming",
      ],
      architectureDiagram: `[Sensors: Dust / Gas / Temp] ---> [STM32 Primary Brain]
                                          | (UART / SPI)
[Failover Heartbeat Monitor] <-------+
      | (Autonomous GPIO Interrupt)
      v
[ESP32 Gateway / Standby Brain] ---> [LoRa SX1278 (433 MHz, 1.2km)] ---> [Flask Cloud API] ---> [MongoDB Atlas]`,
      problem: "Traditional standalone sensor stations fail completely when a single microcontroller or transceiver crashes in remote or harsh institutional outdoor environments.",
      solution: "Engineered a redundant dual-brain architecture with continuous heartbeat polling and automatic hardware interrupt failover, keeping telemetry intact over long distances.",
      links: {
        github: "https://github.com/shahadshameem",
      },
    },
    {
      id: "waymate",
      number: "02",
      title: "WayMate — Campus Ride-Sharing & Cab-Pooling Platform",
      tagline: "Progressive Web App for Verified College Students Travelling & Carpooling",
      category: "web",
      categoryLabel: "Web & Cloud Platforms",
      badge: "Live Production PWA",
      badgeType: "live",
      shortDesc: "A mobile-first progressive web application built for verified college students at CET to share rides, split cab pools, and coordinate travel safely with real-time Firebase backend.",
      fullDesc: "WayMate addresses fragmented WhatsApp coordination and high individual travel costs for students travelling between campus and home. Built with React 19, TypeScript, and Tailwind CSS on Vite, it integrates Cloud Firestore transactional seat management (preventing concurrency race conditions), deterministic corridor matching, institutional student email verification, and DPDP-aligned data rights.",
      role: "Lead Full-Stack Developer & Product Creator",
      period: "2026",
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Cloud Firestore", "Firebase Auth", "Cloud Functions", "PWA"],
      metrics: [
        { label: "Target College", value: "CET Kerala" },
        { label: "Seat Concurrency", value: "100% Safe" },
        { label: "Offline Support", value: "PWA Cache" },
        { label: "Architecture", value: "Mobile-First" },
      ],
      highlights: [
        "Multi-tier college email and ID verification ensuring exclusive access for verified students",
        "Deterministic ride matching algorithm matching corridor routes, schedules, and gender preferences",
        "Cloud Firestore transactions guaranteeing atomic seat reservations under concurrent booking requests",
        "Dedicated cab-pool module allowing students to organize and split long-distance transit costs",
        "Comprehensive administrative portal for user verifications, route management, and data privacy requests",
        "Installable PWA with offline persistent Firestore cache and real-time FCM notification support",
      ],
      architectureDiagram: `[Student Mobile PWA / React 19]
      |
      +---> [Firebase Auth: Institutional Verification]
      +---> [Cloud Firestore: Atomic Transactions & Listeners]
      +---> [Cloud Functions: Automated Ride Corridor Matching]
      +---> [Cloud Messaging: Real-time Seat Decision Alerts]
      +---> [Admin Portal: Verification Queue & DPDP Management]`,
      problem: "College students heading home on weekends face chaotic WhatsApp groups, untrusted strangers, and expensive solo cab rides with no verification or coordination tools.",
      solution: "Created an institutionally verified, mobile-first PWA with atomic seat locks, route matching, and cab-pool groups tailored specifically for university campus communities.",
      links: {
        live: "https://waymate-u.web.app/",
        github: "https://github.com/shahadshameem/waymate",
      },
    },
    {
      id: "biometric-attendance",
      number: "03",
      title: "Biometric Attendance & Cloud Logging System",
      tagline: "Hardware Fingerprint Scanner with Real-time Google Sheets API Integration",
      category: "embedded",
      categoryLabel: "Embedded & IoT",
      shortDesc: "A fingerprint-based biometric authentication system integrated with cloud APIs for automated real-time attendance logging and reporting.",
      fullDesc: "Replaced paper-based and error-prone manual attendance registers with an optical fingerprint scanner interfaced to an Arduino microcontroller. Encrypted student fingerprints are processed locally and confirmed events are pushed immediately through the Google Sheets API.",
      role: "Hardware & Firmware Lead",
      period: "2023",
      tags: ["Arduino", "Optical Fingerprint Sensor", "Google Sheets API", "Cloud Telemetry", "C++"],
      metrics: [
        { label: "Log Time", value: "<1.5 sec" },
        { label: "Error Rate", value: "<0.1%" },
        { label: "Manual Effort", value: "-100%" },
        { label: "Connectivity", value: "Cloud Sync" },
      ],
      highlights: [
        "Local biometric template matching on dedicated optical sensor DSP module",
        "Direct HTTPS cloud logging into Google Sheets API with timestamped records",
        "Audible and visual OLED feedback for accepted and rejected recognition attempts",
        "Eliminated proxy attendance and manual logging overhead across campus laboratories",
      ],
      architectureDiagram: `[Fingerprint Sensor] ---> [Arduino MCU] ---> [Cloud Gateway] ---> [Google Sheets API Database]`,
      problem: "Manual attendance signatures cause time loss, proxy attendance, and tedious data entry for faculty.",
      solution: "Engineered a low-cost, standalone biometric scanner with instant spreadsheet cloud syncing.",
      links: {
        github: "https://github.com/shahadshameem",
      },
    },
    {
      id: "home-automation",
      number: "04",
      title: "IoT Smart Home Appliance Controller",
      tagline: "Wi-Fi Connected Microcontroller with Mobile Telemetry & Remote Switching",
      category: "embedded",
      categoryLabel: "Embedded & IoT",
      shortDesc: "Smart automation system utilizing ESP8266 and Blynk IoT platform enabling sub-second remote control of high-voltage appliances over Wi-Fi.",
      fullDesc: "Designed a multi-channel AC relay control board powered by an ESP8266 microcontroller with Wi-Fi telemetry. Integrated with the Blynk IoT cloud infrastructure, enabling low-latency status monitoring and remote device switching from any smartphone.",
      role: "IoT Engineer",
      period: "2023",
      tags: ["ESP8266 (Wi-Fi)", "Blynk IoT Platform", "Relay Control", "Embedded C++", "Mobile App"],
      metrics: [
        { label: "Switch Latency", value: "<300 ms" },
        { label: "Channels", value: "4x AC Relays" },
        { label: "Isolation", value: "Optocoupler" },
        { label: "Uptime", value: "99.9%" },
      ],
      highlights: [
        "Optoisolated relay interface safeguarding low-voltage logic from AC mains surges",
        "Real-time bidirectional synchronization with Blynk mobile application",
        "Automatic reconnection logic handling intermittent Wi-Fi access points",
        "Hardware manual override switches maintaining functionality during internet outages",
      ],
      architectureDiagram: `[Smartphone App] ---> [Blynk Cloud Broker] ---> [ESP8266 Wi-Fi] ---> [Optoisolators & Relays] ---> [AC Appliances]`,
      problem: "Traditional home electrical installations lack remote visibility and energy control without expensive proprietary hubs.",
      solution: "Built a cost-effective, modular Wi-Fi relay unit with mobile control and fail-safe physical overrides.",
      links: {
        github: "https://github.com/shahadshameem",
      },
    },
    {
      id: "cet-mess-management",
      number: "05",
      title: "ICC CET Mess Management Web Platform",
      tagline: "Student Meal Tracking, Billing, and Administrative Reporting Platform",
      category: "web",
      categoryLabel: "Web & Cloud Platforms",
      shortDesc: "Full-featured web platform managing daily student mess registration, meal tracking, fee clearances, and automated committee reporting for ICC CET.",
      fullDesc: "Developed for the College of Engineering Trivandrum (ICC CET) mess committee to digitize dining hall operations. Handles student roster management, daily meal opt-ins/opt-outs, automated monthly due calculations, and administrative data exports.",
      role: "Full-Stack Web Developer",
      period: "2024",
      tags: ["HTML5", "CSS3", "JavaScript", "Google AppScript", "Web Architecture"],
      metrics: [
        { label: "Active Diners", value: "Hundreds" },
        { label: "Billing Accuracy", value: "100%" },
        { label: "Report Generation", value: "Instant" },
        { label: "Deployment", value: "Active Campus" },
      ],
      highlights: [
        "Student self-service portal for meal opt-out notices and due verifications",
        "Automated billing algorithms calculating shared expenses and individual dues",
        "Centralized administrative dashboard for mess committee management and audit trails",
        "Significantly improved financial transparency and eliminated manual registry reconciliations",
      ],
      architectureDiagram: `[Student / Admin Web UI] ---> [Google AppScript Engine] ---> [Relational Data Store] ---> [Monthly Billing Sheets]`,
      problem: "Hundreds of hostel residents tracking meals on manual paper slips led to accounting disputes and wasted food.",
      solution: "Digitized daily headcount, student meal opt-outs, and monthly expense calculations into a unified web portal.",
      links: {
        github: "https://github.com/shahadshameem",
      },
    },
  ] as Project[],

  skills: [
    {
      id: "embedded",
      title: "Embedded & Firmware",
      desc: "Microcontrollers, bare-metal programming, peripheral drivers & RTOS",
      iconName: "Cpu",
      color: "sky",
      skills: [
        { name: "STM32 (ARM Cortex-M3)", highlight: true },
        { name: "ESP32 & ESP8266", highlight: true },
        { name: "Embedded C / C++", highlight: true },
        { name: "Arduino & AVR" },
        { name: "UART / SPI / I2C / GPIO", highlight: true },
        { name: "Hardware Interrupts & Timers" },
        { name: "Sensor Interfacing & Calibration" },
        { name: "Firmware Failover Protocols" },
      ],
    },
    {
      id: "iot",
      title: "IoT & Wireless Telemetry",
      desc: "Long-range radio transmission, edge gateways & cloud brokers",
      iconName: "Radio",
      color: "teal",
      skills: [
        { name: "LoRa SX1278 (433 MHz)", highlight: true },
        { name: "MQTT Protocol" },
        { name: "Wi-Fi & HTTP REST Telemetry", highlight: true },
        { name: "Blynk IoT Cloud" },
        { name: "Edge Data Processing" },
        { name: "MongoDB Atlas Ingestion" },
        { name: "RF Antenna & Range Testing" },
      ],
    },
    {
      id: "web-cloud",
      title: "Web & Cloud Engineering",
      desc: "Modern reactive frontends, atomic databases & cloud functions",
      iconName: "Layers",
      color: "indigo",
      skills: [
        { name: "React 19 & TypeScript", highlight: true },
        { name: "Vite & Tailwind CSS v4", highlight: true },
        { name: "Cloud Firestore & Transactions", highlight: true },
        { name: "Firebase Auth & FCM", highlight: true },
        { name: "Firebase Cloud Functions" },
        { name: "Python & Flask APIs" },
        { name: "PWA (Service Workers & Cache)", highlight: true },
        { name: "Git & GitHub Actions" },
      ],
    },
    {
      id: "networking",
      title: "Enterprise Networking",
      desc: "Firewall deployment, infrastructure security & network operations",
      iconName: "Shield",
      color: "amber",
      skills: [
        { name: "Fortinet Firewalls (FortiGate)", highlight: true },
        { name: "Network Infrastructure Monitoring", highlight: true },
        { name: "Ticketing & SLA Compliance" },
        { name: "Remote Troubleshooting" },
        { name: "TCP/IP, Routing & Subnetting" },
        { name: "Firewall Policy Configuration" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "Jul 2023 — Jan 2024",
      role: "Customer Support Engineer",
      company: "Cherrylabs Pvt. Ltd.",
      location: "Bangalore, India",
      type: "Full-Time Industry Experience",
      points: [
        "Configured, deployed, and supported enterprise Fortinet Firewalls across client network architectures",
        "Resolved tier-1/tier-2 network tickets within strict SLA response windows, collaborating directly with senior systems engineers",
        "Conducted remote and on-site troubleshooting for network outages, throughput bottlenecks, and gateway hardware faults",
        "Monitored network integrity, security policies, and uptime logs across multi-site production infrastructure",
      ],
      technologies: ["Fortinet FortiGate", "Network Troubleshooting", "SLA Management", "Firewall Rules", "TCP/IP"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Technology — Electronics & Communication Engineering",
      institution: "College of Engineering Trivandrum (CET)",
      period: "July 2024 — April 2027 (Expected)",
      grade: "Currently Pursuing (3rd Year)",
      status: "Active",
      highlights: [
        "Focus on Embedded Systems, Microprocessors, Wireless Communications, and Signal Processing",
        "Active member of campus hardware and technical engineering initiatives",
        "Creator of campus engineering platforms including WayMate and ICC CET Mess systems",
      ],
    },
    {
      degree: "Diploma in Electronics Engineering",
      institution: "Seethi Sahib Memorial Polytechnic College, Malappuram",
      period: "August 2020 — June 2023",
      grade: "CGPA: 8.99 / 10",
      status: "Graduated with Distinction",
      highlights: [
        "Ranked among top percentage of department with an outstanding 8.99 CGPA",
        "Hands-on laboratory training in microcontrollers, digital circuit design, and PCB prototyping",
        "Completed specialized certification in Project Prototyping Using Embedded Systems and IoT",
      ],
    },
  ] as EducationItem[],

  terminalCommands: [
    {
      cmd: "help",
      desc: "Show available terminal commands",
    },
    {
      cmd: "about",
      desc: "Print brief engineering profile and focus areas",
    },
    {
      cmd: "skills",
      desc: "List technical skills across embedded, IoT, cloud, network",
    },
    {
      cmd: "projects",
      desc: "List all 5 hardware & software projects with status",
    },
    {
      cmd: "cat waymate.md",
      desc: "Display technical architecture of the WayMate PWA",
    },
    {
      cmd: "cat lora.c",
      desc: "Inspect the Survivor Protocol failover interrupt routine",
    },
    {
      cmd: "ping 1.2km",
      desc: "Simulate a LoRa RF packet transmission to remote gateway",
    },
    {
      cmd: "contact",
      desc: "Display direct email, phone, and profile links",
    },
    {
      cmd: "clear",
      desc: "Clear the terminal screen",
    },
  ],
};
