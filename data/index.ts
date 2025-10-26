export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Compatible with all modern browsers, fully responsive, SEO optimized and your satisfaction are all guaranteed.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Constantly Working on Mastering AI Technology",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 7,
    title: "SmileDent - AI Powered Dental Assistant",
    des: "FullStack Next.js application",
    img: "/projects/smiledent.png",
    iconLists: [
      {
        id: 1,
        name: "Next.JS",
        designation: "React Framework",
        image: "/tech-logos/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "JS With Syntax For Types",
        image: "/tech-logos/ts.svg",
      },
      {
        id: 4,
        name: "Clerk",
        designation: "Authentication and Payment Tool",
        image: "/tech-logos/clerk.png",
      },
      {
        id: 5,
        name: "Vapi",
        designation: "AI Voice Agent",
        image: "/tech-logos/vapi.png",
      },
    ],
    link: "https://smiledent.vercel.app/",
  },
  {
    id: 1,
    title: "Highlight Hero - Business Automation App",
    des: "Interactive Next.js application",
    img: "/projects/highlight-hero.png",
    iconLists: [
      {
        id: 1,
        name: "ReactJS",
        designation: "Javascript Library",
        image: "/tech-logos/re.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "JS With Syntax For Types",
        image: "/tech-logos/ts.svg",
      },
    ],
    link: "https://highlight-hero.vercel.app/",
  },
  {
    id: 2,
    title: "Eagerworks",
    des: "Website of IT company based in Uruguay",
    img: "/projects/eagerworks.png",
    iconLists: [
      {
        id: 1,
        name: "HTML5",
        designation: "Markup Language",
        image: "/tech-logos/html5.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
      {
        id: 3,
        name: "Motion Design",
        designation: "Animation Library",
        image: "/tech-logos/framer-motion.png",
      },
    ],
    link: "https://eagerworks-front.vercel.app/",
  },
  {
    id: 3,
    title: "EduLearn",
    des: "Online learning platform",
    img: "/projects/edu-learn.png",
    iconLists: [
      {
        id: 1,
        name: "HTML5",
        designation: "Markup Language",
        image: "/tech-logos/html5.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
    ],
    link: "https://edulearn-me.vercel.app/",
  },
  {
    id: 4,
    title: "Gravity Technologies",
    des: "Website of IT company based in Switzerland",
    img: "/projects/gravity.png",
    iconLists: [
      {
        id: 1,
        name: "ReactJS",
        designation: "Javascript Library",
        image: "/tech-logos/re.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
    ],
    link: "https://gravity-ten.vercel.app/",
  },
  {
    id: 5,
    title: "La Belle",
    des: "Website of a beauty products store",
    img: "/projects/la-belle.png",
    iconLists: [
      {
        id: 1,
        name: "HTML5",
        designation: "Markup Language",
        image: "/tech-logos/html5.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
    ],
    link: "https://la-belle-me.vercel.app/",
  },
  {
    id: 6,
    title: "IQS University",
    des: "Website of a university based in Spain",
    img: "/projects/iqs-university.png",
    iconLists: [
      {
        id: 1,
        name: "HTML5",
        designation: "Markup Language",
        image: "/tech-logos/html5.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "CSS Framework",
        image: "/tech-logos/tail.svg",
      },
    ],
    link: "https://iqs-me.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Absolute great seller. He managed to develop everything up to my expectations and even exceeded them. I'm more than satisfied and his work is a work of quality. Would absolutely recommend, great job! Was a pleasure to communicate.",
    name: "Masternoah",
    title: "from Germany",
  },
  {
    quote:
      "Perfect delivery, exactly what I asked for and in a very good time. recommended",
    name: "Ricardojaa",
    title: "From Germany",
  },
  {
    quote: "Great work very quick and excellent quality",
    name: "Marcoruggeri",
    title: "From UK",
  },
  {
    quote:
      "Fast delivery. Really happy with the results and the communication.",
    name: "Sercanto",
    title: "From France",
  },
  {
    quote: "Easy communication, great turnaround!",
    name: "Jelkaim",
    title: "From USA",
  },
  {
    quote: "Great work and great value!",
    name: "Jridyard",
    title: "From USA",
  },
  {
    quote:
      "Very satisfied with the work. The tailwind markup delivered was high quality with very high attention to detail. I'll certainly be buying again.",
    name: "Giorgenes",
    title: "From Australia",
  },
  {
    quote:
      "His work was effective. He delivered fast. He communicated well on the steps. The delivery is exactly what was expected.",
    name: "Hadrienblanc",
    title: "From France",
  },
  {
    quote:
      "He knew exactly what I wanted and was very flexible if I had things that I wanted changed. Would recommend!",
    name: "Slideshowbob",
    title: "From Netherlands",
  },
  {
    quote:
      "Seller assisted in the migration of a legacy static site with broken and outdated CSS from Tailwind v2 to v3. Delivery was timely. Project was delivered both as a zip and later as a pull request in GitHub. This allowed our team to quickly review exactly what changed a make a few minor tweaks before merging into our main branch a few hours later. This is our second project with mirkomilboy and we're already planning to utilize him for our next project.",
    name: "Lebrauncom",
    title: "From USA",
  },
  {
    quote:
      "Mirko asked the right question and it felt like he understood in one time all i needed. He made me comfortable about the delivery and the communication for the feedbacks and iteration was great. Great job. Thank you very much. Very effective and skilled. Would highly recommend :)",
    name: "Louisl917",
    title: "From France",
  },
  {
    quote:
      "Mirkomilboy converted a website from plain html and css to tailwind css. Very accurate results, quick delivery, simple communication. I will hire him again for more projects!",
    name: "Felix_elevator",
    title: "From Germany",
  },
  {
    quote:
      "I am very happy with his responsiveness and quality of the final product. I will likely want to buy from again. The product was delivered earlier than our agreed to date/time.",
    name: "Michealslatt148",
    title: "From USA",
  },
  {
    quote:
      "Seller made a pixel perfect responsive vue+tailwind css page from a design. Very fast and very happy with results, will definitely come back to buy more!",
    name: "Acosta_32",
    title: "From Portugal",
  },
  {
    quote:
      "Super fast and really took his time to get the project done right. We kept fine tuning until we were completely happy with the results, and I appreciate that in any freelancer (it's a rare thing to find) Great experience :)",
    name: "Rdocreyz",
    title: "From USA",
  },
  {
    quote:
      "He is very friendly, skilled, fast, and he will take his time understanding your needs, applying fixes and give revisions. im really really happy working with Mirkomilboy!",
    name: "Ryuzeke",
    title: "From Greece",
  },
  {
    quote:
      "It was very good working with this seller. Good work ethic, I would recommend him to anyone trying to get a figma to a website as fast as possible. Really clean code too. Will definitely order again.",
    name: "Nathanmillner",
    title: "From USA",
  },
];

export const companies = [
  {
    id: 1,
    name: "Fiverr",
    img: "/fiverr-logo.svg",
    nameImg: "/fiverr-logo.svg",
  },
  {
    id: 2,
    name: "Upwork",
    img: "/upwork-logo.svg",
    nameImg: "/upwork-logo.svg",
  },
  {
    id: 3,
    name: "Eagerworks",
    img: "/eagerworks-logo.svg",
    nameImg: "/eagerworks-logo.svg",
  },
  {
    id: 4,
    name: "IQS University",
    img: "/iqs-logo.svg",
    nameImg: "/iqs-logo.svg",
  },
  {
    id: 5,
    name: "Gravity Technologies",
    img: "/gravity-logo.jpg",
    nameImg: "/gravity-logo.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer at Fiverr and Upwork",
    desc: "I'm a frontend engineer at Fiverr and Upwork, where I work on the frontend of the platform.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Engineer assistant at Japanese IT company",
    desc: "I'm a engineer assistant at a Japanese IT company, where I help to implement new features, fix bugs and test the code.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Member of the team Utrujjah",
    desc: "Utrujjah has five members in total, we are a team of developers that work on a project together.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Co-founder of several startups",
    desc: "Actively working together with a team to build Ajeeb, Safeer and Darmn. My role is to build the frontend of the product.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "socials/github.svg",
    url: "https://github.com/mirkomilboy",
  },
  {
    id: 2,
    img: "socials/telegram.svg",
    url: "https://t.me/mirkomilboy_sadirov",
  },
  {
    id: 3,
    img: "socials/linkedin.svg",
    url: "https://www.linkedin.com/in/mirkomilboy-sadirov/",
  },
];
