// Centralized data constants for the entire Bo Ayuthaya portfolio
// Rule: Never hardcode text or static data inside UI components

export const THUMBNAILS_DATA = [
  { id: "thumb-1", image: "/thumbnail/MartEat.jpg", title: "100days in mart" },
  { id: "thumb-2", image: "/thumbnail/snowForestDesert.jpg", title: "survival three nature" },
  { id: "thumb-3", image: "/thumbnail/gloomEat.jpg", title: "" },
  { id: "thumb-4", image: "/thumbnail/orstich.jpg", title: "" },
  { id: "thumb-5", image: "/thumbnail/demandSupply.jpg", title: "Demand Supply 2%" },
  { id: "thumb-6", image: "/thumbnail/noMoneyNoWorry.jpg", title: "No Money No Worry" },
  { id: "thumb-7", image: "/thumbnail/rankLive.jpg", title: "Rank Live" },
]

export const CLIENT_DATA = [
  {
    id: "client-1",
    name: "Coming soon",
    author: "",
    role: "",
    subscribers: "",
    avatar: "/images/Guess.jpg",
    quote: "Client collaborations and thumbnail case studies are coming soon. Stay tuned!",
  },
  {
    id: "client-2",
    name: "Coming soon",
    author: "",
    role: "",
    subscribers: "",
    avatar: "/images/Guess.jpg",
    quote: "Exciting creator projects and thumbnail packaging in progress. Reveal coming soon!",
  },
  {
    id: "client-3",
    name: "Coming soon",
    author: "",
    role: "",
    subscribers: "",
    avatar: "/images/Guess.jpg",
    quote: "New high-performing thumbnail case studies and creator reviews coming soon!",
  },
]

export const FAQ_ITEMS = [
  {
    id: "faq-3",
    question: "Do you have a YouTube channel?",
    answer: "Yes, I do! You can click",
    inlineLink: {
      text: "here",
      url: "https://www.youtube.com/@AyuthayaPro",
    },
    answerAfterLink: "for my channel.",
  },
]

export const SHOWCASED_CREATORS_DATA = [
  {
    id: "creator-1",
    name: "AyuthayaPro",
    subscribers: "1 SUBSCRIBERS",
    image: "/headshot.png",
    width: 800,
    height: 1000,
  },
  {
    id: "creator-2",
    name: "Coming Soon",
    subscribers: "Coming soon",
    image: "/images/Guess.jpg",
    width: 800,
    height: 1000,
  },
  {
    id: "creator-3",
    name: "Coming Soon",
    subscribers: "Coming soon",
    image: "/images/Guess.jpg",
    width: 800,
    height: 1000,
  },
  {
    id: "creator-4",
    name: "Coming Soon",
    subscribers: "Coming soon",
    image: "/images/Guess.jpg",
    width: 800,
    height: 1000,
  },
  {
    id: "creator-5",
    name: "Coming Soon",
    subscribers: "Coming soon",
    image: "/images/Guess.jpg",
    width: 800,
    height: 1000,
  },
]

export const CREATORS_STATS = {
  views: {
    target: 0,
    suffix: "",
    label: "Total views",
  },
  likes: {
    target: 0,
    suffix: "",
    label: "Total likes",
  },
}

export const CONTACT_CONTENT = {
  title: "LET'S WORK G",
  headingLine1: "Got a Video?",
  headingLine2: "Let's Make It Click.",
  subtitle: "Tell me about your video, your channel and the style you like. I'll send concepts within 24-48 hours.",
  endpoint: "https://formspree.io/f/mrpevdjb",
  channels: {
    phone: {
      number: "081661190",
      display: "081661190",
      url: "tel:081661190",
      label: "Phone",
    },
    telegram: {
      handle: "@boayuthaya",
      url: "https://t.me/boayuthaya",
      label: "Telegram",
      desc: "Fastest reply",
    },
    facebook: {
      handle: "Bo Ayuthaya",
      url: "https://www.facebook.com/bo.ayuthaya/",
      label: "Facebook",
      desc: "Chat on Messenger",
    },
    linkedin: {
      handle: "Bo Ayuthaya",
      url: "https://www.linkedin.com",
      label: "LinkedIn",
    },
    email: {
      address: "ayutiatabb@gmail.com",
      url: "mailto:ayutiatabb@gmail.com",
      label: "Email",
    },
    fiverr: {
      url: "https://www.fiverr.com",
      label: "Fiverr",
    },
  },
}

export const FOOTER_DATA = {
  copyright: 'Copyright © 2025 | Powered by Bo Ayuthaya',
  socials: [
    { id: 'telegram', name: 'Telegram', url: 'https://t.me/boayuthaya' },
    { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/bo.ayuthaya/' },
    { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com/@AyuthayaPro' },
    { id: 'email', name: 'Email', url: 'mailto:ayutiatabb@gmail.com' },
  ],
}
