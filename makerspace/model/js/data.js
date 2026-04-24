// Actual FDE Schools List (Realistic Data Only)
const SCHOOLS = [
  {
    id: 1,
    name: "IMCG Golra",
    location: "Golra, Islamabad",
    gallery: [
      "/images/IMCG Golra/img1.jpg", "/images/IMCG Golra/img2.jpg", "/images/IMCG Golra/img3.jpg",
      "/images/IMCG Golra/img4.jpg", "/images/IMCG Golra/img5.jpg", "/images/IMCG Golra/img6.jpg",
      "/images/IMCG Golra/img7.jpg", "/images/IMCG Golra/img8.jpg", "/images/IMCG Golra/img9.jpg"
    ]
  },
  {
    id: 2,
    name: "IMCG Margalla Town",
    location: "Margalla Town, Islamabad",
    gallery: [
      "/images/IMCG Margalla/pic1.jpeg",
      "/images/IMCG Margalla/pic2.jpeg",
      "/images/IMCG Margalla/pic3.jpeg",
      "/images/IMCG Margalla/pic4.jpeg",
      "/images/IMCG Margalla/pic5.jpeg",
      "/images/IMCG Margalla/pic6.jpeg",
      "/images/IMCG Margalla/pic7.jpeg",
      "/images/IMCG Margalla/pic8.jpeg",
      "/images/IMCG Margalla/pic9.jpeg"

    ]
  },
  {
    id: 3,
    name: "IMCG Model Town Humak",
    location: "Model Town Humak, Islamabad",
    gallery: [
      "/images/IMCG (VI-X) Humak/img1.jpg", "/images/IMCG (VI-X) Humak/img2.jpg", "/images/IMCG (VI-X) Humak/img3.jpg",
      "/images/IMCG (VI-X) Humak/img4.jpg", "/images/IMCG (VI-X) Humak/img5.jpg", "/images/IMCG (VI-X) Humak/img6.jpg",
      "/images/IMCG (VI-X) Humak/img7.jpg", "/images/IMCG (VI-X) Humak/img8.jpg", "/images/IMCG (VI-X) Humak/img9.jpg"
    ]
  },
  {
    id: 4,
    name: "IMCG F-8/1 Islamabad",
    location: "F-8/1, Islamabad",
    gallery: [
      "/images/IMCG F-8-1/img1.jpg", "/images/IMCG F-8-1/img2.jpg", "/images/IMCG F-8-1/img3.jpg",
      "/images/IMCG F-8-1/img4.jpg", "/images/IMCG F-8-1/img5.jpg", "/images/IMCG F-8-1/img6.jpg",
      "/images/IMCG F-8-1/img7.jpg", "/images/IMCG F-8-1/img8.jpg", "/images/IMCG F-8-1/img9.jpg"
    ]
  },
  {
    id: 5,
    name: "IMCG F-7/4 Islamabad",
    location: "F-7/4, Islamabad",
    gallery: [
      "/images/IMCG F74 Islamabad/training-1.jpg", "/images/IMCG F74 Islamabad/training-2.jpg", "/images/IMCG F74 Islamabad/training-3.jpg",
      "/images/IMCG F74 Islamabad/training-4.jpg", "/images/IMCG F74 Islamabad/training-5.jpg", "/images/IMCG F74 Islamabad/training-6.jpg",
      "/images/IMCG F74 Islamabad/training-7.jpg"
    ]
  },
  {
    id: 6,
    name: "ICB G-6/3 Islamabad",
    location: "G-6/3, Islamabad",
    gallery: [
      "/images/ICB G-6-3/img1.jpg", "/images/ICB G-6-3/img2.jpg", "/images/ICB G-6-3/img3.jpg",
      "/images/ICB G-6-3/img4.jpg", "/images/ICB G-6-3/img5.jpg", "/images/ICB G-6-3/img6.jpg",
      "/images/ICB G-6-3/img8.jpg", "/images/ICB G-6-3/img9.jpg"
    ]
  },
  {
    id: 7,
    name: "IMCG Korang Town",
    location: "Korang Town, Islamabad",
    gallery: [
      "/images/IMCG Korang Town/img1.jpg", "/images/IMCG Korang Town/img2.jpg", "/images/IMCG Korang Town/img3.jpg",
      "/images/IMCG Korang Town/img4.jpg", "/images/IMCG Korang Town/img5.jpg", "/images/IMCG Korang Town/img6.jpg",
      "/images/IMCG Korang Town/img7.jpg", "/images/IMCG Korang Town/img8.jpg", "/images/IMCG Korang Town/img9.jpg"
    ]
  },
  {
    id: 8,
    name: "IMCG I-8-3",
    location: "I-8-3, Islamabad",
    gallery: [
      "/images/IMCG I-8-3/pic1.jpeg", "/images/IMCG I-8-3/pic2.jpeg"
    ]
  }
];

const PROJECTS = [
  {
    id: 1, title: "Smart Dustbin System", school: "IMCG F-7/4 Islamabad",
    description: "An innovative project designed to promote cleanliness and proper waste management. This system automatically opens the lid when a person comes near it using sensors, making it hygienic and touch-free.",
    tools: ["Arduino/ESP32", "Ultrasonic Sensor", "Servo Motor", "Breadboard", "Battery"],
    category: "Environmental Tech", year: 2026, award: null,
    images: ["/images/IMCG F74 Islamabad/project/smart sudtbin.jpg"], video: null
  },
  {
    id: 2, title: "Smart Toll Booth System", school: "IMCG F-7/4 Islamabad",
    description: "An automated solution designed to manage traffic efficiently at toll plazas. This system uses sensors to detect the arrival of a vehicle and automatically opens the barrier using a motor.",
    tools: ["Arduino/ESP32", "IR/Ultrasonic Sensor", "Servo Motor", "Breadboard", "Toy Car Model"],
    category: "Robotics", year: 2026, award: null,
    images: ["/images/IMCG F74 Islamabad/project/Tool both.jpg", "/images/IMCG F74 Islamabad/project/both.jpg"],
    video: "/images/IMCG F74 Islamabad/project/Tool booth vedio.mp4"
  },
  {
    id: 3, title: "Eco-Lamp & Arduino Sensor Systems", school: "IMCG Model Town Humak",
    description: "Students crafted functional desk lamps from recycled materials using basic circuitry. Additionally, they engineered smart distance-measuring systems by programming Arduino Uno boards, ultrasonic sensors, and LCD displays.",
    tools: ["Arduino Uno", "Ultrasonic Sensor", "LCD Display", "Electronics Kit", "Recycled Materials", "C++ Coding"],
    category: "Robotics & Environment", year: 2026, award: null,
    images: ["/images/IMCG (VI-X) Humak/img1.jpg", "/images/IMCG (VI-X) Humak/img2.jpg", "/images/IMCG (VI-X) Humak/img3.jpg", "/images/IMCG (VI-X) Humak/img4.jpg", "/images/IMCG (VI-X) Humak/img5.jpg", "/images/IMCG (VI-X) Humak/img6.jpg", "/images/IMCG (VI-X) Humak/img7.jpg", "/images/IMCG (VI-X) Humak/img8.jpg", "/images/IMCG (VI-X) Humak/img9.jpg"],
    video: null
  },
  {
    id: 4, title: "Push-Up Counter System", school: "IMCG F-8/1 Islamabad",
    description: "An innovative fitness project designed to automatically track the number of push-ups performed by a user. The ultrasonic sensor continuously measures distance, processing it through an Arduino to an LED Display.",
    tools: ["Arduino Uno", "Ultrasonic Sensor", "LED Display"],
    category: "IoT & Health", year: 2026, award: null, images: [],
    video: "/images/IMCG F-8-1/Project/Pushup counter project.mp4"
  },
  {
    id: 5, title: "IoT-Based Smart Home Automation", school: "ICB G-6/3 Islamabad",
    description: "Powered by an ESP32 and Arduino Uno, it seamlessly controls home appliances via Wi-Fi. It integrates gas and flame sensors for hazard detection, and a soil moisture sensor for automated irrigation.",
    tools: ["ESP32", "Arduino Uno", "Gas & Flame Sensors", "LCD Display", "Soil Moisture Sensor", "Servo Motor", "Relays"],
    category: "IoT & Health", year: 2026, award: null,
    images: ["/images/ICB G-6-3/Project/home.jpg"], video: null
  },
  {
    id: 6, title: "DIY Wind Power Home", school: "ICB G-6/3 Islamabad",
    description: "Demonstrates how renewable energy from wind can be used to generate electricity. A small wind turbine drives a DC motor acting as a generator. The power is stored in a battery and used to light up LEDs.",
    tools: ["DC Motor", "Battery", "LED Bulbs", "Cardboard Structure", "Connecting Wires"],
    category: "Renewable Energy", year: 2026, award: null,
    images: ["/images/ICB G-6-3/Project/wind.jpg"], video: null
  },
  {
    id: 7, title: "Fire Fighting Robot", school: "ICB G-6/3 Islamabad",
    description: "Designed to automatically detect and extinguish fires. The system processes data from three flame sensors to navigate towards the fire using drive motors, and deploys a water pump to neutralize the threat.",
    tools: ["Arduino Uno", "Flame Sensors (x3)", "Water Pump", "Mini Servo Motor", "Drive Motors (x4)", "3.7V Batteries"],
    category: "Robotics", year: 2026, award: null, images: [],
    video: "/images/ICB G-6-3/Project/Fire fighiting project.mp4"
  },
  {
    id: 8, title: "Smart Soil Irrigation System", school: "IMCG Golra",
    description: "An automated solution designed to optimize water usage in agriculture. When moisture drops below a threshold, the Arduino Uno activates a water pump. Once wet, the pump turns off and a buzzer alerts the user.",
    tools: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump", "Buzzer"],
    category: "Agricultural Tech", year: 2026, award: null,
    images: ["/images/IMCG Golra/projects/pic 3 small soil IR system.jpg"], video: null
  },
  {
    id: 9, title: "Smart Toll Gate System", school: "IMCG Golra",
    description: "An automated traffic control solution. It utilizes an Ultrasonic Sensor to detect approaching vehicles. When a vehicle is detected, a Servo Motor is activated to open the toll gate.",
    tools: ["Ultrasonic Sensor", "Servo Motor"],
    category: "Robotics", year: 2026, award: null,
    images: ["/images/IMCG Golra/projects/Small toll gate system.jpg"], video: null
  },
  {
    id: 10, title: "Distance Measurement System", school: "IMCG Golra",
    description: "Calculates the distance between an object and the sensor using sound waves. By calculating the time taken for the echo from the Ultrasonic Sensor to return, the Arduino determines the distance accurately.",
    tools: ["Arduino Uno", "Ultrasonic Sensor", "OLED Display"],
    category: "Robotics", year: 2026, award: null, images: [],
    video: "/images/IMCG Golra/projects/distance measuring system.mp4"
  },
  {
    id: 11, title: "Automatic Light Control System", school: "IMCG Golra",
    description: "The LDR sensor continuously detects the intensity of light in the environment. When the room becomes dark, the Arduino automatically turns on the LED lights, reducing energy consumption when lighting isn't needed.",
    tools: ["Arduino Uno", "LDR Sensor", "LEDs"],
    category: "Environmental Tech", year: 2026, award: null, images: [],
    video: "/images/IMCG Golra/projects/Automatic light system.mp4"
  },
  {
    id: 12, title: "IoT Health Monitoring System", school: "IMCG Korang Town",
    description: "A real-time health monitoring system using the ESP32 microcontroller to track vital health parameters efficiently and wirelessly. It integrates the MAX30100 sensor to measure heart rate and blood oxygen saturation.",
    tools: ["ESP32", "MAX30100 Sensor", "Temperature Sensor", "Wi-Fi/Bluetooth", "Web Dashboard"],
    category: "IoT & Health", year: 2026, award: null, images: [],
    video: "/images/IMCG Korang Town/Projects/health monitring system.mp4"
  },
  {
    id: 13, title: "IoT Environment Monitoring CubeSat", school: "IMCG Korang Town",
    description: "A compact, CubeSat-inspired environmental monitoring system using the ESP32 microcontroller. It integrates multiple sensors, including BMP180, DHT22, LDR, gas, and flame sensors.",
    tools: ["ESP32", "BMP180", "DHT22", "LDR Sensor", "Gas Sensor", "Flame Sensor"],
    category: "Environmental Tech", year: 2026, award: null, images: [],
    video: "/images/IMCG Korang Town/Projects/Enviroment monitring cubeset.mp4"
  },
  {
    id: 14, title: "IoT Smart Security System", school: "IMCG Korang Town",
    description: "A smart security system using the ESP32 microcontroller to enhance access control. It features a password-based authentication mechanism. If unauthorized access is attempted, the system locks and triggers an alarm.",
    tools: ["ESP32", "Keypad", "Alarm System", "IoT Notifications"],
    category: "IoT & Security", year: 2026, award: null, images: [],
    video: "/images/IMCG Korang Town/Projects/Smart security system.mp4"
  },
  {
    id: 15,
    title: "Flood Prediction System",
    school: "IMCG F-7/4 Islamabad",
    description: "The Flood Prediction System is an innovative project designed to monitor rising water levels and provide early warnings to prevent flood-related damage. This model demonstrates how technology can be used to protect communities by detecting potential flood situations in real time. The system uses sensors and a microcontroller setup to measure water levels. When the water rises beyond a safe limit, the system triggers an alert, helping people take timely action. The model visually represents roads, houses, and water areas to simulate how floods can impact a residential environment. This project not only highlights the importance of disaster management but also introduces students to practical applications of electronics, programming, and problem-solving.",
    tools: ["Arduino Uno", "Water Level Sensor", "Buzzer", "LEDs", "Breadboard"],
    category: "Environmental Tech",
    year: 2026,
    award: null,
    images: ["/images/IMCG F74 Islamabad/project/Flood.jpg"],
    video: null
  }
];

const ACHIEVEMENTS = [
  { label: "Students Trained", value: 655, icon: "🎓" },
  { label: "Schools Impacted", value: 7, icon: "🏫" },
  { label: "Projects Completed", value: 120, icon: "🚀" },
  { label: "Training Sessions", value: 34, icon: "📋" },
  { label: "Awards Won", value: 12, icon: "🏆" },
  { label: "Teachers Upskilled", value: 48, icon: "👩‍🏫" }
];

const CHATBOT_RESPONSES = {
  // ─────────────────────────────────────────────
  // General Greetings
  // ─────────────────────────────────────────────
  hello: {
    keywords: [
      "hello", "hi", "hey", "greetings", "salam", "assalam", "assalam o alaikum",
      "aoa", "good morning", "good afternoon", "good evening", "start", "help"
    ],
    response:
      "Hello! Welcome to Maker Space Hub. I can guide you about FDE, LearnOBots, our 8 Maker Space campuses, student projects, STEAM education, robotics, IoT, coding, 3D printing, and contact information. What would you like to explore?"
  },

  how_are_you: {
    keywords: ["how are you", "how r u", "how you doing", "are you there", "you there"],
    response:
      "I’m here and ready to help. You can ask me about the Maker Space Hub initiative, schools, projects, technologies, or how students are learning through hands-on STEAM activities."
  },

  thanks: {
    keywords: ["thank", "thanks", "thank you", "awesome", "great", "nice", "good", "perfect", "jazakallah"],
    response:
      "You’re welcome! I’m glad to help. You can also ask me about specific campuses, student projects, robotics, IoT, STEAM programs, or how to contact the team."
  },

  bye: {
    keywords: ["bye", "goodbye", "see you", "cya", "exit", "close"],
    response:
      "Goodbye! Keep learning, building, and innovating. Come back anytime if you want to explore Maker Space Hub again."
  },

  fallback: {
    keywords: [],
    response:
      "I may not have understood that fully, but I can still help. You can ask about Maker Space Hub, FDE, LearnOBots, our 8 campuses, student projects, robotics, IoT, coding, 3D printing, or contact details."
  },

  // ─────────────────────────────────────────────
  // Website / Navigation
  // ─────────────────────────────────────────────
  website_help: {
    keywords: ["website", "site", "page", "navigate", "navigation", "where to go", "menu"],
    response:
      "This website has sections for Home, Schools, Projects, About, and Contact. You can explore campuses from the Schools page, view student innovations from the Projects page, learn about the partnership from About, and reach the team through Contact."
  },

  home_page: {
    keywords: ["home page", "homepage", "main page", "landing page"],
    response:
      "The homepage introduces the Maker Space Hub initiative, its mission, STEAM impact, featured campuses, and student innovation. It highlights how FDE and LearnOBots are bringing modern technology education to schools in Islamabad."
  },

  schools_page: {
    keywords: ["schools page", "campus page", "campuses page", "school list page"],
    response:
      "The Schools page shows the network of Maker Spaces. Each campus card leads to a detailed campus profile with location, performance metrics, projects, and gallery images."
  },

  projects_page: {
    keywords: ["projects page", "student projects page", "innovation page", "portfolio page"],
    response:
      "The Projects page displays student-built innovations across robotics, IoT, automation, environmental technology, health technology, and smart systems. You can filter projects by category and open media previews."
  },

  about_page: {
    keywords: ["about page", "about us", "about partnership", "partnership page"],
    response:
      "The About page explains the collaboration between the Federal Directorate of Education and LearnOBots. It highlights their shared mission to modernize education through STEAM, robotics, coding, and Maker Spaces."
  },

  contact_page: {
    keywords: ["contact page", "contact us page", "get in touch page"],
    response:
      "The Contact page provides office locations, phone numbers, email details, and map locations for LearnOBots and FDE. It is the best place to reach the team for partnerships, school integration, or general inquiries."
  },

  // ─────────────────────────────────────────────
  // Initiative Overview
  // ─────────────────────────────────────────────
  makerspace_hub: {
    keywords: [
      "maker space hub", "makerspace hub", "maker hub", "makerhub", "initiative",
      "program", "project overview", "what is maker space hub"
    ],
    response:
      "Maker Space Hub is a STEAM education initiative by FDE and LearnOBots. It brings hands-on learning spaces into schools where students can learn robotics, coding, electronics, IoT, 3D printing, game development, web development, and problem-solving through real projects."
  },

  mission: {
    keywords: ["mission", "goal", "purpose", "vision", "why this initiative"],
    response:
      "The mission is to democratize modern education by giving students access to practical STEAM learning. Instead of only studying theory, students build real solutions using robotics, coding, IoT, electronics, and digital fabrication."
  },

  impact: {
    keywords: ["impact", "achievement", "achievements", "result", "results", "progress"],
    response:
      "The initiative is designed to impact thousands of students by giving them access to future-ready skills. The website highlights 3000+ students, 8 Maker Spaces, and 80+ student projects across the network."
  },

  stats: {
    keywords: ["students", "how many students", "maker spaces", "how many schools", "how many projects", "numbers", "stats"],
    response:
      "According to the website content, Maker Space Hub highlights 3000+ students, 8 Maker Spaces, and 80+ student projects. These numbers show the growing scale of STEAM education across FDE institutions."
  },

  future_education: {
    keywords: ["future education", "modern education", "education future", "21st century skills"],
    response:
      "Future education is about practical skills, creativity, technology, and problem-solving. Maker Space Hub supports this by helping students learn through real projects in robotics, coding, AI, IoT, electronics, and design."
  },

  // ─────────────────────────────────────────────
  // FDE and LearnOBots
  // ─────────────────────────────────────────────
  fde: {
    keywords: ["fde", "federal directorate", "federal directorate of education", "government", "gov", "ministry"],
    response:
      "FDE stands for Federal Directorate of Education. It manages educational institutions in Islamabad Capital Territory and is part of the public education system. Through this initiative, FDE is supporting the introduction of modern STEAM Maker Spaces in schools."
  },

  learnobots: {
    keywords: ["learnobots", "learn o bots", "learnobot", "implementation partner", "partner company"],
    response:
      "LearnOBots is the implementation partner for Maker Space Hub. It focuses on STEAM education, robotics, coding, IoT, 3D design, electronics, teacher training, DIY kits, and hands-on learning experiences for students."
  },

  partnership: {
    keywords: ["partnership", "fde and learnobots", "collaboration", "joint initiative", "who made this"],
    response:
      "Maker Space Hub is a joint initiative between FDE and LearnOBots. FDE provides the public education network, while LearnOBots brings STEAM curriculum, training, tools, robotics kits, and Maker Space implementation expertise."
  },

  mohyuddin_wani: {
    keywords: ["mohyuddin wani", "mr mohyuddin", "special secretary", "secretary"],
    response:
      "The website gives special gratitude to Mr. Mohyuddin Wani, Special Secretary at the Ministry of Federal Education, for his visionary support in establishing state-of-the-art Maker Spaces across the school network."
  },

  // ─────────────────────────────────────────────
  // STEAM Education
  // ─────────────────────────────────────────────
  steam: {
    keywords: ["steam", "science", "technology", "engineering", "arts", "mathematics", "stem"],
    response:
      "STEAM means Science, Technology, Engineering, Arts, and Mathematics. It combines technical learning with creativity, design, and problem-solving so students can build real-world solutions instead of only memorizing concepts."
  },

  why_steam: {
    keywords: ["why steam", "why steam matters", "importance of steam", "benefit of steam"],
    response:
      "STEAM matters because future careers require more than textbook knowledge. Students need creativity, coding, electronics, design thinking, teamwork, and problem-solving. Maker Spaces give them a place to practice these skills through real projects."
  },

  smart_curriculum: {
    keywords: ["curriculum", "smart curriculum", "course", "learning framework", "framework"],
    response:
      "The Maker Space curriculum is focused on emerging technologies and practical learning. Students explore robotics, coding, IoT, electronics, 3D printing, AI concepts, web development, game development, and real-world problem solving."
  },

  experiential_learning: {
    keywords: ["experiential", "hands on", "hands-on", "practical learning", "activity based", "learning by doing"],
    response:
      "Maker Space Hub follows a hands-on learning approach. Students do not just watch lectures; they build circuits, program robots, design prototypes, test sensors, solve problems, and improve their projects through experimentation."
  },

  // ─────────────────────────────────────────────
  // Maker Space / Lab Details
  // ─────────────────────────────────────────────
  makerspace: {
    keywords: ["maker space", "makerspace", "lab", "innovation lab", "workshop", "steam lab"],
    response:
      "A Maker Space is a technology-rich learning lab where students can create, test, and improve projects. It usually includes robotics kits, sensors, microcontrollers, electronics tools, coding resources, 3D design tools, and prototyping equipment."
  },

  equipment: {
    keywords: ["equipment", "tools", "devices", "hardware", "machines", "what tools"],
    response:
      "The Maker Spaces support practical tools such as robotics kits, Arduino boards, ESP32 modules, sensors, motors, electronics components, coding platforms, 3D design resources, and fabrication-related learning equipment."
  },

  skills: {
    keywords: ["skills", "what students learn", "learn skills", "student skills"],
    response:
      "Students learn coding, robotics, electronics, IoT, sensor integration, problem-solving, teamwork, creativity, design thinking, prototyping, debugging, and presentation skills."
  },

  teacher_training: {
    keywords: ["teacher", "teachers", "training", "teacher training", "train teachers"],
    response:
      "Teacher training is an important part of the initiative. LearnOBots supports educators so they can guide students in robotics, coding, electronics, STEAM activities, and project-based learning."
  },

  // ─────────────────────────────────────────────
  // Schools / Campuses
  // ─────────────────────────────────────────────
  schools: {
    keywords: ["school", "schools", "campus", "campuses", "institution", "institutions", "list of schools"],
    response:
      "The Maker Space Hub network includes 8 campuses: IMCG Golra, IMCG Margalla Town, IMCG Model Town Humak, IMCG F-8/1, IMCG F-7/4, ICB G-6/3, IMCG Korang Town, and IMCG I-8/3."
  },

  golra: {
    keywords: ["golra", "imcg golra"],
    response:
      "IMCG Golra is one of the Maker Space campuses. The school details page shows its campus profile, student metrics, projects, location, and gallery. It is part of the FDE Maker Space network focused on practical STEAM learning."
  },

  margalla: {
    keywords: ["margalla", "margalla town", "imcg margalla"],
    response:
      "IMCG Margalla Town is part of the Maker Space Hub network. Its campus profile includes student details, classes, grades, project count, and location. It also supports hands-on STEAM learning and project-based education."
  },

  humak: {
    keywords: ["humak", "model town humak", "imcg humak"],
    response:
      "IMCG Model Town Humak is another Maker Space campus in the network. Students there participate in practical STEAM activities, campus projects, and innovation-based learning."
  },

  f81: {
    keywords: ["f-8/1", "f 8 1", "f8/1", "f81", "imcg f-8"],
    response:
      "IMCG F-8/1 is one of the featured Maker Space campuses. Its campus profile includes performance metrics, student projects, location details, and gallery content."
  },

  f74: {
    keywords: ["f-7/4", "f 7 4", "f7/4", "f74", "imcg f-7"],
    response:
      "IMCG F-7/4 is part of the Maker Space Hub school network. It supports students in STEAM fields such as robotics, IoT, coding, electronics, and digital creativity."
  },

  icb: {
    keywords: ["icb", "g-6/3", "g 6 3", "g6/3", "icb g-6"],
    response:
      "ICB G-6/3 is included in the Maker Space Hub network. Students at this campus work on practical projects and technology-based learning activities."
  },

  korang: {
    keywords: ["korang", "korang town", "imcg korang"],
    response:
      "IMCG Korang Town is one of the Maker Space campuses where students engage in practical STEAM activities and project-based learning."
  },

  i83: {
    keywords: ["i-8/3", "i 8 3", "i8/3", "i83", "imcg i-8"],
    response:
      "IMCG I-8/3 is listed as one of the 8 Maker Space campuses on the website. It is part of the growing FDE Maker Space network."
  },

  campus_details: {
    keywords: ["campus details", "school details", "campus profile", "profile"],
    response:
      "Each campus detail page includes the school name, location, live-style metrics, facility overview, core capabilities, campus projects, gallery images, and a contact call-to-action."
  },

  // ─────────────────────────────────────────────
  // Projects
  // ─────────────────────────────────────────────
  projects: {
    keywords: ["projects", "student projects", "what have students built", "built", "innovations", "portfolio"],
    response:
      "Students have built many real-world projects across robotics, IoT, smart automation, environmental technology, health monitoring, and digital systems. The Projects page showcases these innovations with images, videos, categories, descriptions, and campus names."
  },

  project_examples: {
    keywords: ["project examples", "examples", "sample projects", "show examples"],
    response:
      "Example student projects include smart home automation, fire fighting robots, smart dustbins, health monitoring systems, soil irrigation systems, waste sorting robots, toll booth automation, and environment monitoring systems."
  },

  project_categories: {
    keywords: ["category", "categories", "filter", "project category"],
    response:
      "Projects can be grouped by themes such as robotics, IoT, automation, environment, smart systems, health technology, and electronics-based solutions. The Projects page includes filters so visitors can explore by category."
  },

  student_built: {
    keywords: ["student built", "made by students", "who built", "students made"],
    response:
      "Yes, the projects shown on the website are student-built. The purpose of the Maker Spaces is to help students learn by designing, coding, assembling, testing, and improving their own real-world solutions."
  },

  gallery: {
    keywords: ["gallery", "photos", "images", "pictures", "media"],
    response:
      "The website includes gallery sections for campuses and projects. Campus galleries show the school environment and Maker Space activities, while project cards may include photos or videos of student innovations."
  },

  video: {
    keywords: ["video", "videos", "project video", "homepage video"],
    response:
      "The website includes video content to show the Maker Space environment and student projects more clearly. Videos help visitors understand how students are learning and building through practical activities."
  },

  // ─────────────────────────────────────────────
  // Technologies
  // ─────────────────────────────────────────────
  robotics: {
    keywords: ["robot", "robots", "robotics", "automation", "robotic"],
    response:
      "Robotics is one of the key learning areas in Maker Space Hub. Students learn how to connect motors, sensors, controllers, and code to build machines that can respond to the environment and perform tasks."
  },

  iot: {
    keywords: ["iot", "internet of things", "smart home", "connected devices", "remote monitoring"],
    response:
      "IoT means Internet of Things. In Maker Spaces, students use boards like ESP32, sensors, and Wi-Fi-based systems to build smart devices such as home automation, health monitoring, environment monitoring, and security systems."
  },

  arduino: {
    keywords: ["arduino", "arduino uno", "uno", "microcontroller"],
    response:
      "Arduino is a beginner-friendly microcontroller platform used to teach electronics and programming. Students can connect sensors, LEDs, motors, buzzers, displays, and other components to create interactive projects."
  },

  esp32: {
    keywords: ["esp32", "wifi", "bluetooth", "esp"],
    response:
      "ESP32 is a powerful microcontroller with built-in Wi-Fi and Bluetooth. It is useful for IoT projects because students can create connected systems like smart homes, remote sensors, and wireless monitoring devices."
  },

  sensors: {
    keywords: ["sensor", "sensors", "ultrasonic", "ldr", "flame", "soil", "temperature", "moisture"],
    response:
      "Sensors help projects understand the environment. Students may use ultrasonic sensors for distance, LDR sensors for light, flame sensors for fire detection, soil moisture sensors for irrigation, and temperature or health sensors for monitoring systems."
  },

  coding: {
    keywords: ["code", "coding", "programming", "language", "python", "c++", "block coding"],
    response:
      "Coding is a core part of Maker Space learning. Students may begin with block-based coding and then move toward Arduino programming, Python, C++, web development, and logic-building for hardware projects."
  },

  electronics: {
    keywords: ["electronics", "circuit", "circuits", "wires", "breadboard", "components"],
    response:
      "Electronics helps students understand how real devices work. They learn about circuits, wiring, power, sensors, LEDs, motors, resistors, breadboards, and microcontrollers through hands-on experiments."
  },

  printing3d: {
    keywords: ["3d", "3d printing", "3d printer", "3d design", "design"],
    response:
      "3D design and 3D printing help students turn ideas into physical prototypes. This supports creativity, product design, engineering thinking, and rapid prototyping."
  },

  ai: {
    keywords: ["ai", "artificial intelligence", "machine learning", "ml"],
    response:
      "AI is part of future-ready STEAM learning. Students are introduced to smart systems, automation, data-driven thinking, and how intelligent technology can solve real-world problems."
  },

  web_development: {
    keywords: ["web development", "website", "web", "html", "css", "javascript"],
    response:
      "Web development is one of the modern skills supported by the initiative. Students can learn how websites work using HTML, CSS, JavaScript, and creative digital design."
  },

  game_development: {
    keywords: ["game", "game development", "games"],
    response:
      "Game development helps students learn logic, creativity, storytelling, design, and programming in a fun way. It is a useful part of STEAM learning because it combines coding with art and interaction."
  },

  // ─────────────────────────────────────────────
  // Contact / Location
  // ─────────────────────────────────────────────
  contact: {
    keywords: ["contact", "reach", "email", "phone", "call", "number", "get in touch"],
    response:
      "You can contact LearnOBots at contactus@learnobots.com or call +92 335 1166115 / +92 335 1166116. You can also visit the Contact page for map locations and complete details."
  },

  location: {
    keywords: ["location", "address", "where", "office", "located"],
    response:
      "LearnOBots Pakistan office is located at NSTP, NUST, H-12, Islamabad, Pakistan. FDE Head Office is located at Rohtas Road, G-9/4, Islamabad Capital Territory, Pakistan."
  },

  learnobots_contact: {
    keywords: ["learnobots contact", "learnobots office", "learnobots number", "learnobots email"],
    response:
      "LearnOBots can be reached at contactus@learnobots.com. Phone numbers listed on the website are +92 335 1166115 and +92 335 1166116. Their office is at NSTP, NUST, H-12, Islamabad."
  },

  fde_contact: {
    keywords: ["fde contact", "fde office", "fde number", "fde address"],
    response:
      "FDE Head Office is located at Rohtas Road, G-9/4, Islamabad Capital Territory, Pakistan. The official phone number listed on the website is (051) 9260977."
  },

  partnership_inquiry: {
    keywords: ["partnership inquiry", "partner", "collaborate", "collaboration", "school integration", "get involved"],
    response:
      "For partnerships, school integrations, media inquiries, or collaboration, the best step is to use the Contact page or email contactus@learnobots.com. The team can guide you according to your school or organization’s requirements."
  },

  // ─────────────────────────────────────────────
  // Visitor Questions
  // ─────────────────────────────────────────────
  for_students: {
    keywords: ["for students", "student benefit", "benefits for students", "how students benefit"],
    response:
      "Students benefit by learning practical technology skills, building confidence, solving real problems, working in teams, and creating projects they can proudly present. Maker Spaces make learning more active, creative, and future-focused."
  },

  for_parents: {
    keywords: ["parents", "for parents", "parent", "my child", "children"],
    response:
      "For parents, Maker Space Hub shows how children can gain future-ready skills such as coding, robotics, creativity, teamwork, and problem-solving. It helps students move beyond theory and learn by building real things."
  },

  for_teachers: {
    keywords: ["for teachers", "teacher benefit", "educators", "educator"],
    response:
      "For teachers, Maker Spaces provide a practical environment to guide students through project-based learning. Teachers can support robotics, coding, electronics, IoT, and STEAM activities with structured tools and training."
  },

  for_schools: {
    keywords: ["for schools", "school benefit", "school can join", "add maker space"],
    response:
      "For schools, a Maker Space can improve practical learning, student engagement, technology exposure, innovation culture, and project-based education. Schools interested in similar programs can contact the team through the Contact page."
  },

  visit_campus: {
    keywords: ["visit campus", "visit school", "campus visit", "can i visit"],
    response:
      "For campus visits or program details, please contact the administration through the Contact page. The team can guide you about the relevant campus and available programs."
  },

  media_inquiry: {
    keywords: ["media", "press", "news", "coverage", "interview"],
    response:
      "For media or press inquiries, please reach the team through contactus@learnobots.com or use the Contact page. They can provide official information about the initiative, campuses, and student projects."
  },

  // ─────────────────────────────────────────────
  // Simple Conversational Responses
  // ─────────────────────────────────────────────
  what_can_you_do: {
    keywords: ["what can you do", "how can you help", "help me", "options"],
    response:
      "I can answer questions about the Maker Space Hub initiative, FDE, LearnOBots, STEAM education, campuses, projects, robotics, IoT, coding, contact details, and how students are learning through Maker Spaces."
  },

  explain_simple: {
    keywords: ["explain simply", "simple words", "in simple words", "easy explanation"],
    response:
      "In simple words, Maker Space Hub gives students modern labs where they learn by making things. They build robots, smart devices, circuits, websites, games, and other real projects instead of only reading from books."
  },

  recommend_start: {
    keywords: ["where should i start", "start exploring", "what should i see first"],
    response:
      "A good starting point is the Schools page if you want to see the campuses, or the Projects page if you want to see what students have built. The About page is best if you want to understand the partnership and mission."
  },

  impressive: {
    keywords: ["impressive", "amazing", "interesting", "wow"],
    response:
      "Yes, it is a strong initiative. The best part is that students are not only learning technology concepts; they are applying them by building real working projects."
  },

  unknown_school: {
    keywords: ["another school", "other school", "more schools"],
    response:
      "The website currently highlights 8 Maker Space campuses. You can open the Schools page to view all campus cards and then click any school to see its details, projects, and gallery."
  }
};
