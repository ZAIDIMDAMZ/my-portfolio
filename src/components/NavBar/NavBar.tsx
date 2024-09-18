import React, { useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'; // Importation du fichier CSS
import { Github, Linkedin } from 'react-bootstrap-icons';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
    const [collapseOpend, setCollapseOpend] = useState(false);

    return (
        <Navbar
            fixed='top'
            expand="lg"
            className="navbar-custom justify-content-center align-items-center"
            variant="dark"
            expanded={collapseOpend}
        >
            <Container className="text-center">
                <Navbar.Brand href="#home">
                    <Image
                        src={'/Images/photo-bezza.jpg'}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Mohand-Ameziane ZAIDI"
                    />
                </Navbar.Brand>
                <Navbar.Text>
                    Mohand Ameziane ZAIDI
                </Navbar.Text>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setCollapseOpend(!collapseOpend)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ScrollLink
                            to="aboutme"
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="nav-link scroll-link"
                            activeClass="active"
                            onClick={() => setCollapseOpend(false)}
                        >
                            About Me
                        </ScrollLink>
                        <ScrollLink
                            to="skills"
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="nav-link scroll-link"
                            activeClass="active"
                            onClick={() => setCollapseOpend(false)}
                        >
                            Skills
                        </ScrollLink>
                        <ScrollLink
                            to="experience"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="nav-link scroll-link"
                            activeClass="active"
                            onClick={() => setCollapseOpend(false)}
                        >
                            Experiences
                        </ScrollLink>
                        <ScrollLink
                            to="studies"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="nav-link scroll-link"
                            activeClass="active"
                            onClick={() => setCollapseOpend(false)}
                        >
                            Studies
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="nav-link scroll-link"
                            activeClass="active"
                            onClick={() => setCollapseOpend(false)}
                        >
                            Contact us
                        </ScrollLink>
                    </Nav>
                    <Navbar.Text>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/mohand-ameziane-zaidi/" target="_blank" rel="noreferrer">
                                <Linkedin />
                            </a> &nbsp;
                            <a href="https://github.com/ZAIDIMDAMZ" target="_blank" rel="noreferrer">
                                <Github />
                            </a>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
