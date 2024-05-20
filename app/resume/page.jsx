"use client";
import React from 'react';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
    title: 'About Me',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Fugit omnis deserunt nam vero qui vel odio error.
    `,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jane Smith"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+12) 345 67890"
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ Years"
        },
        {
            fieldName: "Skype",
            fieldValue: "Jane.099"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Ukrainian"
        },
        {
            fieldName: "Email",
            fieldValue: "email@email.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Ukrainian"
        },
    ]
};

const experience = {
    icon: '/assets/images/resume/badge.svg',
    title: 'My Experience',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Fugit omnis deserunt nam vero qui vel odio error.
    `,
    items: [
        {
            company: "Work Inc.",
            position: "Full Stack Developer",
            duration: "2022 - present"
        },
        {
            company: "Work Inc.",
            position: "Frontend Developer",
            duration: "2021 - 2022"
        },
        {
            company: "Work Inc.",
            position: "Web Developer",
            duration: "2019 - 2021"
        },
        {
            company: "Work Inc.",
            position: "Web Developer",
            duration: "2019 - 2021"
        },
        {
            company: "Work Inc.",
            position: "UI/UX Designer",
            duration: "2018 - 2019"
        },
        {
            company: "Work Inc.",
            position: "Web Developer Junior",
            duration: "spring 2018 - summer 2018"
        },
        {
            company: "Work Inc.",
            position: "Software Developer",
            duration: "2017 - spring 2018"
        }
    ]
};

const education = {
    icon: '/assets/images/resume/cap.svg',
    title: 'My Education',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Fugit omnis deserunt nam vero qui vel odio error.
    `,
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Web Development",
            duration: "2018"
        },
        {
            institution: "Codecademy",
            degree: "Frontend Development",
            duration: "2017"
        },
        {
            institution: "Online Course",
            degree: "Web Development",
            duration: "2016"
        },
        {
            institution: "Tech Courses",
            degree: "Programming Learning",
            duration: "2016"
        },
        {
            institution: "UI/UX Design",
            degree: "Code Courses",
            duration: "2015"
        },
        {
            institution: "Web College",
            degree: "Computer Science",
            duration: "2014"
        },
    ]
};

const skills = {
    title: 'My Skills',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Fugit omnis deserunt nam vero qui vel odio error.
    `,
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: 'Css 3'
        },
        {
            icon: <FaJs />,
            name: 'Javascript'
        },
        {
            icon: <FaReact />,
            name: 'React'
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwindcss'
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js'
        },
        {
            icon: <FaFigma />,
            name: 'Figma'
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: .4,
                    ease: 'easeInOut'
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                        gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px] '>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10
                                                rounded-xl flex flex-col justify-center items-center lg:items-start
                                                gap-1'>
                                                <span className='text-accent'>
                                                    {item.duration}
                                                </span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                    {item.position}
                                                </h3>

                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px] '>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10
                                                rounded-xl flex flex-col justify-center items-center lg:items-start
                                                gap-1'>
                                                <span className='text-accent'>
                                                    {item.duration}
                                                </span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                    {item.degree}
                                                </h3>

                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>
                                        {skills.title}
                                    </h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full group h-[150px] bg-[#232329]
                                                        rounded-xl flex items-center justify-center'>
                                                        <div className='text-6xl group-hover:text-accent transition-all
                                                            duration-300'>
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>
                                    {about.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                                    mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li key={index} className='flex items-center justify-center xl:justify-start
                                            gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
