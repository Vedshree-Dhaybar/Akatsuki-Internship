import author from "./assets/author.png";
import blog1 from "./assets/blog-1.png";
import blog2 from "./assets/blog-2.png";
import blog3 from "./assets/blog-3.png";
import blog4 from "./assets/blog-4.png";
import blog5 from "./assets/blog-5.png";
import blog6 from "./assets/blog-6.png";
import blog7 from "./assets/blog-7.png";
import blog8 from "./assets/blog-8.png";
import blog9 from "./assets/blog-9.png";
import blog10 from "./assets/blog-10.png";

const data = {
  blogInfo: [
    {
      id: 1,
      img: blog1,
      title: "Building microservices with Dropwizard, MongoDB & Docker",
      label: "Database",
      desc: "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
      profile: author,
      author: "Julia Walker",
      date: "Jan 17, 2022",
      time: "3 min",
    },
    {
      id: 2,
      img: blog2,
      title: "Fast web page loading on a $20 feature phone",
      label: "Web Performance",
      desc: "Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone..",
      profile: author,
      author: "Julia Walker",
      date: "Dec 10, 2021",
      time: "2 min",
    },
    {
      id: 3,
      img: blog3,
      title: "Accessibility Tips for Web Developers",
      label: "Accessibility",
      desc: "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools and resources can help here, even if you're totally new to web accessibility.",
      profile: author,
      author: "Julia Walker",
      date: "Nov 28, 2021",
      time: "4 min",
    },
    {
      id: 4,
      img: blog4,
      title: "Dynamically Securing Databases using Hashicorp Vault",
      label: "Database",
      desc: "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to securing complex infrastructures and defining strong authorization and authentication policies across the enterprise.",
      profile: author,
      author: "Julia Walker",
      date: "Nov 20, 2021",
      time: "4 min",
    },
    {
      id: 5,
      img: blog5,
      title: " Adaptive Loading - Improving Web Performance on low-end devices",
      label: "Web Performance",
      desc: " Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device capabilities, a 'one-size' fits all experience may not always work. Sites that delight users on high-end devices can be unusable on low-end ones, particularly on median mobile and desktop hardware and in emerging markets.",
      profile: author,
      author: "Julia Walker",
      date: "Nov 10, 2021",
      time: "3 min",
    },
    {
      id: 6,
      img: blog6,
      title:
        "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
      label: "Accessibility",
      desc: "TWe, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain types of people: Sighted mouse-users, who have good fine motor skills and are good at using computers.",
      profile: author,
      author: "Julia Walker",
      date: "Oct 25, 2021",
      time: "7 min",
    },
    {
      id: 7,
      img: blog7,
      title: "Building a Restful CRUD API with Node JS, Express, and MongoDB",
      label: "Database",
      desc: "Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a messenger that sends your request to the provider and then returns the response to you.",
      profile: author,
      author: " Julia Walker",
      date: "Oct 15, 2021",
      time: "5 min",
    },
    {
      id: 8,
      img: blog8,
      title: "Monitoring Performance with the PageSpeed Insights API",
      label: "Web Performance",
      desc: "The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from the Chrome User Experience Report (CrUX).",
      profile: author,
      author: "Julia Walker",
      date: "Oct 3, 2021",
      time: "5 min",
    },
    {
      id: 9,
      img: blog9,
      title: "The best web accessibility tools for developers in 2021",
      label: "Accessibility",
      desc: "The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies, and of late the tooling for accessibility is no exception.",
      profile: author,
      author: "Julia Walker",
      date: "Sep 13, 2021",
      time: "7 min",
    },
    {
      id: 10,
      img: blog10,
      title: "How to connect a React frontend with a NodeJS/Express backend",
      label: "Database",
      desc: "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.",
      profile: author,
      author: "Julia Walker",
      date: "Sep 21, 2021",
      time: "4 min",
    },
  ],
};

export default data;
