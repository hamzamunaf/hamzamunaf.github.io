
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import logo from "./CraftCenterImage.JPG";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hamza Munaf",
  title: "Hi all, I'm Hamza",
  subTitle: emoji("Accomplished Salesforce Integration and IAM Architect with 3 years of consulting experience at Deloitte, specializing in designing and implementing secure, scalable integrations between Salesforce and enterprise systems. Adept at leveraging advanced tools, APIs, and programming languages to optimize identity and access management (IAM) solutions, ensuring robust security and seamless user experiences."),
  resumeLink: "https://hamzamunaf.github.io/Hamza-Munaf-Resume-20251110.pdf"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hamzamunaf",
  linkedin: "https://www.linkedin.com/in/hamzamunaf11/",
  gmail: "hamzamunaf.11@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Salesforce Integration and IAM Architect at Deloitte",
  skills: [
    emoji("⚡ Designing and implementing secure, scalable integrations between Salesforce and enterprise systems"),
    emoji("⚡ Specializing in Single Sign-On (SSO) implementation and Identity & Access Management (IAM) solutions"),
    emoji("⚡ Utilizing Bulk API, Streaming API, and Event Platforms for data operations and real-time processing"),
    emoji("⚡ Designing APIs using OpenAPI specifications and ensuring code quality with SonarQube"),
    emoji("⚡ Certified Salesforce Integration Architect, IAM Architect, System Architect, and Development Lifecycle Architect")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL/SOQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git/Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Apex",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Westcliff University",
      logo: "https://logo.clearbit.com/westcliff.edu",
      subHeader: "Master of Science in Engineering Management",
      duration: "March 2025 - Present",
      descBullets: [
        "Currently pursuing Master's degree in Engineering Management",
        "Focusing on leadership, project management, and technical strategy"
      ]
    },
    {
      schoolName: "Oregon State University",
      logo: "https://logo.clearbit.com/oregonstate.edu",
      subHeader: "B.Sc. Computer Science (Applied Security)",
      duration: "September 2017 - March 2022",
      descBullets: [
        "Graduated with 3.59 GPA",
        "Specialized in Applied Security",
        "Completed Senior Capstone Project: ASP.NET MVC Craft Center Website with SAML 2.0 and OAuth 2.0 integration"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Salesforce Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Integration & IAM",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Consultant",
      company: "Deloitte GPS",
      companylogo: "https://logo.clearbit.com/deloitte.com",
      date: "September 2022 - Present",
      desc: "Salesforce Integration and IAM Architect",
      descBullets: [
        "Developed and implemented several integrations for inbound and outbound processes on the Salesforce platform, enhancing data exchange and communication",
        "Successfully implemented SSO for the Salesforce environment, streamlining user authentication and providing seamless experience across various applications",
        "Conducted feasibility analyses, proof-of-concept work, and provided accurate estimates to ensure timely feature delivery",
        "Utilized Bulk API, Streaming API, and Event Platforms for operations such as data loading, real-time data processing, and event-driven workflows",
        "Designed APIs using OpenAPI specifications to ensure compatibility and usability across multiple systems",
        "Used SonarQube to perform automatic reviews with static analysis of code, detecting and addressing bugs and code smells promptly"
      ]
    },
    {
      role: "Product Development Engineer I",
      company: "DAT Freight & Analytics",
      companylogo: "https://logo.clearbit.com/dat.com",
      date: "June 2021 – September 2022",
      desc: "Salesforce Development",
      descBullets: [
        "Developed flows, triggers, batch classes, Apex classes, and customized solutions in Salesforce to enhance company processes",
        "Authored Salesforce application documentation and streamlined the usage process for custom-built applications",
        "Enhanced Salesforce custom objects, page layouts, workflows, alerts, reports, and complex dashboards",
        "Worked extensively with Salesforce.com standard objects (Accounts, Contacts, Opportunities) and custom objects",
        "Utilized various web services (SOAP, REST) for different exposures, ensuring seamless integration with Salesforce",
        "Expert in data cleansing and migration, using third-party Python modules to clean up data and output CSV files",
        "Implemented Email-to-Case framework with different Future triggers to handle and cleanse cases",
        "Integrated various third-party applications like DocuSign and Nice InContact into Salesforce",
        "Increased test coverage to 97% for custom Apex classes, ensuring robust and reliable code"
      ]
    },
    {
      role: "Student Programmer/Analyst",
      company: "Oregon State University",
      companylogo: "https://logo.clearbit.com/oregonstate.edu",
      date: "July 2020 – June 2021",
      desc: "Graduate School",
      descBullets: [
        "Automated complex business processes in Salesforce and provided operational support, enhancements and bug fixes",
        "Collaborated with technical teams and assisted non-technical employees with bug fixes and test scenario writing",
        "Performed configuration and customization for in-house Salesforce applications, including downstream systems and flows",
        "Documented Salesforce processes for using the in-house application to assist with training and onboarding",
        "Conducted extensive testing of applications and worked with the team to resolve issues",
        "Continuously learned in-demand Salesforce skills using Trailhead (https://trailblazer.me/id/hmunaf1)",
        "Developed custom solutions in Lightning communities using CSS, Lightning Components, JQuery, and JavaScript"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hamzamunaf", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Capstone Project",
  subtitle: "ASP.NET MVC Craft Center Website - Developed a web application using ASP.NET Core 5.0 MVC, Razor Pages, SQL Server, and Bootstrap. Implemented SAML 2.0 and OAuth 2.0 protocols. Designed and implemented relational database for membership and class registration process.",
  projects: [
    {
      image: logo,
      link: "https://media.oregonstate.edu/media/t/1_7kd65oxz"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Certifications and Achievements 🏆 "),
  subtitle: "Salesforce Certifications, Professional Achievements, and Academic Honors",

  achievementsCards: [
    {
      title: "Salesforce Integration Architect",
      subtitle: "Certified in designing and implementing secure, scalable integrations between Salesforce and enterprise systems",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232c3e50' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E🔗%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EIntegration%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EArchitect%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "View on Trailhead", url: "https://trailblazer.me/id/hmunaf1" }
      ]
    },
    {
      title: "Salesforce Identity & Access Management Architect",
      subtitle: "Expert in implementing SSO and IAM solutions for Salesforce environments",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2334495e' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E🔐%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EIAM%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EArchitect%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "View on Trailhead", url: "https://trailblazer.me/id/hmunaf1" }
      ]
    },
    {
      title: "Salesforce System Architect",
      subtitle: "Certified in designing scalable and maintainable Salesforce architectures",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233498db' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E🏗️%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3ESystem%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EArchitect%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "View on Trailhead", url: "https://trailblazer.me/id/hmunaf1" }
      ]
    },
    {
      title: "Salesforce Development Lifecycle and Deployment Architect",
      subtitle: "Expert in Salesforce development lifecycle, CI/CD, and deployment strategies",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232c3e50' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E⚙️%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='11' fill='white' text-anchor='middle'%3EDeployment%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='11' fill='white' text-anchor='middle'%3EArchitect%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "View on Trailhead", url: "https://trailblazer.me/id/hmunaf1" }
      ]
    },
    {
      title: "Additional Salesforce Certifications",
      subtitle: "Platform Developer I, Platform App Builder, Administrator, AI Associate, and Certified ScrumMaster",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2334495e' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E⭐%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EMultiple%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3ECertifications%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "View on Trailhead", url: "https://trailblazer.me/id/hmunaf1" }
      ]
    },
    {
      title: "International Provost Scholarship",
      subtitle: "Received a 4-year Scholarship for Oregon State University",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e67e22' rx='8'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle'%3E🏆%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EScholarship%3C/text%3E%3Ctext x='50%25' y='85%25' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EAward%3C/text%3E%3C/svg%3E",
      footerLink: [
        { name: "Award", url: "" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Small Projects",
  subtitle: "I like to develop small projects that you can take a look at my Github account.",

  blogs: [
    {
      url: "https://github.com/hamzamunaf/servicedesk-botUI",
      title: "IT Support Chat Bot",
      description: "Used BotUI, Handlebars, and JavaScript to create an automated chat bot using pre-defined knowledge base articles to help customers troubleshoot hardware and software issues."
    },
    {
      url: "https://github.com/hamzamunaf/React-OpenWeatherApi-MapBox",
      title: "Open-Weather API and MapBoxGL",
      description: "React application that shows weather maps for user-defined input areas using OpenWeather API and MapBoxGL external APIs."
    },
    {
      url: "https://github.com/hamzamunaf",
      title: "Google App Engine Portfolio Project",
      description: "Utilized Google Cloud Platform DataStore to store user data, exposed an API using Datastore for CRUD operations and Auth0 JWT to authenticate users."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // Add your talks here
    // {
    //   title: "Talk Title",
    //   subtitle: "Event Name",
    //   slides_url: "https://example.com/slides",
    //   event_url: "https://example.com/event"
    // }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your podcast embed links here
    // "https://anchor.fm/your-podcast/embed/episodes/..."
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "541-908-9529",
  email_address: "hamzamunaf.11@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
