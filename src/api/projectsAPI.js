import React from "react";

export const projectList = [

  // PORTFOLIO
  {
    id: "portfolio",
    projectName: "Project Portfolio",
    projectURL: "https://stephaniehall.ca/",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-portfolio-website.png"),
      altText: "Mockup of Stephanie Hall's portfolio home page on a tablet",
    },
    status: "Launched, Ongoing Maintenance",
    type: "Personal",
    client: "Personal Project",
    role: "Software Developer",
    launchDate: "May 2024",
    topSkills: "React JS | JavaScript | Product Design",
    skills: [
      "React JS",
      "Javascript",
      "SCSS",
      "GitHub",
      "cPanel",
      "Joy UI",
      "HTML",
      "Product Design",
      "UI Design",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/react.jpg"),
        altText: "React Logo",
      },
      {
        url: require("../assets/logos/javascript.jpg"),
        altText: "Javascript Logo",
      },
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/sass.jpg"),
        altText: "Sass Logo",
      },
      {
        url: require("../assets/logos/mui.jpg"),
        altText: "Material UI Logo",
      },
      {
        url: require("../assets/logos/github.jpg"),
        altText: "GitHub Logo",
      },
    ],
    challenge:
      "My portfolio includes a wide range of projects within softwared development, UI design, graphic design and communications.",
    solution:
      "To showcase this wide range, I developed a React App and accompanying API that features my portfolio, the broad range of skills I've developed and my roles within each project.",
    roleIntro:
      "I worked as the sole creator, designer and developer for this portfolio.",
    roleList: [
      "Created a SPA using  JS",
      "Developed a static API in JavaScript",
      "Implemented Joy UI components",
      "Created site mockups using Figma",
      "Designed fully responsive, mobile-first site using Sass",
    ],
    outcomes:
      "The portfolio was launched in May 2024 and is continually updated.",
    nextStepsList: [
      "Add more projects to the API",
      "Add an about me page",
      "Add more photos to the project pages",
      "Develop a database in mySQL and implement 'like' functionality",
    ],
    relatedProjectsList: [
      {
        id: "sfu-website-redesign",
      },
      {
        id: "challenge-accepted",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Figma Wireframes",
        url: "https://www.figma.com/design/j5zDOuu3IwN4PzMXIF4SmO/Portfolio",
      },
      {
        urlName: "Git Repository",
        url: "https://github.com/stephlyanie/portfolio",
      },
    ],
  },

  // SFU WEBSITE REDESIGN
  {
    id: "sfu-website-redesign",
    projectName: "SFU Centre for Dialogue Website Redesign",
    projectURL: "https://www.sfu.ca/dialogue.html",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-sfu-website.png"),
      altText: "Mockup of the home page of SFU's website on a tablet",
    },
    status: "Phase One Complete, Phase Two In Progress",
    type: "Employee",
    client: "SFU Morris J. Wosk Centre for Dialogue",
    role: "Product Manager and Designer",
    launchDate: "February 2024",
    topSkills: "HTML | Product Management | UI Design",
    skills: [
      "HTML",
      "Product Management",
      "UI Design",
      "Team Leadership",
      "User Testing",
      "Cross-team Collaboration",
      "Change Management",
      "Training",
      "Technical Writing",
      "Project Management",
      "W3C Standards",
      "Brand Narrative",
      "Web Strategy",
      "Content Strategy",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/w3c.jpg"),
        altText: "W3C Web Standards Logo",
      },
    ],
    challenge:
      "The Centre for Dialogue underwent a period of rapid growth. A side effect of this growth was that the brand narrative had not kept up with the complexity of projects and achievements throughout the Centre. One of the ways this challenge manifested itself publicly was through the website, which had unclear user journeys to understand the Centre's mission for its various audiences.",
    solution:
      "To address this challenge, I initiated a website redesign informed by user testing.",
    roleIntro:
      "My role was to plan and lead the project through to completion.",
    roleList: [
      "Convened several stakeholder meetings throughout the process to build project buy-in, collect functionality requests, and manage expectations",
      "Developed the user testing framework to inform the redesign requirements",
      "Consolidated functionality requests and user testing input to prioritize revisions and present solutions to the executive team",
      "Created the revised site-map based on stakeholder meetings and user testing to improve user experience and overall brand trust",
      "Prioritized and delegated tasks among the communications team to execute the redesign",
      "Designed and implemented several site sections (notably the search for resources, dialogue approaches, what is dialogue, K&P, and signature events sections) to move the process forward while the team juggled several other responsibilities",
      "Envisioned and implemented cross-promotional features to encourage deeper engagement with the site's content and to  show how the diverse projects at the Centre intersect through dialogue",
      "Supported a stakeholder with high aversion to change by presenting data to inform decisions and committing to testing new features to ensure they meet the organization's needs",
      "Developed a project plan for phase two of the redesign to continue improving site functionality and user experience",
      "Ensured site redesign incorporated accessibility standards",
      "Developed a content strategy to make use of new site features",
      "Developed a staff bio template to further show how each initiative relates back to dialogue",
      "Designed wireframes using Figma",
    ],
    outcomes:
      "The website redesign resulted in clearer understanding of organizational mission and improved access to resources.",
    nextStepsList: [
      "Conduct another round of user testing, focusing on the main audience, to gather data on the redesigned site and inform phase two requirements",
      "Research accessibility standards and audit redesigned pages to ensure compliance",
      "Finesse brand narrative content",
      "Develop and maintain a site manual to document processes and rationale",
    ],
    relatedProjectsList: [
      {
        id: "portfolio",
      },
      {
        id: "challenge-accepted",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Figma Wireframes",
        url: "https://www.figma.com/design/FGzXzHSoMXff4taUFWdWWN/CLF4-Redesign",
      },
    ],
  },

  // CHALLENGE ACCEPTED APP
  {
    id: "challenge-accepted",
    projectName: "Challenge Accepted App",
    projectURL: "https://github.com/stephlyanie/challenge-accepted-gui",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-ca-website.png"),
      altText:
        "Mockup of the home page of Challenge Accepted website on a tablet",
    },
    status: "Preparing to Launch",
    type: "Personal",
    client: "BrainStation Capstone Project",
    role: "Creator",
    launchDate: "TBD",
    topSkills: "mySQL | Node JS | React JS",
    skills: [
      "mySQL",
      "Node JS",
      "React JS",
      "Express JS",
      "JavaScript",
      "SCSS",
      "Joy UI",
      "Axios",
      "GitHub",
      "HTML",
      "CSS",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/react.jpg"),
        altText: "React Logo",
      },
      {
        url: require("../assets/logos/node-js.jpg"),
        altText: "Node JS Logo",
      },
      {
        url: require("../assets/logos/express-js.jpg"),
        altText: "Express JS Logo",
      },
      {
        url: require("../assets/logos/axios.jpg"),
        altText: "Axios Logo",
      },
      {
        url: require("../assets/logos/mysql.jpg"),
        altText: "mySQL Logo",
      },
      {
        url: require("../assets/logos/javascript.jpg"),
        altText: "JavaScript Logo",
      },
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/sass.jpg"),
        altText: "Sass Logo",
      },
      {
        url: require("../assets/logos/mui.jpg"),
        altText: "Material UI Logo",
      },
      {
        url: require("../assets/logos/github.jpg"),
        altText: "GitHub Logo",
      },
    ],
    challenge:
      "As the final project for the BrainStation software engineering diploma, we were tasked with the challenge of creating a full stack app.",
    solution:
      "Inspired by the Great Canadian Baking Show, I developed the “Challenge Accepted” app where users can share and discover various types of baking creations and challenges.",
    roleIntro:
      "My role was to conceptualize, design, and develop this full stack app.",
    roleList: [
      "Designed UI using Figma",
      "Developed brand guidelines",
      "Developed front-end using React JS",
      "Developed back-end using Node",
      "Created database in mySQL",
    ],
    outcomes: "The app will be launched this summer.",
    nextStepsList: [
      "Launch using Heroku and Netlify",
      "Refine the UI using Joy UI",
      "Add more categories",
      "Implement more interactivity such as liking and commenting",
    ],
    relatedProjectsList: [
      {
        id: "portfolio",
      },
      {
        id: "maple-counselling-website",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Figma Wireframes",
        url: "https://www.figma.com/design/8TBdU8lM0GM8RrNKSR3Su3/Challenge-Accepted",
      },
      {
        urlName: "Git GUI Repository",
        url: "https://github.com/stephlyanie/challenge-accepted-gui",
      },
      {
        urlName: "Git API Repository",
        url: "https://github.com/stephlyanie/challenge-accepted-api",
      },
    ],
  },

  // MAPLE COUNSELLING WEBSITE
  {
    id: "maple-counselling-website",
    projectName: "Maple Counselling Website",
    projectURL: "https://www.maplecounselling.ca/",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-mc-website.png"),
      altText:
        "Mockup of the home page of Maple Counselling website on a tablet",
    },
    status: "Complete",
    type: "Freelance",
    client: "Maple Counselling",
    role: "Web Designer",
    launchDate: "March 2021",
    topSkills: "CSS | HTML | WordPress",
    skills: ["CSS", "HTML", "WordPress", "Client Management"],
    skillLogos: [
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/wordpress.jpg"),
        altText: "WordPress Logo",
      },
    ],
    challenge:
      "Jane Whitlaw approached me to design a website to help her launch her counselling practice in South Surrey.",
    solution:
      "I worked with Jane to customize a WordPress site using a pre-made theme.",
    roleIntro:
      "My role was to create the site within the theme and customize pages to the client's requests.",
    roleList: [
      "Designed all pages within the theme",
      "Customized pages using HTML and CSS",
      "Advised client on content needs and structure",
      "Implemented widgets to support site requirements",
      "Managed expectations of what's achievable within a small budget",
      "Launched site",
    ],
    outcomes:
      "The site was successfully launched and continues to contribute to the client's successful counselling practice.",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "portfolio",
      },
      {
        id: "challenge-accepted",
      },
    ],
    supportingLinksList: [],
  },

  // DEMOCRATIC CHAMPIONS GAME
  {
    id: "democratic-champions",
    projectName: "Democratic Champions Card Game Design",
    projectURL:
      "https://www.sfu.ca/dialogue/what-we-do/knowledge-practice/strengthening-canadian-democracy/democratic-champions-card-game.html ",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-scd-democratic-champs.png"),
      altText: "Mockup of 18 cards from the Democratic Champions game",
    },
    status: "Complete",
    type: "Freelance",
    client: "SFU's Strengthening Canadian Democracy Initiative",
    role: "Graphic Designer",
    launchDate: "September 2021",
    topSkills: "Graphic Design | Adobe InDesign | Adobe Illustrator",
    skills: [
      "Graphic Design",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Client Relations",
      "Greyscale Design",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/indesign.jpg"),
        altText: "Adobe InDesign Logo",
      },
      {
        url: require("../assets/logos/illustrator.jpg"),
        altText: "Adobe Illustrator Logo",
      },
    ],
    challenge:
      "The Strengthening Canadian Democracy Initiative at SFU's Morris J. Wosk Centre for Dialogue created a game to explore how to navigate democracy to inspire change.",
    solution:
      "They contracted me to design the playing cards and instruction sheets. These materials needed to be accessible for folks to download and print in black and white.",
    roleIntro:
      "I used Adobe InDesign and Illustrator programs to design the materials and provided printable pdfs to the team.",
    roleList: [
      "Designed five playing card types",
      "Designed the layout for the game instructions",
      "Sourced stock icons to represent the five card types",
      "Supplied printable, U.S. Letter pdf versions in black and white",
      "Delivered all design files at the end of the project",
    ],
    outcomes:
      "The game was piloted by community groups in Kelowna, by SFU students, and in private homes and received positive reviews.",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "democracy-infographics",
      },
      {
        id: "saravyc-being-safe-being-me",
      },
    ],
    supportingLinksList: [],
  },

  // BEING SAFE BEING ME
  {
    id: "saravyc-being-safe-being-me",
    projectName: "Being Safe, Being Me 2019",
    projectURL: "https://www.saravyc.ubc.ca/ctyhs2019/ ",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-ctyhs-website.png"),
      altText: "Mockup of the Being Safe Being Me landing page on a tablet",
    },
    status: "Complete",
    type: "Employee",
    client: "SARAVYC at UBC",
    role: "Designer and Writer",
    launchDate: "November 2020",
    topSkills: "CSS | UI Design | Graphic Design",
    skills: [
      "CSS",
      "HTML",
      "WordPress",
      "Knowledge Mobilization",
      "Graphic Design",
      "Strategic Communications",
      "Content Strategy",
      "Video Producing",
      "Script Writing",
      "Advisory Groups",
      "Professional Writing",
      "Technical Writing",
      "Key Messaging",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Social Media",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/wordpress.jpg"),
        altText: "WordPress Logo",
      },
      {
        url: require("../assets/logos/indesign.jpg"),
        altText: "Adobe InDesign Logo",
      },
      {
        url: require("../assets/logos/illustrator.jpg"),
        altText: "Adobe Illustrator Logo",
      },
      {
        url: require("../assets/logos/photoshop.jpg"),
        altText: "Adobe Photoshop Logo",
      },
    ],
    challenge:
      "In 2019, SARAVYC at UBC launched their findings from the Canadian Trans and Non-binary Youth Health Survey. In addition to academic articles and presentations, the researchers wanted their findings to be accessible to a wide audience.",
    solution:
      "To mobilize these findings to a public audience, we developed the Being Safe, Being Me 2019 report and accompanying resources.",
    roleIntro:
      "My role was to write the report based on data aggregated by researchers, design the report and accompanying resources, and create a launch strategy. ",
    roleList: [
      "Wrote report content based on data aggregated by the researchers",
      "Designed the report using Adobe inDesign and report charts and graphs using Adobe Illustrator",
      "Designed seven regional fact sheet infographics using Adobe Illustrator",
      "Wrote scripts and project managed creation of four informational animated videos, which were created by Art Over Matter",
      "Designed the report's landing page in UBC's WordPress platform and customized pages using CSS and HTML",
      "Created and executed a content strategy to launch the report and share findings on social media",
      "Wrote a press release to support UBC's media team in developing story pitches",
      "Facilitated translation into French and added the French content into all materials",
      "Created and revised all materials based on feedback from trans and non-binary youth advisory groups across the country",
    ],
    outcomes: "The report was launched in November 2020.",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "saravyc-out-at-home",
      },
      {
        id: "democratic-champions",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Video Series",
        url: "https://youtube.com/playlist?list=PL3AChx0wmhduwl6-oFJ_D7T9VZARb_dyh&si=e9IReQwrNLF-cqDU",
      },
    ],
  },

  // SCD INFOGRAPHICS
  {
    id: "democracy-infographics",
    projectName: "Strengthening Canadian Democracy Infographics",
    projectURL: "",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-scd-infographics.png"),
      altText: "Mockup of three infographics each on a smartphone screen",
    },
    status: "Complete",
    type: "Freelance",
    client: "SFU's Strengthening Canadian Democracy Initiative",
    role: "Graphic Designer",
    launchDate: "September 2020",
    topSkills: "Graphic Design | Adobe InDesign | Adobe Illustrator",
    skills: [
      "Graphic Design",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Client Relations",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/indesign.jpg"),
        altText: "Adobe InDesign Logo",
      },
      {
        url: require("../assets/logos/illustrator.jpg"),
        altText: "Adobe Illustrator Logo",
      },
    ],
    challenge:
      "The Strengthening Canadian Democracy team at SFU's Morris J. Wosk Centre for Dialogue was looking to mobilize their findings in a visual way.",
    solution: "They contracted me to design four infographics.",
    roleIntro:
      "I used Adobe InDesign and Illustrator programs to design the materials and provided digital versions to be displayed on their website. ",
    roleList: [
      "Designed infographics from data provided by the team",
      "Aligned designs to the project's brand guidelines",
      "Made content recommendations for concision and audience engagement",
      "Sourced stock icons to incorporate in the design",
    ],
    outcomes:
      "The infographics were published on their website and helped to bring greater understanding to the findings from their work. ",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "democratic-champions",
      },
      {
        id: "legion-key-tag-campaign",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Semester in Democracy Report Card",
        url: "https://www.sfu.ca/dialogue/what-we-do/knowledge-practice/strengthening-canadian-democracy/semester-in-democracy/semester-in-democracy-report-card.html",
      },
      {
        urlName: "Engaging Young People in Your Community",
        url: "https://www.sfu.ca/dialogue/what-we-do/knowledge-practice/strengthening-canadian-democracy/city-shapers/engaging-young-people.html",
      },
      {
        urlName: "Spark Democracy in your Library",
        url: "https://www.sfu.ca/dialogue/what-we-do/knowledge-practice/strengthening-canadian-democracy/the-library-collaborations-project/spark-democracy-infographic.html",
      },
      {
        urlName: "Four Attributes that Promote People to Make Change",
        url: "https://www.sfu.ca/dialogue/what-we-do/knowledge-practice/strengthening-canadian-democracy/neighbourhood-small-grants/4-attributes-that-motivate-people.html",
      },
    ],
  },

  // LEGION KEY TAG CAMPAIGN 2020
  {
    id: "legion-key-tag-campaign",
    projectName: "Key Tag Campaign",
    projectURL: "",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-key-chain.png"),
      altText: "Mockup of three key chain designs",
    },
    status: "Launched",
    type: "Freelance",
    client: "Legion Foundation",
    role: "Designer & Writer",
    launchDate: "August 2020",
    topSkills: "Graphic Design | Adobe Illustrator | Fundraising",
    skills: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Fundraising",
      "Graphic Design",
      "Writing",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/illustrator.jpg"),
        altText: "Adobe Illustrator Logo",
      },
      {
        url: require("../assets/logos/indesign.jpg"),
        altText: "Adobe InDesign Logo",
      },
    ],
    challenge:
      "Each year, the Legion Foundation raises funds for their veteran programs through a key chain campaign.",
    solution:
      "After writing the fundraising letter their 2019 campaign, they contacted me to support their 2020 campaign.",
    roleIntro:
      "I designed the 2020 key chains and and wrote the fundraising letter.",
    roleList: [
      "Met with the clients to gather scope requirements",
      "Interviewed a veteran and included their story in the fundraising letter",
      "Designed the layout for the fundraising letter using Adobe InDesign",
      "Designed three key chains using Adobe Illustrator",
    ],
    outcomes:
      "The key tags contributed to the Legion Foundation's successful fundraising.",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "saravyc-being-safe-being-me",
      },
      {
        id: "democratic-champions",
      },
    ],
    supportingLinksList: "",
  },

  // OUT AT HOME
  {
    id: "saravyc-out-at-home",
    projectName: "Out at Home",
    projectURL: "https://www.saravyc.ubc.ca/outathome/",
    thumbnail: {
      url: require("../assets/images/portfolio-tb-oah-website.png"),
      altText: "Mockup of the Out at Home landing page on a tablet",
    },
    status: "Complete",
    type: "Employee",
    client: "SARAVYC at UBC",
    role: "Designer and Writer",
    launchDate: "October 2019",
    topSkills: "CSS | UI Design | Graphic Design",
    skills: [
      "CSS",
      "HTML",
      "WordPress",
      "Knowledge Mobilization",
      "Graphic Design",
      "Strategic Communications",
      "Content Strategy",
      "Video Producing",
      "Script Writing",
      "Advisory Groups",
      "Professional Writing",
      "Technical Writing",
      "Key Messaging",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Social Media",
    ],
    skillLogos: [
      {
        url: require("../assets/logos/html.jpg"),
        altText: "HTML Logo",
      },
      {
        url: require("../assets/logos/css.jpg"),
        altText: "CSS Logo",
      },
      {
        url: require("../assets/logos/wordpress.jpg"),
        altText: "WordPress Logo",
      },
      {
        url: require("../assets/logos/indesign.jpg"),
        altText: "Adobe InDesign Logo",
      },
      {
        url: require("../assets/logos/illustrator.jpg"),
        altText: "Adobe Illustrator Logo",
      },
      {
        url: require("../assets/logos/photoshop.jpg"),
        altText: "Adobe Photoshop Logo",
      },
    ],
    challenge:
      "In 2019, SARAVYC at UBC was ready to mobilize their research findings to East Asian families in British Columbia.",
    solution:
      "Based on feedback from an East Asian parents advisory group, we created a take-home brochure, a website landing page, and three informational animated videos, all of which were then translated into four languages.",
    roleIntro: "My role was to write the content and design the materials.",
    roleList: [
      "Wrote report content based on data aggregated by the researchers",
      "Wrote brochure and website content based on data aggregated by the researchers",
      "Designed the brochure and supporting social media graphics using Adobe inDesign and report charts and graphs using Adobe Illustrator",
      "Designed seven regional fact sheet infographics using Adobe Illustrator",
      "Wrote scripts and project managed creation of three informational animated videos, which were created by Linnea Ritland",
      "Designed the report's landing page in UBC's WordPress platform and customized pages using CSS and HTML",
      "Created and executed a content strategy to launch the materials and share findings on social media",
      "Facilitated translation into four languages and added the translated content into all materials",
      "Created and revised all materials based on feedback from the advisory group",
    ],
    outcomes:
      "he materials were launched in October 2019. One of the collaborating researchers shared with me that this was the first time they'd seen supportive, research-based resources for LGBTQ+ youth written in their native language.",
    nextStepsList: "",
    relatedProjectsList: [
      {
        id: "saravyc-being-safe-being-me",
      },
      {
        id: "democratic-champions",
      },
    ],
    supportingLinksList: [
      {
        urlName: "Video Series",
        url: "https://youtube.com/playlist?list=PL3AChx0wmhdveqMFvHbgxdeLPhVGtsuMV&si=fgQywL-qXrnz1giS",
      },
    ],
  },
];
