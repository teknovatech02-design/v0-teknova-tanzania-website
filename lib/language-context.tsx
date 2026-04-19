"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "sw" | "en"

interface Translations {
  // Header
  home: string
  services: string
  about: string
  blog: string
  contact: string
  contactUs: string
  
  // Hero
  welcomeTo: string
  heroTitle1: string
  heroTitle2: string
  heroTitle3: string
  heroDescription: string
  callNow: string
  viewServices: string
  techExpert: string
  founderName: string
  
  // Services
  ourServices: string
  servicesTitle1: string
  servicesTitle2: string
  servicesDescription: string
  softwareTraining: string
  softwareTrainingDesc: string
  phoneRepair: string
  phoneRepairDesc: string
  hardwareRepair: string
  hardwareRepairDesc: string
  flashingUnlocking: string
  flashingUnlockingDesc: string
  dataRecovery: string
  dataRecoveryDesc: string
  speedOptimization: string
  speedOptimizationDesc: string
  computerTraining: string
  computerTrainingDesc: string
  cloudServices: string
  cloudServicesDesc: string
  networkSetup: string
  networkSetupDesc: string
  cybersecurity: string
  cybersecurityDesc: string
  
  // About
  aboutUs: string
  aboutTitle1: string
  aboutTitle2: string
  aboutDescription1: string
  aboutDescription2: string
  aboutDescription3: string
  aboutDescription4: string
  satisfiedClients: string
  yearsExperience: string
  customerSupport: string
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  feature5: string
  feature6: string
  feature7: string
  feature8: string
  
  // Blog
  ourBlog: string
  blogTitle1: string
  blogTitle2: string
  blogDescription: string
  viewAllArticles: string
  minutes: string
  
  // Contact
  contactUsTitle: string
  contactTitle1: string
  contactTitle2: string
  contactDescription: string
  callOrWhatsApp: string
  contactCTA: string
  phone: string
  whatsapp: string
  email: string
  location: string
  workingHours: string
  workingHoursValue: string
  
  // Footer
  quickLinks: string
  ourServicesFooter: string
  contactFooter: string
  footerDescription: string
  allRightsReserved: string
  privacyPolicy: string
  termsOfUse: string
}

const translations: Record<Language, Translations> = {
  sw: {
    // Header
    home: "Nyumbani",
    services: "Huduma",
    about: "Kuhusu",
    blog: "Blog",
    contact: "Wasiliana",
    contactUs: "Wasiliana Nasi",
    
    // Hero
    welcomeTo: "Karibu TEKNOVA TZ",
    heroTitle1: "Jifunze",
    heroTitle2: "Teknolojia",
    heroTitle3: "ya Simu na Kompyuta",
    heroDescription: "TEKNOVA TZ ni kituo chako cha kujifunza teknolojia zote za simu na kompyuta. Tunatoa mafunzo ya kina ya software na hardware, huduma za kurekebisha simu na kompyuta, ushauri wa kitaalamu, na msaada wa 24/7 kwa gharama nafuu kabisa Tanzania. Jiunge nasi leo na uanze safari yako ya teknolojia!",
    callNow: "Piga Simu",
    viewServices: "Tazama Huduma",
    techExpert: "Mtaalamu wa Teknolojia",
    founderName: "TEKNOVA TECH",
    
    // Services
    ourServices: "Huduma Zetu",
    servicesTitle1: "Huduma Bora za",
    servicesTitle2: "Teknolojia",
    servicesDescription: "TEKNOVA TZ inatoa huduma mbalimbali za teknolojia kwa ubora wa hali ya juu na bei nafuu sana. Wateja wetu ndio kipaumbele chetu cha kwanza, na tunahakikisha kila mteja anapata huduma bora zaidi inayowezekana. Angalia huduma zetu hapa chini na uchague inayokufaa wewe.",
    softwareTraining: "Mafunzo ya Software",
    softwareTrainingDesc: "Jifunze jinsi ya kutumia software mbalimbali za simu na kompyuta, kuinstall na ku-configure apps za Android na iOS, kusanidi mifumo, na kuelewa jinsi operating systems zinavyofanya kazi. Tutakufundisha step by step hadi uelewe vizuri.",
    phoneRepair: "Kurekebisha Simu",
    phoneRepairDesc: "Huduma za kitaalamu za kurekebisha simu zilizovunjika au zilizoharibika. Tunabadilisha screen zilizopasuka, battery zilizoisha nguvu, na sehemu nyingine zote za simu kwa ubora wa hali ya juu na bei nafuu.",
    hardwareRepair: "Hardware Repair",
    hardwareRepairDesc: "Tunarekebisha matatizo yote ya hardware kwa simu na kompyuta - motherboard, charging port, speaker, microphone, camera, na vipengele vingine vyote. Wataalamu wetu wana uzoefu wa miaka mingi.",
    flashingUnlocking: "Flashing & Unlocking",
    flashingUnlockingDesc: "Huduma za ku-flash simu zilizokamatwa au zilizosimama, ku-unlock network locks za nchi za nje, kuondoa FRP/Google account bypass, na ku-install custom ROM kwa Android.",
    dataRecovery: "Data Recovery",
    dataRecoveryDesc: "Tunarudisha data zilizopotea kutoka simu au kompyuta zilizoharibika, zilizopoteza data kwa bahati mbaya, au zilizo na matatizo ya storage. Picha, video, contacts, na documents zako zinaweza kurudishwa!",
    speedOptimization: "Speed Optimization",
    speedOptimizationDesc: "Tunafanya simu au kompyuta yako iende haraka zaidi kwa kuondoa virusi na malware, kusafisha junk files na cache, kuboresha settings, na ku-optimize performance ya jumla.",
    computerTraining: "Mafunzo ya Kompyuta",
    computerTrainingDesc: "Jifunze jinsi ya kutumia kompyuta kutoka mwanzo hadi kiwango cha juu. Microsoft Word, Excel, PowerPoint, internet browsing, email, na ujuzi muhimu wa IT kwa ajili ya kazi na biashara yako.",
    cloudServicesDesc: "Tunakusaidia ku-setup cloud backup services kama Google Drive, iCloud, OneDrive, na Dropbox. Hifadhi data yako salama online na ufikie kutoka popote ulipo duniani.",
    networkSetup: "Network Setup",
    networkSetupDesc: "Tunasaidia ku-setup na ku-configure network za nyumbani na ofisi - WiFi routers, LAN connections, network security, na kutatua matatizo ya internet connectivity.",
    cybersecurity: "Cybersecurity",
    cybersecurityDesc: "Tunakufundisha jinsi ya kujilinda mtandaoni - password security, phishing scams, online privacy, na jinsi ya kutumia internet kwa usalama. Linda taarifa zako muhimu leo!",
    cloudServices: "Cloud Services",
    
    // About
    aboutUs: "Kuhusu Sisi",
    aboutTitle1: "Wataalamu wa",
    aboutTitle2: "Teknolojia Tanzania",
    aboutDescription1: "TEKNOVA TZ ilianzishwa na dhamira kubwa ya kuleta elimu ya teknolojia kwa Watanzania wote bila kujali umri au kiwango cha elimu. Tunaamini kwamba kila mtu anastahili kupata uelewa wa teknolojia za kisasa zinazobadilisha ulimwengu leo.",
    aboutDescription2: "Timu yetu ina wataalamu wenye uzoefu wa miaka mingi katika fani mbalimbali za teknolojia - kutoka software development, hardware repair, network engineering, hadi cybersecurity. Tunachanganya ujuzi huu wote ili kutoa huduma bora zaidi kwa wateja wetu.",
    aboutDescription3: "Tunatoa mafunzo ya kina yanayokufanya uelewe si tu jinsi ya kutumia teknolojia, bali pia jinsi inavyofanya kazi. Huduma zetu za kurekebisha simu na kompyuta ni za haraka na za kuaminika, na ushauri wetu wa kitaalamu unakusaidia kufanya maamuzi sahihi.",
    aboutDescription4: "Jiunge na familia ya TEKNOVA TZ leo na ugundue ulimwengu mpya wa fursa za teknolojia. Sisi tunaamini katika nguvu ya elimu ya teknolojia kubadilisha maisha ya watu na jamii nzima.",
    satisfiedClients: "Wateja Walioridhika",
    yearsExperience: "Miaka ya Uzoefu",
    customerSupport: "Msaada wa Wateja",
    feature1: "Mafunzo ya kina ya teknolojia za simu na kompyuta",
    feature2: "Huduma za haraka na za kuaminika siku zote",
    feature3: "Bei nafuu na wazi bila gharama za siri",
    feature4: "Msaada wa baada ya huduma bila kikomo",
    feature5: "Wataalamu wenye uzoefu wa miaka mingi",
    feature6: "Dhamana ya ubora wa kazi zetu zote",
    feature7: "Ushauri wa bure kabla ya huduma",
    feature8: "Huduma za dharura zinapatikana 24/7",
    
    // Blog
    ourBlog: "Blog Yetu",
    blogTitle1: "Makala Mpya za",
    blogTitle2: "Teknolojia",
    blogDescription: "Soma makala zetu za kina kuhusu teknolojia za simu na kompyuta, tips na tricks za kutumia vifaa vyako vizuri zaidi, habari mpya za tech duniani, na mafunzo ya step-by-step yanayokusaidia kujifunza teknolojia.",
    viewAllArticles: "Tazama Makala Zote",
    minutes: "dakika",
    
    // Contact
    contactUsTitle: "Wasiliana Nasi",
    contactTitle1: "Tuko Tayari",
    contactTitle2: "Kukusaidia",
    contactDescription: "Una swali lolote kuhusu teknolojia au unahitaji msaada wa kitaalamu? Wasiliana nasi kupitia njia yoyote hapa chini. Timu yetu iko tayari kukusaidia saa 24 kwa siku 7 kwa wiki. Tutakujibu haraka iwezekanavyo - kawaida ndani ya dakika 30!",
    callOrWhatsApp: "Piga Simu au Tuma WhatsApp",
    contactCTA: "Tuko tayari kukusaidia wakati wowote wa mchana au usiku. Wasiliana nasi kwa mazungumzo ya haraka kupitia WhatsApp au simu ya kawaida. Huduma zetu za wateja zinafanya kazi masaa 24 kwa siku 7 kwa wiki ili kuhakikisha unapata msaada unaohitajika.",
    phone: "Simu",
    whatsapp: "WhatsApp",
    email: "Barua Pepe",
    location: "Mahali",
    workingHours: "Masaa ya Kazi",
    workingHoursValue: "Jumatatu - Jumamosi: 8:00 - 18:00 | Jumapili: 10:00 - 16:00",
    
    // Footer
    quickLinks: "Viungo vya Haraka",
    ourServicesFooter: "Huduma Zetu",
    contactFooter: "Wasiliana",
    footerDescription: "TEKNOVA TZ ni kituo chako cha kuaminika cha kujifunza teknolojia za simu na kompyuta Tanzania. Tunatoa mafunzo ya kina, huduma za kurekebisha vifaa, na ushauri wa kitaalamu kwa bei nafuu. Jiunge nasi leo!",
    allRightsReserved: "Haki zote zimehifadhiwa",
    privacyPolicy: "Sera ya Faragha",
    termsOfUse: "Masharti ya Matumizi",
  },
  en: {
    // Header
    home: "Home",
    services: "Services",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    contactUs: "Contact Us",
    
    // Hero
    welcomeTo: "Welcome to TEKNOVA TZ",
    heroTitle1: "Learn",
    heroTitle2: "Technology",
    heroTitle3: "of Phones and Computers",
    heroDescription: "TEKNOVA TZ is your ultimate destination for learning all phone and computer technologies. We offer comprehensive software and hardware training, professional repair services, expert consultation, and 24/7 support at very affordable prices in Tanzania. Join us today and start your technology journey!",
    callNow: "Call Now",
    viewServices: "View Services",
    techExpert: "Technology Expert",
    founderName: "TEKNOVA TECH",
    
    // Services
    ourServices: "Our Services",
    servicesTitle1: "Premium",
    servicesTitle2: "Technology Services",
    servicesDescription: "TEKNOVA TZ offers various technology services with the highest quality and very affordable prices. Our customers are our top priority, and we ensure every client receives the best service possible. Check out our services below and choose what suits you.",
    softwareTraining: "Software Training",
    softwareTrainingDesc: "Learn how to use various phone and computer software, install and configure Android and iOS apps, set up systems, and understand how operating systems work. We will teach you step by step until you understand perfectly.",
    phoneRepair: "Phone Repair",
    phoneRepairDesc: "Professional services for repairing broken or damaged phones. We replace cracked screens, dead batteries, and all other phone parts with high quality and affordable prices.",
    hardwareRepair: "Hardware Repair",
    hardwareRepairDesc: "We fix all hardware problems for phones and computers - motherboard, charging port, speaker, microphone, camera, and all other components. Our experts have years of experience.",
    flashingUnlocking: "Flashing & Unlocking",
    flashingUnlockingDesc: "Services for flashing stuck phones, unlocking foreign network locks, removing FRP/Google account bypass, and installing custom ROM for Android devices.",
    dataRecovery: "Data Recovery",
    dataRecoveryDesc: "We recover lost data from damaged phones or computers, accidentally deleted data, or storage problems. Your photos, videos, contacts, and documents can be recovered!",
    speedOptimization: "Speed Optimization",
    speedOptimizationDesc: "We make your phone or computer run faster by removing viruses and malware, cleaning junk files and cache, improving settings, and optimizing overall performance.",
    computerTraining: "Computer Training",
    computerTrainingDesc: "Learn how to use computers from beginner to advanced level. Microsoft Word, Excel, PowerPoint, internet browsing, email, and essential IT skills for your work and business.",
    cloudServices: "Cloud Services",
    cloudServicesDesc: "We help you set up cloud backup services like Google Drive, iCloud, OneDrive, and Dropbox. Keep your data safe online and access it from anywhere in the world.",
    networkSetup: "Network Setup",
    networkSetupDesc: "We help set up and configure home and office networks - WiFi routers, LAN connections, network security, and troubleshooting internet connectivity issues.",
    cybersecurity: "Cybersecurity",
    cybersecurityDesc: "We teach you how to protect yourself online - password security, phishing scams, online privacy, and how to use the internet safely. Protect your important information today!",
    
    // About
    aboutUs: "About Us",
    aboutTitle1: "Technology Experts",
    aboutTitle2: "in Tanzania",
    aboutDescription1: "TEKNOVA TZ was founded with the great mission of bringing technology education to all Tanzanians regardless of age or education level. We believe that everyone deserves to understand modern technologies that are changing the world today.",
    aboutDescription2: "Our team consists of experts with years of experience in various technology fields - from software development, hardware repair, network engineering, to cybersecurity. We combine all these skills to provide the best service to our customers.",
    aboutDescription3: "We provide comprehensive training that makes you understand not just how to use technology, but also how it works. Our phone and computer repair services are fast and reliable, and our expert advice helps you make the right decisions.",
    aboutDescription4: "Join the TEKNOVA TZ family today and discover a new world of technology opportunities. We believe in the power of technology education to transform people's lives and entire communities.",
    satisfiedClients: "Satisfied Clients",
    yearsExperience: "Years of Experience",
    customerSupport: "Customer Support",
    feature1: "Comprehensive phone and computer technology training",
    feature2: "Fast and reliable services every day",
    feature3: "Affordable and transparent prices with no hidden costs",
    feature4: "Unlimited after-service support",
    feature5: "Experts with years of experience",
    feature6: "Quality guarantee on all our work",
    feature7: "Free consultation before service",
    feature8: "Emergency services available 24/7",
    
    // Blog
    ourBlog: "Our Blog",
    blogTitle1: "Latest",
    blogTitle2: "Tech Articles",
    blogDescription: "Read our comprehensive articles about phone and computer technologies, tips and tricks to use your devices better, latest tech news worldwide, and step-by-step tutorials to help you learn technology.",
    viewAllArticles: "View All Articles",
    minutes: "minutes",
    
    // Contact
    contactUsTitle: "Contact Us",
    contactTitle1: "We Are Ready",
    contactTitle2: "To Help You",
    contactDescription: "Do you have any questions about technology or need expert assistance? Contact us through any of the channels below. Our team is ready to help you 24 hours a day, 7 days a week. We will respond as quickly as possible - usually within 30 minutes!",
    callOrWhatsApp: "Call or Send WhatsApp",
    contactCTA: "We are ready to help you anytime day or night. Contact us for quick conversations via WhatsApp or regular phone call. Our customer services operate 24 hours a day, 7 days a week to ensure you get the help you need.",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    location: "Location",
    workingHours: "Working Hours",
    workingHoursValue: "Monday - Saturday: 8:00 - 18:00 | Sunday: 10:00 - 16:00",
    
    // Footer
    quickLinks: "Quick Links",
    ourServicesFooter: "Our Services",
    contactFooter: "Contact",
    footerDescription: "TEKNOVA TZ is your trusted destination for learning phone and computer technologies in Tanzania. We offer comprehensive training, device repair services, and expert consultation at affordable prices. Join us today!",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sw")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
