import React from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialIcons = [
    {
        icon: <FaGithub />,
        path: "/"
    },
    {
        icon: <FaLinkedinIn />,
        path: "/"
    },
    {
        icon: <FaYoutube />,
        path: "/"
    },
    {
        icon: <FaTwitter />,
        path: "/"
    }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socialIcons.map((item, index) => (
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
}

export default Socials;
