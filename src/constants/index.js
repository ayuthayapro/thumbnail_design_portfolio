// Centralized data constants for the entire Menno Visser Media portfolio
// Rule: Never hardcode text or static data inside UI components

export const BRAND_INFO = {
  name: "Menno Visser",
  logo: "/watermark.png",
  tagline: "PACKAGING STRATEGIST",
}

export const NAV_LINKS = [
  { id: "the-problem", label: "The problem", href: "#about-me" },
  { id: "latest-thumbnails", label: "Latest thumbnails", href: "#latest-thumbnails" },
  { id: "client", label: "Client", href: "#client" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Book a Call", href: "#contact" },
]

export const HERO_CONTENT = {
  eyebrow: "PACKAGING STRATEGIST",
  headingBeforeClick: "The",
  clickableWord: "click",
  headingAfterClick: "is",
  headingLine2: "where it all",
  headingLine3: "starts",
  subtext: "IDEAS, TITLES & THUMBNAILS",
  cta: {
    label: "LET'S WORK G",
    href: "#contact",
  },
  headshot: "/headshot.png",
}

export const ABOUT_CONTENT = {
  aboutTitle: "About me",
  aboutBio: "I am Menno and I help serious YouTube creators turn ideas into high-performing titles and thumbnails, backed by strategy and market research, to drive more views. I've worked with some of the biggest creators on the platforms like Jeff Nippard, James West & vidIQ.",
  problemTitle: "The problem",
  problemIntro: "Most creators invest hours upon hours in production. But packaging determines whether your video even gets a chance.",
  problemPoints: [
    "don't validate the idea before committing",
    "a/b test without any thought behind it",
    "treat the thumbnail as an afterthought",
    "swap thumbnails reactively to save the video",
  ],
  problemOutro: "The result is underperforming videos. Sounds familiar?",
  cta: {
    label: "BOOK STRATEGY SESSION",
    href: "#contact",
  },
}

export const THUMBNAILS_DATA = [
  { id: "thumb-1", image: "/thumbnail/MartEat.jpg", title: "100days in mart" },
  { id: "thumb-2", image: "/thumbnail/snowForestDesert.jpg", title: "survival three nature" },
  { id: "thumb-3", image: "/thumbnail/gloomEat.jpg", title: "" },
  { id: "thumb-4", image: "/thumbnail/orstich.jpg", title: "" },
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

export const TESTIMONIALS_DATA = CLIENT_DATA

export const PACKAGING_CONTENT = {
  title: "Level up your packaging",
  description: "If you need clarity on your ideas, titles & thumbnails, this session is built for that. I help businesses on YouTube get more views and revenue by improving the packaging that of the video, that consists of the idea, title & thumbnail. This is for creators who want creative and strategic direction turning their videos into something people actually click. You'll walk away with a clearer direction and improvements you can immediately apply.",
  cta: {
    label: "VIEW STRATEGY CALL DETAILS",
    href: "#contact",
  },
}

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

export const NEWSLETTER_CONTENT = {
  title: "Newsletter",
  subtitle: "Not ready for coaching yet? I break down videos for free and show you how to turn them into something people actually click.",
  formHeadline: "Get More Clicks on Your Videos",
  buttonText: "SUBSCRIBE",
}

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

export const CREATORS_DATA = SHOWCASED_CREATORS_DATA

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
