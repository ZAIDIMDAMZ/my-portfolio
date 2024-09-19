

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.css';
import { FaHandSparkles } from 'react-icons/fa';
import { GiRocketThruster } from 'react-icons/gi';
import Title from '../ui/title/Title';

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <Container id="aboutme">
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <Title title='About Me'></Title>
                        <p className="lead">
                            My name is Mohand-Ameziane ZAIDI, and I am a passionate web developer with over 6 years of experience <GiRocketThruster color='red' /> in the field. Born in Béjaïa, Algeria, I built my career through studies in MIAGE (Computer Methods Applied to Business Management), which allowed me to develop a dual expertise: proficiency in web technologies (ReactJS, NodeJS, NextJS) and agile project management.
                        </p>
                        <p>
                            My professional experience includes three years as an apprentice at SFR Business, followed by three years as a full-time developer. These years have taught me to be autonomous, detail-oriented, and to apply a methodical approach to my work.
                        </p>
                        <p>
                            <FaHandSparkles color='yellow' /> Welcome to my website !
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center position-relative">
                        <Image
                            src='/Images/aboutme-img.jpg'
                            alt="Photo de Mohand-Ameziane ZAIDI"
                            fluid
                            className='aboutme-image'
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default AboutMe;
