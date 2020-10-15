export const Projects = [
  {
    month: "MAR 2020",
    isParent: true,
    projects: [
      {
        projNo: 1,
        projectInfo: {
          name: "myLounge",
          slogan: "Listen. Watch. Relax",
          description:
            "myLounge is a digital lounge that allows users to browse and/or filter TV Shows, Movies, Podcasts and Music, and immediately find a list of streaming services for a chosen media option!",
          frontend: ["react", "css", "javascript"],
          backend: ["django", "python3"],
          status: "discontinued",
          roles: ["Frontend Lead", "Full Stack Developer"],
        },
        link: {
          title: "VIDEO DEMO >",
          url: "https://www.youtube.com/watch?v=znZc0CzMUmQ",
        },
      },
    ],
  },
  {
    month: "MAY 2020",
    isParent: false,
    projects: [
      {
        projNo: 1,
        flipSide: true,
        projectInfo: {
          name: "Discovery",
          slogan: "Learning made fun.",
          description:
            "Discovery is a platform that makes children's education fun and engaging. It aims to target a large age range, and is a free learning space that covers interesting areas of content about the world! Powered by Sadafal Education.",
          frontend: ["react", "css", "javascript"],
          backend: ["javascript"],
          status: "content searching",
          roles: ["Project Lead"],
        },
        link: {
          title: "LIVE DEMO >",
          url: "https://www.kishek2000.github.io/discovery",
        },
      },
    ],
  },
  {
    month: "JUN 2020",
    isParent: false,
    projects: [
      {
        projNo: 1,
        projectInfo: {
          name: "Sadafal Education",
          slogan: "Discover, learn and master your passion.",
          description:
            "Sadafal Education aims to be a global level education provider that guides individuals to discover their path of learning and shape their career! Anyone can learn, and anyone can master their passion.",
          frontend: ["react", "emotion", "typescript"],
          backend: ["typescript"],
          status: "optimising",
          roles: ["Website Lead", "UI Designer"],
        },
        link: {
          title: "GLOBAL WEBSITE >",
          url: "https://www.sadafal-education.com",
        },
      },
    ],
  },
  {
    month: "JUL 2020",
    isParent: false,
    projects: [
      {
        projNo: 1,
        flipSide: true,
        projectInfo: {
          name: "transport.me",
          slogan: "Manage all your travel needs.",
          description:
            "transport.me is a mobile application that truly revolutionises your use of public transport. Removing the need for you to have multiple applications just to get from A to B, we provide a way for you to do it all in one place.",
          frontend: ["expo", "react-native"],
          designAndPrototyping: ["figma"],
          status: "discontinued",
          roles: ["Frontend Developer", "Project Lead"],
        },
      },
      {
        projNo: 2,
        projectInfo: {
          name: "knowledge.path",
          description:
            "knowledge.path is a global scale education platform estimated to release late 2020. Anyone can discover the learning paths that best fit them, and learn the skills they need to get employed. Powered by Sadafal Education.",
          frontend: ["tbd"],
          backend: [
            "typescript",
            "dynamodb",
            "aws",
            "docker",
            "apollo-graphql",
          ],
          status: "developing backend",
          roles: ["Junior Developer", "Junior UI Designer"],
        },
      },
    ],
  },
];

export const QualificationData = [
  {
    class: "full-stack",
    title: "Full Stack Technologies",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        technologies: [
          {
            id: "react",
            title: "React",
            icon: "/react.png",
          },
          {
            id: "react-native",
            title: "React Native",
            icon: "/react.png",
          },
          {
            id: "html",
            title: "HTML",
            icon: "/html.png",
          },
          {
            id: "emotion",
            title: "Emotion",
            icon: "/css.png",
          },
          {
            id: "css",
            title: "CSS",
            icon: "/css.png",
          },
          {
            id: "javascript",
            title: "JavaScript",
            icon: "/javascript.png",
          },
          {
            id: "typescript",
            title: "TypeScript",
            icon: "/typescript.png",
          },
          {
            id: "expo",
            title: "Expo",
            icon: "/expo.png",
          },
        ],
      },
      {
        id: "design-prototype",
        title: "Design and Prototyping",
        technologies: [
          {
            id: "figma",
            title: "Figma",
            icon: "/figma.png",
          },
          {
            id: "sketch",
            title: "Sketch",
            icon: "/sketch.png",
          },
        ],
      },
      {
        id: "devops",
        title: "DevOps",
        technologies: [
          {
            id: "github",
            title: "GitHub",
            icon: "/github.png",
          },
          {
            id: "gitlab",
            title: "GitLab",
            icon: "/gitlab.png",
          },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        technologies: [
          {
            id: "typescript",
            title: "TypeScript",
            icon: "/typescript.png",
          },
          {
            id: "aws",
            title: "Amazon Web Services",
            icon: "/aws.png",
          },
          {
            id: "apollo-graphql",
            title: "Apollo GraphQL",
            icon: "/apollo-graphql.png",
          },
          {
            id: "docker",
            title: "Docker",
            icon: "/docker.png",
          },
          {
            id: "python3",
            title: "Python3",
            icon: "/python3.png",
          },
          {
            id: "django",
            title: "Django",
            icon: "/django.png",
          },
        ],
      },
      {
        id: "databases",
        title: "Database Technologies",
        technologies: [
          {
            id: "postgresql",
            title: "PostgreSQL",
            icon: "/postgresql.png",
          },
          {
            id: "sqlite",
            title: "SQLite",
            icon: "/sqlite.png",
          },
          {
            id: "dynamodb",
            title: "DynamoDB",
            icon: "/dynamodb.png",
          },
        ],
      },
    ],
  },
  {
    class: "other",
    title: "Other",
    categories: [
      {
        id: "programming-languages",
        title: "Programming Languages",
        technologies: [
          {
            id: "typescript",
            title: "TypeScript",
            icon: "/typescript.png",
          },
          {
            id: "javascript",
            title: "JavaScript",
            icon: "/javascript.png",
          },
          {
            id: "python3",
            title: "Python3",
            icon: "/python3.png",
          },
          {
            id: "c",
            title: "C",
            icon: "/c.png",
          },
          {
            id: "perl",
            title: "Perl",
            icon: "/perl.png",
          },
        ],
      },
      {
        id: "audio-visual-production",
        title: "Audio Visual Production",
        technologies: [
          {
            id: "logic-pro",
            title: "Logic Pro X",
            icon: "/logic-pro.png",
          },
          {
            id: "final-cut-pro",
            title: "Final Cut Pro X",
            icon: "/final-cut-pro.png",
          },
          {
            id: "adobe-audition",
            title: "Adobe Audition",
            icon: "/adobe-audition.png",
          },
          {
            id: "blender",
            title: "Blender",
            icon: "/blender.png",
          },
        ],
      },
    ],
  },
];

export const TechnologyData = [
  { id: "tbd", title: "TBD", icon: "" },
  {
    id: "react",
    title: "React",
    icon: "/react.png",
  },
  {
    id: "css",
    title: "CSS",
    icon: "/css.png",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "/javascript.png",
  },
  {
    id: "django",
    title: "Django",
    icon: "/django.png",
  },
  {
    id: "python3",
    title: "Python3",
    icon: "/python3.png",
  },
  {
    id: "emotion",
    title: "Emotion",
    icon: "/css.png",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "/typescript.png",
  },
  {
    id: "expo",
    title: "Expo",
    icon: "/expo.png",
  },
  {
    id: "figma",
    title: "Figma",
    icon: "/figma.png",
  },
  {
    id: "dynamodb",
    title: "DynamoDB",
    icon: "/dynamodb.png",
  },
  {
    id: "docker",
    title: "Docker",
    icon: "/docker.png",
  },
  {
    id: "apollo-graphql",
    title: "Apollo Graphql",
    icon: "/apollo-graphql.png",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: "/aws.png",
  },
  {
    id: "react-native",
    title: "React Native",
    icon: "/react.png",
  },
];

export const ProjectStatusStyles = [
  {
    id: "discontinued",
    title: "DISCONTINUED",
    color: "#C62400",
  },
  {
    id: "content searching",
    title: "CONTENT SEARCHING",
    color: "#0008C6",
  },
  {
    id: "optimising",
    title: "OPTIMISING",
    color: "#00B812",
  },
  {
    id: "developing backend",
    title: "DEVELOPING BACKEND",
    color: "#00A2C6",
  },
];
