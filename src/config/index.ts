import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nasir Ayaz — Expert Mobile App Developer",
  author: "Nasir Ayaz",
  description:
    "From App idea to scalable product — I help turn mobile app concepts into production-ready, revenue-generating solutions..",
  lang: "en",
  siteLogo: "/nasirayaz-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/knasirayaz" },
    { text: "Github", href: "https://github.com/knasirayaz" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://nasirayaz.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nasir Ayaz",
    specialty: `Expert Mobile App Developer 
     50+ Projects Delivered
     1M+ App Downloads`,
    summary:
      "From App idea to scalable product — I help turn mobile app concepts into production-ready, revenue-generating solutions..",
    email: "knasirayaz@gmail.com",
  },
  experience: [
    {
      company: "NBT-Digital",
      position: "Founder & CEO",
      startDate: "April 2026",
      endDate: "Present",
      summary: [
        "Founded the agency and established the overarching business strategy, driving company growth, vision, and long-term delivery roadmaps.",
        "Spearheaded business development and outbound lead generation campaigns, expanding the client pipeline and securing high-value contracts within the target markets.",
        "Led high-level discovery sessions and technical consultations with prospective clients, translating complex business requirements into actionable, scalable software solution proposals.",
        "Managed end-to-end client relationships and stakeholder communications, ensuring high customer satisfaction, trust, and repeat business opportunities.",
        "Oversaw cross-functional team alignment and resource allocation to ensure client projects were delivered on time, within budget, and aligned with commercial goals."
      ],
    },
    {
      company: "Tzamun Arabia IT Co",
      position: "Lead Mobile Applications Developer",
      startDate: "Dec 2022",
      endDate: "Present",
      summary: [
        "Architecture & Scale: Led the migration from a monolithic codebase to a scalable multi-module architecture, separating concerns to enable parallel team development.",
        "Performance & Stability: Resolved critical legacy bugs and optimized core features, driving the crash-free user session rate to 99.9%.",
        "Feature Engineering: Designed and deployed responsive, high-performance data visualization dashboards and interactive graphs for user health insights.",
        "Testing & CI/CD: Engineered an automated testing framework using Test-Driven Development (TDD), boosting test coverage by 40% and accelerating release cycles.",
        "Security & Code Quality: Enforced strict coding standards through rigorous code reviews and fortified application security via advanced authentication mechanisms."
      ],
    },
    {
      company: "Arctern Digital Agency",
      position: "Senior Mobile Applications Developer",
      startDate: "Dec 2021",
      endDate: "Nov 2022",
      summary: [
        "Cross-Platform Efficiency: Championed the development of high-performance hybrid applications, leveraging single-codebase frameworks to slash cross-platform time-to-market by 45%.",
        "State Management & Data Flow: Re-architected complex application states using robust, predictable architectures, eliminating data race conditions and significantly smoothing UI rendering.",
        "Real-Time Engineering: Integrated optimized WebSocket pipelines and background data sync workers, ensuring low-latency data updates and a highly responsive user experience.",
        "Performance Optimization: Spearheaded localized asset caching and network payload reduction strategies, which decreased overall mobile data consumption by 30% and improved battery efficiency.",
        "Agile Leadership & Delivery: Collaborated closely with cross-functional product teams and UI/UX designers to rapidly prototype, iterate, and deploy client-critical features under tight agency deadlines."
      ],
    },
    {
      company: "Neusol LLC",
      position: "Senior Mobile Applications Developer",
      startDate: "Sep 2019",
      endDate: "Present",
      summary: [
        "Architected modular full-stack mobile applications utilizing cross-platform frameworks, resulting in a 35% improvement in feature release cycles.",
        "Optimized offline data synchronization mechanisms using SQLite and secure local storage, ensuring zero data loss during network disruptions.",
      ],
    },
    {
      company: "ARY Digital Network",
      position: "Senior Mobile Applications Developer",
      startDate: "Dec 2017",
      endDate: "Aug 2019",
      summary: [
        "Engineered high-performance video streaming capabilities and content delivery optimizations, enhancing media playback stability for thousands of active users.",
        "Collaborated with UI/UX designers to implement fluid transitions and adaptive interfaces, boosting user engagement metrics by 18%.",
      ],
    },
    {
      company: "Digital-Dividend",
      position: "Android Developer",
      startDate: "May 2017",
      endDate: "Nov 2017",
      summary: [
        "Developed native Android applications using Java and early Kotlin integrations, ensuring strict compliance with Material Design guidelines.",
        "Refactored legacy codebases to adopt the MVP/MVVM architectural patterns, successfully cutting technical debt and improving test coverage.",
      ],
    },
    {
      company: "ForeignTree System",
      position: "Android Developer",
      startDate: "Feb 2016",
      endDate: "Apr 2017",
      summary: [
        "Assisted in the development and debugging of core features for client-facing Android applications, reducing open bug tickets by 40%.",
        "Integrated third-party RESTful APIs and JSON parsing libraries to deliver dynamic UI components and real-time data feeds.",
      ],
    },
    {
      company: "Buraq Studios",
      position: "Junior Mobile Applications Developer",
      startDate: "Feb 2013",
      endDate: "Jan 2016",
      summary: [
        "Gained hands-on experience in the mobile development lifecycle by participating in daily standups, code reviews, and initial application provisioning.",
        "Built responsive user interfaces and layout structures, verifying cross-device compatibility across various screen sizes and Android OS versions.",
      ],
    }
  ],
  projects: [
    {
      name: "eTabeb.com",
      summary: "Tabeb.com is a free and conventional mobile app for users to book and manage their medical appointments with healthcare facilities with an exclusive feature that fully integrates with the healthcare system which offers a wider range of services.",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=com.atcorp.ebiz&hl=en",
      image: "/eTabeb.jpg",
    },
    {
      name: "Covid-19 EHS", 
      summary: "Covid-19 UAE is Ministry of Health’s Official Mobile App on Coronavirus management.",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=com.knasirayaz.mohapcovid",
      image: "/covid19.jpg",
    },
    {
      name: "TDRA (Telecommunications Regulatory Authority) UAE",
      summary: "TDRA provides the main services in an interactive manner in order to ease the life of TDRA customers.",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=biz.enon.tra.uae",
      image: "/tdra.jpg",
    },
    {
      name: "Linxup GPS Tracking System",
      summary: "The Linxup app is a companion application to the Linxup GPS tracking system",
      linkPreview: "/",
      linkSource: "https://play.google.com/store/apps/details?id=com.linxup.android",
      image: "/linxup.jpg",
    }
  ],
about: {
    description: `
      Hi, I’m Nasir Ayaz, a Senior Mobile Software Engineer and Full-Stack Developer with over 13+ years of experience turning complex, ambitious concepts into high-performance, revenue-generating digital products. I specialize in bridging the gap between raw technical architecture and core business goals—helping startups and established brands rapidly launch MVPs and seamlessly scale them to support millions of global users.

      Throughout my career, I have engineered robust native and cross-platform mobile systems utilizing Kotlin, Swift, Flutter, and React Native, paired with secure, cloud-native backends like Ktor, Node.js, and AWS. From optimizing application startup times by 30%+ to driving crash-free session rates up to 99.9%, my focus is always on delivering low-latency, scalable, and secure user experiences. 

      Whether acting as an end-to-end technical partner managing deployments from repository setup to the App Store, or leading cross-functional engineering teams across distributed time zones (US, Europe, Middle East), I thrive where clean architecture meets rapid, business-driven product iteration. 
      
      Let’s collaborate and build your next scalable mobile product together.
    `,
    image: "/nasirayaz-big.jpg",
  },
};

// #5755ff
