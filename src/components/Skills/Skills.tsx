import React from 'react';
import Title from '../ui/title/Title';
import './Skills.css';

const Skills: React.FC = () => {
    return (
        <section id="skills" className='skills-container'>
            <div className="container">
                <Title title='Skills' />
                <div className="logo-marquee">
                    <div className="logo-track">
                        <img src="/icons/nodejs.gif" alt="NodeJS Logo" />
                        <img src="/icons/react.gif" alt="ReactJS Logo" />
                        <img src="/icons/nextjs.png" alt="NextJS Logo" />
                        <img src="/icons/python.gif" alt="Python Logo" />
                        <img src="/icons/github.gif" alt="GitHub Logo" />
                        <img src="/icons/docker.gif" alt="Docker Logo" />
                        <img src="/icons/azure.png" alt="Azure Logo" />
                        <img src="/icons/ms-power-platform.webp" alt="PA Logo" />
                        <img src="/icons/postgres.png" alt="PG Logo" />
                        <img src="/icons/mysql.png" alt="MySQL Logo" />
                        <img src="/icons/mongo.gif" alt="Mongo Logo" />
                        <img src="/icons/vba.gif" alt="VBA Logo" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;