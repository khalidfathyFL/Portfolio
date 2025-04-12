/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Khalid Fathy",
  title: "Hi all, I'm Khalid 👋",
  subTitle: emoji(
    "A passionate AEC Software Engineer 🚀 with a deep commitment to transforming the AEC industry through automation, plugins, and cutting-edge technologies. I craft powerful desktop and web applications using C#/.NET, WPF, Angular, and Revit APIs — driving productivity, integration, and innovation in engineering workflows."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1R7GbyHXueBZW2xZhbkX1uSA6axvSmHJG/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khalidfathyFL",
  linkedin: "https://www.linkedin.com/in/khalidfathyua1/",
  gmail: "khalidfathyuar@gmail.com",
  medium: "https://medium.com/@khalidfathyuar",
 youtube: "https://www.youtube.com/c/EngKhalidFathy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AEC SOFTWARE ENGINEER BRIDGING BIM & DEVELOPMENT WITH .NET, C#, AND WEB STACKS",
  skills: [
    emoji("⚡ Build WPF Desktop apps with MVVM, Prism, Community Toolkit, and Material Design"),
    emoji("⚡ Develop scalable web apps using ASP.NET Core, Angular, React, and SignalR"),
    emoji("⚡ Create Revit, Navisworks, and AutoCAD plugins to automate BIM workflows"),
    emoji("⚡ Integrate CI/CD with GitHub Actions and use Docker for containerization"),
    emoji("⚡ Develop multilingual UI libraries and internal tooling across departments")
  ],
  softwareSkills: [
    { skillName: "C#", logoPath: "CSharp.svg" },
    { skillName: "WPF", fontAwesomeClassname: "fas fa-desktop" },
    { skillName: ".NET Core", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", logoPath: "TypeScript.svg" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Entity Framework", fontAwesomeClassname: "fas fa-database" },
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Revit API",   logoPath: "Revit.svg" },
    { skillName: "NavisWorks API", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "AutoCAD API", logoPath: "AutoCad.svg" },
    { skillName: "Dynamo", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "SignalR", fontAwesomeClassname: "fas fa-signal" },
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira" }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Information Technology Institute (ITI)",
      logo: require("./assets/images/ITI.jpg"), // You can replace this with a custom ITI logo later
      subHeader: "9-Month Professional Diploma in Engineering Informatics Track",
      duration: "10/2022 – 06/2023",
      desc: "Specialized training in AEC software development and BIM automation. Participated in real-world projects integrating technology in the construction domain.",
      descBullets: [
        "Graduation project: Common Data Environment (OSP CDE)",
        "Courses in Revit, Dynamo, Navisworks, BIM 360, and BIM development"
      ]
    },
    {
      schoolName: "Banha University",
      logo: require("./assets/images/Banha.jpg"), // You can replace this with Banha University logo
      subHeader: "Bachelor's degree in Civil Engineering",
      duration: "2016 – 2021",
      desc: "Solid foundation in civil engineering with practical exposure to design, modeling, and construction principles.",
      descBullets: []
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Sr. AEC Software Engineer",
      company: "MicroBIM",
      companylogo: require("./assets/images/MicroBIM-Fire-Circular.jpg"), // Replace with MicroBIM logo if available
      date: "Sep 2024 – Present",
      desc: "Leading plugin development and automation systems tailored for AEC workflows across Revit versions.",
      descBullets: [
        "Created NuGet packages supporting all Revit versions",
        "Built CI/CD workflows using GitHub Actions for deployment and obfuscation",
        "Developed multilingual WPF UI library and documentation website",
        "Packaged the solution with Wix# and Dotfuscator"
      ]
    },
    {
      role: "Sr. AEC Software Engineer",
      company: "Consultancy Group",
      companylogo: require("./assets/images/CG.jpg"), // Replace with Consultancy Group logo if available
      date: "Aug 2023 – Oct 2024",
      desc: "Developed internal tools, desktop/web apps, and led junior developers to enhance construction efficiency.",
      descBullets: [
        "Automated repetitive AEC workflows through plugins",
        "Created enterprise desktop/web apps using .NET tech stack",
        "Integrated BI tools with construction data for better decision making",
        "Mentored junior engineers and managed team deliverables"
      ]
    },
    {
      role: "BIM Developer / Structural Technical BIM Engineer",
      company: "Al Masa for Smart Solutions",
      companylogo: require("./assets/images/AlMasa.jpg"), // Replace with Al Masa logo if available
      date: "Jan 2022 – Oct 2022",
      desc: "Combined structural modeling with automation tools for BIM processes.",
      descBullets: [
        "Automated tasks using Dynamo and Revit API",
        "Modeled structural and architectural elements in Revit",
        "Generated BOQs and produced shop drawings"
      ]
    },
    {
      role: "Dynamo Instructor",
      company: "Information Technology Institute (ITI)",
      companylogo: require("./assets/images/ITI.jpg"), // Replace with ITI logo if available
      date: "Sep 2023 – Present",
      desc: "Teaching Dynamo in the BIM Automation and AEC Informatics tracks."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "REAL PROJECTS I BUILT FOR COMPANIES OR AS PART OF MY AEC TOOLKIT",
  projects: [
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"), // Replace with your own image if available
      projectName: "Geo Exporter",
      projectDesc:
        "Export Revit models to 20+ file formats (Unity, Blender, Unreal, etc.), retaining all materials, multilingual UI, and includes a 3D viewer.",
      footerLink: [
        {
          name: "Demo",
          url: "https://www.youtube.com/watch?v=DE8AMkSHNxo&list=PL16sRsusCwGh_2MBPgzbZ674CMyMqxtXO"
        }
      ]
    },
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"), // Replace with your ERP logo if any
      projectName: "CGenius System",
      projectDesc:
        "A custom ERP system for internal use including HR and project modules. Built with Entity Framework and N-tier architecture.",
      footerLink: [
        {
          name: "GitHub / Details",
          url: "https://drive.google.com/file/d/1zYLdZGMTV-TyztPjJnJK-CoRgnlN6D0w/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"),
      projectName: "Email Refiner Outlook Add-in",
      projectDesc:
        "Outlook add-in that uses GPT for intelligent email composition and MongoDB for dynamic email signatures.",
      footerLink: [
        {
          name: "More Info",
          url: "https://drive.google.com/file/d/1qR6J5gQ0BsMueLATFUG_fzrWFDlf6MJ8/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"),
      projectName: "Tiles Generator",
      projectDesc:
        "Plugin that generates floor tiles from Revit room boundaries using predefined patterns like Herringbone, Ashlar, etc.",
      footerLink: []
    },
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"),
      projectName: "Common Data Environment (OSP CDE)",
      projectDesc:
        "Graduation project from ITI: A centralized BIM collaboration platform ensuring version control and streamlined workflows.",
      footerLink: [
        {
          name: "Demo",
          url: "https://www.youtube.com/watch?v=Cv3wpX31oaQ"
        }
      ]
    },
    {
      image: require("./assets/images/MicroBIM-Fire-Circular.jpg"), // Replace with a clothify image if available
      projectName: "Clothify E-Commerce App",
      projectDesc:
        "ASP.NET Core MVC-based e-commerce app for clothing stores with full product and cart functionality.",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/khalidfathyua1_mvc-efcore-dotnet-activity-7060565710795603968-9_k_"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate on a project or just say hello? I'm always open for a chat.",
  number: "+20 155 323 7562",
  email_address: "khalidfathyuar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
