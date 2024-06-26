"use client";
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const infoItems = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+12) 345 67890'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'email@email.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Location',
        description: 'Ukraine, Kyiv'
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: .4,
                    ease: "easeInOut"
                }
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:w-[60%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>
                                Let`s work together
                            </h3>
                            <p className='text-white/60'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Odit dignissimos cum dolor at modi eius animi molestias
                                necessitatibus neque harum.
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="text" name="firstname" placeholder="Firstname" />
                                <Input type="text" name="lastname" placeholder="Lastname" />
                                <Input type="email" name="email" placeholder="Email address" />
                                <Input type="text" name="phone" placeholder="Phone number" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a service
                                        </SelectLabel>
                                        <SelectItem value="est">Web Developer</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Frontend Developer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" placeholder="Type Your Message" />
                            <Button size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none
                        mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {infoItems.map((item, index) => (
                                <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                                        text-accent rounded-md flex items-center justify-center'>
                                        <div className='text-[28px]'>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60'>
                                            {item.title}
                                        </p>
                                        <h3 className='text-xl'>
                                            {item.description}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
