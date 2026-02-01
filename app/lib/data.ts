import { Experience, Skill } from "./definitions";

export const skills: Skill[]  = [
    { name: 'JavaScript', level: 100, type: 'language' },
    { name: 'TypeScript', level: 100, type: 'language' },
    { name: 'React', level: 50, type: 'framework' },
    { name: 'Next.js', level: 50, type: 'framework' },
    { name: 'Node.js', level: 80, type: 'runtime' },
    { name: 'Vue.js', level: 95, type: 'framework' },
    { name: 'HTML', level: 100, type: 'language' },
    { name: 'CSS', level: 100, type: 'language' },
    { name: 'Git', level: 90, type: 'tool' },
    { name: 'Docker', level: 50, type: 'tool' },
    { name: 'SQL', level: 70, type: 'language' },
];

export const myExperiences: Experience[] = [
    {
        startDate: new Date("Mar 2014"),
        endDate: new Date("May 2014"),
        position: "Internship",
        company: "Socfin",
        location: "Brussels",
        description: "My task as intern was to develop a Track & Trace application for the University of Ghent. Socfin was also interested in this Technology and decided to work together with the University of Ghent. My task consisted of doing the first few parts of the application and Socfin would finish of the remainder of the application in which they were interested.",
    },
    {
        startDate: new Date("Apr 2014"),
        endDate: new Date("Jun 2014"),
        position: "Programmer",
        company: "Orbit GT",
        location: "Lokeren",
        description: "Develop a CMS from the ground up for managing customers and licenses for 3D mapping software. The CMS was built using AngularJS for the frontend and PHP for the backend. I was responsible for the frontend development and collaborated with the backend team to ensure seamless integration.",
        tags: ["AngularJS", "JavaScript", "CMS", "Web Application"],
    },
    {
        startDate: new Date("Jul 2014"),
        endDate: new Date("Aug 2018"),
        position: "Software Developer",
        company: "Cipal Schaubroeck",
        location: "Nazareth",
        description: "Developed and maintained a webapplication for managing OCMW services. The application was built using Angular for the frontend and Java Spring Boot for the backend and MySQL for the database. I was responsible for both frontend and backend development, ensuring a smooth user experience and efficient data handling.",
        tags: ["Angular", "Java", "Spring Boot", "Web Application", "MySQL"],
    },
    {
        startDate: new Date("Aug 2018"),
        endDate: new Date("Apr 2020"),
        position: "Software Engineer",
        company: "CropDesign (BASF)",
        location: "Nevele",
        description: "Developed internal tools that allowed researchers to quickly spin up applications and services in a cloud environment. My main responsibility was developing the Angular frontend that existed and eventually migrated to Vue.js for better performance and maintainability. I also contributed to many projects for other researchers within the company, helping them to create efficient and user-friendly applications. I also maintained several frontend templates that were used across multiple projects. I also managed libraries that allowed researchers to easily implement authentication in their applications.",
        tags: ["Angular", "Vue.js", "TypeScript", "Cloud", "Authentication", "CI/CD", "Docker"],
    },
    {
        startDate: new Date("May 2020"),
        endDate: undefined,
        position: "Software Developer",
        company: "BASF",
        location: "Ghent",
        description: "My role at BASF involved maintaining a legacy platform built with Vue.js and helping with the migration to a new platform using Backstage.io. I was responsible for developing new features, fixing bugs, and ensuring the overall stability of the platform. Additionally, I collaborated with cross-functional teams to ensure smooth integration and deployment of the new platform.",
        tags: ["React", "Backstage", "Vue.js", "Docker", "CI/CD"],
    }
];