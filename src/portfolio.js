
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import logo from "./CraftCenterImage.JPG";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hamza Munaf",
  title: "Hi all, I'm Hamza",
  subTitle: emoji("Excellent team player and content expert with in-depth knowledge of development tools and programming languages.  Individual with keen eye for details and currently a senior at Oregon State University in Computer Science, with 2 years of experience as a Student Programmer and IT Technician. Aiming to leverage a proven knowledge of  programming skills, project planning, customer satisfaction skills and Usability testing skills for an internship as a Software Engineer."),
  resumeLink: "https://hamzamunaf.github.io/assets/resume.pdf"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hamzamunaf",
  linkedin: "https://www.linkedin.com/in/hamza-munaf-048b56181/",
  gmail: "hamzamunaf.11@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Computer Science student at Oregon State University",
  skills: [
    emoji("⚡ Compeleting my Senior project integrating SAML 2.0 and OAuth2.0 in Asp.NET MVC."),
    emoji("⚡ Daily bug fixing for my student job at Graduate School (Salesforce):  diagnose issues, fix bugs, write unit tests, pull requests in an active university-critical codebase on the Salesforce platform with contributors from many different university departments"),
    emoji("⚡ Integration of third party API's to understand how they are working"),
    emoji("⚡ Working towards CSX Cybersecurity Fundamentals Certificate")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Oregon State University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyWepG6NckklFP5JL1xi43slsNRCLur3VLg&usqp=CAU",
      subHeader: "Bachelors in Computer Science, Applied Security (Senior)",
      duration: "September 2017 - Ongoing",
      descBullets: [
        "Currently working on my Senior Project using ASP.NET MVC",
        "Taking Advanced Web development Class to learn React and GraphQL"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Programmer/Analyst",
      company: "Oregon State University",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyWepG6NckklFP5JL1xi43slsNRCLur3VLg&usqp=CAU",
      date: "July 2020 - Present",
      desc: "Graduate School",
      descBullets: [
        "Automating complex business processes in Salesforce and performing operational support, enhancements and bug fixes as needed.",
        "Became a part of the technical team and assisted non-technical employees with fixing bugs and writing test scenarios for different applications.",
        "Performing configuration and customization for the in-house Salesforce applications.",
        "Testing applications with extensive cases and working with team to get them fixed.",
        "Writing documentation on Salesforce applications as well as streamlining the process of how to use the in-house application.",
        "Learning in Demand Skills for Salesforce using Trailhead ( https://trailblazer.me/id/hmunaf1 )"
      ]
    },
    {
      role: "Student Technician",
      company: "Oregon State University",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyWepG6NckklFP5JL1xi43slsNRCLur3VLg&usqp=CAU",
      date: "June 2018 – Present",
      desc: "University Information and Technology",
      descBullets: [
        "Assisting in and planning training, development and education for new software and hardware. Supporting various systems like Banner, Splunk, Microsoft Exchange Console, Active directory. Troubleshooting to identify and resolving problems in a timely manner. ",
        "Extensive support for Zoom which includes licensing and functionalities for customers and became a part of Zoom Escalation team.",
        "Responsibilities include installing operating systems and programs, troubleshooting hardware, and software issues and supporting applications like MS Office, Box, etc.",
        "Creating, maintaining, and entering information into Knowledge Base articles for documentation. Streamlining the process for making documentation for new software's.",
        "Communicating with different departments and tiers to escalate tasks in a timely manner."
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Senior Design Project",
  subtitle: "Developed OSU Craft Center Online Tool,  Senior Project: Custom Asp.Net MVC application development for student registration for classes in the craft center on campus using C# and Microsoft SQL Server with Entity Framework.",
  projects: [
    {
      image: logo,
      link: "https://media.oregonstate.edu/media/t/1_7kd65oxz"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Awards and Achievements 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "International Provost Scholarship",
      subtitle: "Recieved a 4-year Scholarship for Oregon State University",
      image: "https://wallpapercave.com/wp/uSRF0BG.jpg",
      footerLink: [
        { name: "Award", url: "" }
      ]
    },
    {
      title: "Dean's Honor List",
      subtitle: "Achieved 4.0 GPA in Fall 2019, Spring 2020 and Fall 2020",
      image: "https://wallpapercave.com/wp/uSRF0BG.jpg",
      footerLink: [
        { name: "Award", url: "" }
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Small Projects",
  subtitle: "I like to develop small projects that you can take a look at my Github account.",

  blogs: [
    {
      url: "https://github.com/hamzamunaf/CS340-Project",
      title: "Using Node.JS, Handlebars and MongoDB to setup a database for free Computer Science courses ",
      description: "Managed the team for Setting up a relational Database and writing Queries for each part of the page performing different database operations."
    },
    {
      url: "https://github.com/hamzamunaf/servicedesk-botUI",
      title: "IT Support Chat Bot using Node.JS",
      description: "Support chat to troubleshoot computer's hardware and software issues and supporting two factor authentication app for Oregon State University"
    },
    {
      url: "https://github.com/hamzamunaf/CS344-OTP",
      title: "One Time Pad in C for Operating Systems",
      description: "Using Sockets in C to develop One Time Pad in C"
    },
    {
      url: "https://github.com/hamzamunaf/React-OpenWeatherApi-MapBox",
      title: "Using OpenWeatherApi and MapboxGL in React",
      description: "Developing a website using OpenWeatherApi and MapboxGL"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "Hamzamunaf.11@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
