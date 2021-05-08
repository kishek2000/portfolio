import { SkillsModel } from "./placesInfo";

interface ProjectModel {
  thumbnail: string;
  title: string;
  subtitle: string;
  desc: string;
  roles: string[];
  timePeriod: string;
  skills: SkillsModel[];
  links: ProjectLink[];
  startDate: Date;
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
    desc:
      "myLounge is a digital lounge that allows users to browse and/or filter TV Shows, Movies, Podcasts and Music, and immediately find a list of streaming services for a chosen media option!",
    roles: ["Full Stack Developer", "Project Lead"],
    timePeriod: "Feb - Apr 2020",
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
        title: "repository",
        icon: "github.png",
        link: "https://github.com/kishek2000/Team-100",
      },
      {
        title: "video demo",
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
    desc:
      "GalacticEd is an intelligent education platform that tailors content dynamically for children who have ASD.",
    roles: ["Full Stack Developer"],
    timePeriod: "Jan 2021 - Now",
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
            title: "Flask",
            icon: "flask.png",
          },
          {
            title: "MongoDB",
            icon: "mongodb.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "repository",
        icon: "github.png",
        link: "https://github.com/kishek2000/accentureHackathon",
      },
      {
        title: "live demo",
        icon: "repository.png",
        link: "https://galactic-ed.xyz/",
      },
    ],
    startDate: new Date("01/13/2021"),
  },
  {
    thumbnail: "/thumbnails/concentrum.png",
    title: "Concentrum",
    subtitle: "Explore disease and outbreak info seamlessly.",
    desc:
      "Concentrum is a platform that gives a vast widget library and ability to create and share screens for corporate, government and personal use in disease outbreak info.",
    roles: ["Full Stack Developer"],
    timePeriod: "Feb - Apr 2021",
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
            title: "FastAPI",
            icon: "fastapi.png",
          },
          {
            title: "MongoDB",
            icon: "mongodb.png",
          },
        ],
      },
      {
        title: "DevOps",
        technologies: [
          {
            title: "EC2, ECR and ECS",
            icon: "/aws.png",
          },
          {
            title: "Github, Github Actions",
            icon: "/github.png",
          },
        ],
      },
    ],
    links: [
      {
        title: "repository",
        icon: "github.png",
        link: "https://github.com/nikhilahuja314/SENG3011_SourDough",
      },
      {
        title: "live demo",
        icon: "repository.png",
        link: "https://concentrum-m6umdhxmd-seng3011sourdough.vercel.app/",
      },
    ],
    startDate: new Date("01/02/2021"),
  },
  {
    thumbnail: "/thumbnails/transportme.png",
    title: "transport.me",
    subtitle: "Manage all your travel needs.",
    desc:
      "transport.me is a mobile application that removes the need for you to have multiple applications, and manage all your travel needs.",
    roles: ["Full Stack Developer"],
    timePeriod: "Jun - Aug 2020",
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
        title: "repository",
        icon: "github.png",
        link: "https://github.com/nikhilahuja314/SENG3011_SourDough",
      },
      {
        title: "video demo",
        icon: "repository.png",
        link: "https://youtu.be/FvWCukOS9bE",
      },
    ],
    startDate: new Date("06/01/2020"),
  },
  {
    thumbnail: "/thumbnails/discovery.png",
    title: "Discovery",
    subtitle: "Learning made fun.",
    desc:
      "Discovery is a platform that makes children's education fun and engaging, covering interesting areas of content about the world! Powered by Sadafal Education.",
    roles: ["Frontend Developer, Project Lead"],
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
        title: "Designing",
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
        title: "live demo",
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
    desc:
      "Sadafal Education is an aspiring global education provider that helps individuals to discover, learn and master their passion.",
    roles: ["Full Stack Developer, UI Designer"],
    timePeriod: "Jun 2020 - Now",
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
        title: "Designing",
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
        title: "global website",
        icon: "repository.png",
        link: "https://sadafal-education.com",
      },
    ],
    startDate: new Date("06/01/2020"),
  },
  {
    thumbnail: "/thumbnails/kp.png",
    title: "knowledge.path",
    subtitle: "Anyone can learn.",
    desc:
      "knowledge.path is an education platform releasing mid-late 2021. With their own path, anyone can be employed in their passion. Powered by Sadafal Education.",
    roles: ["Full Stack Developer, UI Designer"],
    timePeriod: "Jul 2020 - Now",
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
        title: "coming soon...",
        icon: "repository.png",
        link: "/",
        disable: true,
      },
    ],
    startDate: new Date("07/01/2020"),
  },
];
