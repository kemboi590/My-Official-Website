import React from "react";
import {RiReactjsLine } from 'react-icons/ri'
import {FaDatabase } from 'react-icons/fa'
import {FaServer } from 'react-icons/fa'
import {SiAdobexd} from 'react-icons/si'

const data = [
    {
        id: 1, icon: <RiReactjsLine />,
        title: 'Fronted Development',
        desc: 'I can create modern and dynamic frontend web applications using HTML, CSS, JavaScript, and ReactJS. My skills allow me to design and develop visually appealing, responsive, and interactive web pages, ranging from simple websites to complex applications. I have experience collaborating with backend developers to create full-stack web applications and can provide value to businesses relying on the web for their operations and growth.'
    },
    {
        id: 2,
        icon: <FaDatabase />,
        title: 'Database Administration', desc: 'I have the ability to administer and manage databases using MySQL and MongoDB. With this skill set, I can design, deploy, and maintain database systems, including creating, optimizing, and troubleshooting databases. I have expertise in working with MySQL, which is a popular open-source relational database management system, and MongoDB, which is a widely-used document-oriented NoSQL database.'
    },
    {
        id: 3,
        icon: <FaServer />,
        title: 'Backend Development',
        desc: 'I have the ability to develop server-side applications using Node.js and Express.js. With this skill set, I can create and deploy web applications that handle server-side logic and interact with databases. I am proficient in creating RESTful APIs, handling HTTP requests, and using middleware to enhance functionality and security.My skill is an asset in many industries, including e-commerce, finance, healthcare, and technology.'
    },
    {
        id: 4,
        icon: <SiAdobexd />,
        title: 'UI/UX Design',
        desc: 'I have a strong skillset in UI/UX design, with expertise in user research, wireframing and prototyping and information architecture. With a focus on user needs and experience, I can conduct effective user research to gather insights and feedback, and create wireframes and prototypes to test and visualize design concepts. I can organize and structure information to make it easily accessible and understandable for users. '
    }
]

export default data;
