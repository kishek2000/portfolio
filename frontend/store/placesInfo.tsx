export const places = [
  "Optus",
  "Accenture",
  "Sadafal Education",
  "Vihangam Yoga",
  "Sukrit Life",
  "Kumbh Sukrit",
];

export const placesInfo: PlaceModel[] = [
  {
    place: "Sadafal Education",
    timePeriod: "Apr 2020 - Present",
    role: "Full Stack Developer, UI Designer",
    desc: "Range of work including full redesign and implementation of our global website, to collaborating on the development of a global education platform tailored to anyone who wants to master their passion. Currently leading the implementation and testing of our design system for the education platform, and leading the design and and development of an e-commerce website for the selling of clothes made by our students.",
    skills: [
      {
        title: "Web Design and Development",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "Apollo GraphQL",
            icon: "apollo-graphql.png",
          },
          {
            title: "CosmosDB",
            icon: "cosmosdb.svg",
          },
          {
            title: "Remix",
            icon: "remixrun.svg",
          },
        ],
      },
      {
        title: "DevOps",
        technologies: [
          {
            title: "Cloudflare Workers, Cloudflare Pages",
            icon: "cloudflare.jpeg",
          },
        ],
      },
    ],
  },
  {
    place: "Optus",
    timePeriod: "Feb 2021 - Aug 2021",
    role: "Full Stack Developer Intern",
    desc: "As a Full Stack Developer and Digital Networks Automation Intern, worked on the introduction of a DevOps way of working, with the creation and optimisation of automation tools that ease the work of experts in the wider Network team. Learned technical and telecommunication concepts from Senior to Principal Network Engineers and Technical Specialists.",
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
            title: "Express",
            icon: "express.png",
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
            title: "Rancher",
            icon: "rancher.png",
          },
          {
            title: "Harbor",
            icon: "harbor.png",
          },
          {
            title: "Docker",
            icon: "docker.png",
          },
          {
            title: "Helm",
            icon: "helm.png",
          },
          {
            title: "Gitlab",
            icon: "gitlab.png",
          },
        ],
      },
    ],
  },
  {
    place: "Accenture & Autism Awareness",
    timePeriod: "Jan 2021 - Present",
    role: "Full Stack Developer",
    desc: "Passion project sponsored by Accenture. Full Stack Developer working in a team on an intelligent education platform for children with ASD. Focused on providing tailored content with detailed analysis and guidance for parents, in collaboration with Autism Awareness. We have completed two phases of work to create an MVP for funding, and are moving into Recommendation AI next.",
    skills: [
      {
        title: "Web Design and Development",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "Apollo Graphql, Express",
            icon: "apollo-graphql.png",
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
            title: "Docker",
            icon: "docker.png",
          },
          {
            title: "ECR, ECS",
            icon: "/ecs.png",
          },
        ],
      },
    ],
  },

  {
    place: "Vihangam Yoga",
    timePeriod: "Feb 2018 - Present",
    role: "Volunteer, Full Stack Developer, UI Designer",
    desc: "Range of work focused on assisting in the design and development of applications that provide an effective medium for individuals interested in meditation and spirituality, to understand and learn more about the science of spirituality.",
    skills: [
      {
        title: "Web Design and Development",
        technologies: [
          {
            title: "Figma",
            icon: "figma.png",
          },
          {
            title: "React",
            icon: "react.png",
          },
          {
            title: "Typescript",
            icon: "typescript.png",
          },
          {
            title: "Expo",
            icon: "expo.png",
          },
          {
            title: "React Native",
            icon: "react.png",
          },
        ],
      },
    ],
  },
  {
    place: "Evergrowing",
    timePeriod: "Jan 2017 - Present",
    role: "Volunteer, Media Production, UI Designer",
    desc: "Media Production and Design focus toward a platform that seeks to provide a place where anyone can become inspired to recognise, understand, discuss and act on global issues. Collaborating on development of meditation mobile app coming soon.",
    skills: [
      {
        title: "Mobile App Development",
        technologies: [
          {
            title: "Expo",
            icon: "expo.png",
          },
        ],
      },
      {
        title: "Web and Mobile App Design",
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
  },
  {
    place: "Kumbh Sukrit",
    timePeriod: "Dec 2018 - Aug 2019",
    role: "Volunteer, Social Presence, Media Production",
    desc: "Kumbh Sukrit is a globally recognised travel company providing experiences of Ancient India. We reached over 10,000 followers across mainstream social media in inviting individuals to visit the Kumbh Mela with us. Throughout the campaign, also worked on the composition of video soundtracks and lead the scripting, music and visual production of our thirty minute documentary.",
    skills: [
      {
        title: "Media Production",
        technologies: [
          {
            title: "Adobe Audition",
            icon: "adobe-audition.png",
          },
          {
            title: "Final Cut Pro X",
            icon: "final-cut-pro.png",
          },
          {
            title: "Logic Pro X",
            icon: "logic-pro.png",
          },
        ],
      },
    ],
  },
];
interface PlaceModel {
  timePeriod: string;
  role: string;
  skills: SkillsModel[];
  place: string;
  desc: string;
}
interface TechModel {
  title: string;
  icon: string;
}
export interface SkillsModel {
  title: string;
  technologies: TechModel[];
}
