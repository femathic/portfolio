import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'graphql',
    icon: graphql,
  },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Software Engineer',
    company_name: 'UBA Group',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2018 - May 2019',
  },
  {
    title: 'Software Engineer',
    company_name: 'Ash Nelson Partners',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2019 - Apr 2021',
  },
  {
    title: 'Senior Software Engineer (Contract)',
    company_name: 'Floating Point Group',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2022 - Feb 2023',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Skuad',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2021 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Moovis',
    description: 'A movies and shows listing gallery',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/femathic/movie_gallery',
    demo: 'https://moovis.netlify.app/home',
  },
  {
    id: 'project-2',
    name: 'NextGen',
    description:
      'Analytics page UI design challenge for NextGen.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    // image: leaderboard,
    image: math,
    repo: 'https://github.com/femathic/nextgen-analytics-page-challenge',
    demo: 'https://femathic.github.io/nextgen-analytics-page-challenge/',
  },
  {
    id: 'project-3',
    name: 'Writers Probe',
    description: `A creative writing website concept`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/femathic/writersprob',
    demo: 'https://femathic.github.io/writersprob/',
  },
  {
    id: 'project-4',
    name: 'Itedoanu',
    description: 'A Cooperative Multipurpose Society',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://itedoanu.com.ng',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
