import { SkillsModel } from "./placesInfo";

export interface ProjectModel {
  thumbnail: string;
  title: string;
  subtitle: string;
  desc: string;
  roles: string[];
  timePeriod: string;
  skills: SkillsModel[];
  links?: ProjectLink[];
  startDate: Date;
  type: "industry" | "personal" | "university";
}

interface ProjectLink {
  title: string;
  icon: string;
  link: string;
  disable?: boolean;
}

export const projects: ProjectModel[] = [
  {
    thumbnail: "/thumbnails/mylounge.png",
    title: "myLounge",
    subtitle: "Listen. Watch. Relax.",
    desc: "myLounge is a digital lounge that allows users to browse and/or filter TV Shows, Movies, Podcasts and Music, and immediately find a list of streaming services for a chosen media option!",
    roles: ["Full Stack Lead"],
    timePeriod: "Feb - Apr 2020",
    type: "university",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "CSS",
            icon: "css.png",
          },
          {
            title: "Django",
            icon: "django.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Repository",
        icon: "github.png",
        link: "https://github.com/kishek2000/Team-100",
      },
      {
        title: "Video Demo",
        icon: "repository.png",
        link: "https://www.youtube.com/watch?v=znZc0CzMUmQ",
      },
    ],
    startDate: new Date("03/01/2020"),
  },
  {
    thumbnail: "/thumbnails/galacticed.png",
    title: "GalacticEd",
    subtitle: "Empower your child's learning.",
    desc: "GalacticEd is an intelligent education platform that tailors content dynamically for children who have ASD. All Rights to Autism Awareness and Accenture.",
    roles: ["Full Stack Developer", "Designer"],
    timePeriod: "Jan 2021 - Now",
    type: "industry",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Emotion CSS",
            icon: "css.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "Apollo GraphQL",
            icon: "/apollo-graphql.png",
          },
          {
            title: "MongoDB",
            icon: "mongodb.png",
          },
          {
            title: "Express",
            icon: "express.png",
          },
        ],
      },
    ],
    links: [
      // {
      //   title: "Repository",
      //   icon: "github.png",
      //   link: "https://github.com/kishek2000/accentureHackathon",
      // },
      // {
      //   title: "Live Demo",
      //   icon: "repository.png",
      //   link: "https://galactic-ed.xyz/",
      // },
      {
        title: "Walkthrough Demo",
        icon: "repository.png",
        link: "https://youtu.be/YY9z1u1X_fA",
      },
    ],
    startDate: new Date("01/13/2021"),
  },
  {
    thumbnail: "/thumbnails/concentrum.png",
    title: "Concentrum",
    subtitle: "Explore disease and outbreak info seamlessly.",
    desc: "Concentrum provides a vast widget library and ability to create and share screens for various user in disease outbreak info.",
    roles: ["Full Stack Developer", "Designer"],
    timePeriod: "Feb - Apr 2021",
    type: "university",
    skills: [
      {
        title: "Web Development & Devops",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "FastAPI",
            icon: "fastapi.png",
          },
          {
            title: "MongoDB",
            icon: "mongodb.png",
          },
          {
            title: "ECR, ECS",
            icon: "/ecs.png",
          },
          {
            title: "Github",
            icon: "/github.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Repository",
        icon: "github.png",
        link: "https://github.com/nikhilahuja314/SENG3011_SourDough",
      },
      {
        title: "Video Demo",
        icon: "repository.png",
        link: "https://youtu.be/yHOr7dQGYKk",
      },
    ],
    startDate: new Date("01/02/2021"),
  },
  {
    thumbnail: "/thumbnails/transportme.png",
    title: "transport.me",
    subtitle: "Manage all your travel needs.",
    desc: "transport.me is a mobile application that removes the need for you to have multiple applications, and manage all your travel needs.",
    roles: ["Full Stack Developer", "Designer"],
    timePeriod: "Jun - Aug 2020",
    type: "university",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Expo",
            icon: "expo.png",
          },
        ],
      },
      {
        title: "Prototyping",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Repository",
        icon: "github.png",
        link: "https://github.com/nikhilahuja314/SENG3011_SourDough",
      },
      {
        title: "Video Demo",
        icon: "repository.png",
        link: "https://youtu.be/FvWCukOS9bE",
      },
    ],
    startDate: new Date("06/01/2020"),
  },
  {
    thumbnail: "/thumbnails/vir-thumbnail.png",
    title: "Vir Srinivas",
    subtitle: "Filmmaker: Portfolio Website",
    desc: "Vir is a young award-winning feature film writer, producer and director based in Sydney, Australia. He was trained at Sydney Film School, where he gained a Diploma of Screen and Media in 2021.",
    roles: ["Full Stack Developer, Designer, Maintainer"],
    type: "industry",
    timePeriod: "Oct 2021 - Now",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "NextJS",
            icon: "nextjs.png",
          },
        ],
      },
      {
        title: "Design",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Live Website",
        icon: "repository.png",
        link: "https://www.virsrinivas.com/",
      },
    ],
    startDate: new Date("10/23/2021"),
  },
  {
    thumbnail: "/thumbnails/discovery.png",
    title: "Discovery",
    subtitle: "Learning made fun.",
    desc: "Discovery is a platform that makes children's education fun and engaging, covering interesting areas of content about the world! Powered by Sadafal Education.",
    roles: ["Frontend Developer, Project Lead"],
    type: "personal",
    timePeriod: "May 2020",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
        ],
      },
      {
        title: "Design",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Live Demo",
        icon: "repository.png",
        link: "https://kishek2000.github.io/discovery/",
      },
    ],
    startDate: new Date("05/05/2020"),
  },
  {
    thumbnail: "/thumbnails/se.png",
    title: "Sadafal Education",
    subtitle: "Discover, Learn and Master your passion.",
    desc: "Sadafal Education is an aspiring global education provider that helps individuals to discover, learn and master their passion.",
    roles: ["Full Stack Developer, Designer"],
    timePeriod: "Jun 2020 - Now",
    type: "industry",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
        ],
      },
      {
        title: "Design",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
          {
            title: "Sketch",
            icon: "sketch.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Global Website",
        icon: "repository.png",
        link: "https://sadafal-education.com",
      },
    ],
    startDate: new Date("06/01/2020"),
  },
  {
    thumbnail: "/thumbnails/se.png",
    title: "Bahudha Foundation",
    subtitle: "Global peace and harmony.",
    desc: "With a vision for global peace and harmony, bahudha foundation is an organisation focused on the empowerment of one and all.",
    roles: ["Frontend Developer, Designer"],
    timePeriod: "Mar 2022 - Now",
    type: "industry",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "Cloudflare Pages",
            icon: "cloudflare.jpeg",
          },
        ],
      },
      {
        title: "Design",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Global Website",
        icon: "repository.png",
        link: "https://bahudha-foundation.org",
      },
    ],
    startDate: new Date("02/03/2022"),
  },
  {
    thumbnail: "/thumbnails/kp.png",
    title: "knowledge.path",
    subtitle: "Anyone can learn.",
    desc: "knowledge.path is an education platform releasing in early 2022. With their own path, anyone can be employed in their passion. Powered by Sadafal Education.",
    roles: ["Full Stack Developer, Designer"],
    timePeriod: "Jul 2020 - Now",
    type: "industry",
    skills: [
      {
        title: "Web Development",
        technologies: [
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "DynamoDB",
            icon: "dynamodb.png",
          },
          {
            title: "Apollo GraphQL",
            icon: "apollo-graphql.png",
          },
          {
            title: "Docker",
            icon: "docker.png",
          },
          {
            title: "Sketch",
            icon: "sketch.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "Coming Soon...",
        icon: "repository.png",
        link: "/",
        disable: true,
      },
    ],
    startDate: new Date("07/01/2020"),
  },
];
