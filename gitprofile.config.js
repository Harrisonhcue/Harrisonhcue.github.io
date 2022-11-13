// gitprofile.config.js

const config = {
  github: {
    username: 'harrisonhcue',
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'harrisonhcue',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://harrisonhcue.github.io',
    phone: '',
    email: 'harrisonhcue@gmail.com',
  },
  resume: {
    fileUrl: 'Harrison U-Ebili Resume L.pdf',
  },
  skills: [
    'C#',
    '.NET Framework',
    'Microservices',
    'CI/CD',
    'JavaScript',
    'React.js',
    'Node.js',
    'SQL stored procedures',
    'PostgreSQL',
    'Docker',
    'ETL pipelines',
    'Automation',
    'Azure',
    'AWS lambda',
    'GCP',
    'Appsheet',
    'Java',
    'Utility scripts',
  ],
  experiences: [
    {
      company: '@Rogers Communications',
      position: 'Senior Software Developer',
      from: 'August 2021',
      to: 'Present',
      companyLink:
        'https://www.rogers.com/business/data-centre-and-cloud/cloud-services',
    },
    {
      company: '@Rogers Communications',
      position: 'Software Developer',
      from: 'March 2021',
      to: 'August 2021',
      companyLink:
        'https://www.rogers.com/business/data-centre-and-cloud/cloud-services',
    },
    {
      company: '@SheridanCMI',
      position: 'Software Developer | Research',
      from: 'May 2019',
      to: 'March 2021',
      companyLink:
        'https://www.sheridancollege.ca/research/centres/mobile-innovation',
    },
    {
      company: '@Labatt Breweries of Canada ',
      position: 'Integration Developer',
      from: 'April 2020',
      to: 'January 2021',
      companyLink: 'https://www.labatt.com/ca_en',
    },
    {
      company: '@Maple Leaf Foods',
      position: 'Software Developer',
      from: 'January 2019',
      to: 'April 2019',
      companyLink: 'https://www.mapleleaffoods.com/',
    },
  ],
  education: [
    //  {
    //     institution: 'Institution Name',
    //     degree: 'Degree',
    //     from: '2012',
    //     to: '2014',
    //   },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev',
    username: '',
    limit: 3,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    themes: [
      //'dark',
      'light' /*
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',*/,
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
