import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Layout from './components/Layout/Layout';
import Presentation from './components/Presentation/Presentation';
import Experiences from './components/Experience/Experience';
import Studies from './components/Studies/Studies';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Layout>
      <Presentation />
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experiences></Experiences>
      <Studies></Studies>
      <ContactUs></ContactUs>
    </Layout>
  );
}

export default App;
