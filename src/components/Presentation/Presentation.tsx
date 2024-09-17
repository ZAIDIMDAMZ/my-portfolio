import React from 'react';
import './Presentation.css';
import { TbBrandReact } from "react-icons/tb";
import { GiLaptop } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { Button } from 'react-bootstrap';


const Presentation = () => {
    return <div className='presentation-content'>
        <h3>My portfolio</h3>
        <h1>Mohand-Ameziane ZAIDI</h1>
        <p>Web Developer <GiLaptop color='white' /> ReactJS <TbBrandReact color='#02ffff' />, NodeJS <FaNodeJs color='Green' /> and NextJS <RiNextjsLine color='white' /> </p>
        <a href='/docs/CV-Mohand_Ameziane-ZAIDI.pdf' download="CV-MohandAmezianeZAIDI.pdf">
            <Button className='mx-5 my-5'>Download CV</Button>
        </a>
    </div>;
};

export default Presentation;