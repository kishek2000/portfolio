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
    place: "Optus",
    timePeriod: "FEB 2021 - NOW",
    role: "Digital Networks Automation Intern",
    desc:
      "Full Stack Developer working on the creation and optimisation of automation tools on an internal application, increasing efficiency for networking experts in Optus. Learning technical and telecommunication concepts from senior to principal level network engineers and technical specialists.",
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
          {
            title: "Hive",
            icon: "hive.png",
          },
          {
            title: "Impala",
            icon: "impala.png",
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
    place: "Accenture",
    timePeriod: "JAN 2021 - NOW",
    role: "Full Stack Developer (Sponsored Project)",
    desc:
      "Full Stack Developer working on an intelligent education platform for children who have ASD. Focused on providing dynamically tailored content with detailed analysis and guidance for parents. In collaboration with Autism Awareness.",
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
          {
            title: "Python",
            icon: "python3.png",
          },
        ],
      },
    ],
  },
  {
    place: "Sadafal Education",
    timePeriod: "APR 2020 - NOW",
    role: "Full Stack Developer, UI Designer",
    desc:
      "Range of work from maintaining global website with redesign and development currently in progress, to collaborating on the development of a global education platform tailored to anyone who wants to master their passion.",
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
            title: "DynamoDB",
            icon: "dynamodb.png",
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
            title: "EC2",
            icon: "ec2.png",
          },
          {
            title: "ECS",
            icon: "ecs.png",
          },
        ],
      },
    ],
  },
  {
    place: "Vihangam Yoga",
    timePeriod: "FEB 2018 - NOW",
    role: "Volunteer, Full Stack Developer, UI Designer",
    desc:
      "Range of work focused on assisting in the design and development of applications that provide an effective medium for individuals interested in meditation and spirituality, to understand and learn more about the science of spirituality.",
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
    place: "Sukrit Life",
    timePeriod: "JAN 2017 - NOW",
    role: "Volunteer, Media Production, UI Designer",
    desc:
      "Media Production and Design focus toward a platform that seeks to provide a place where anyone can become inspired to recognise, understand, discuss and act on global issues. Coming soon in 2021-22.",
    skills: [
      {
        title: "Web Design",
        technologies: [
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
    timePeriod: "DEC 2018 - AUG 2019",
    role: "Volunteer, Social Presence, Media Production",
    desc:
      "Kumbh Sukrit is a globally recognised travel company providing experiences of Ancient India. We grew a social presence of over 10,000 followers across mainstream social media to invite individuals to experience the Kumbh Mela with us. Throughout the campaign, I also worked on the composition of video soundtracks and lead the scripting, music and visual production of a retrospective thirty minute documentary.",
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
