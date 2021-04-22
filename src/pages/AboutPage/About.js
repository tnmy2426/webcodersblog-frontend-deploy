import React from "react";
import "./About.scss";
import WebDesign from "../../img/frontend.png";
import WebDevelopment from "../../img/backend.png";
import APIDevelopment from "../../img/api.png";

//Components
import Title from "../../components/PageTitle/Title";
import PersonalBio from "../../components/PersonalBio/PersonalBio";
import Service from "../../components/Service/Service";
import Skill from "../../components/Skill/Skill";

const About = () => {
  return (
    <section className='AboutPage'>
      <Title pageTitle='About Me' />
      <PersonalBio />
      <Title pageTitle='My Skills' />
      <div className='skillsSection'>
        <Skill skillTitle='Python' skillProgress='75%' width='75%' />
        <Skill skillTitle='Django' skillProgress='80%' width='80%' />
        <Skill skillTitle='JavaScript' skillProgress='50%' width='50%' />
        <Skill skillTitle='React JS' skillProgress='70%' width='70%' />
        <Skill skillTitle='HTML5' skillProgress='99%' width='99%' />
        <Skill skillTitle='CSS3' skillProgress='85%' width='85%' />
        <Skill skillTitle='SASS/SCSS' skillProgress='80%' width='80%' />
        <Skill skillTitle='JQuery' skillProgress='60%' width='60%' />
      </div>
      <Title pageTitle='Services' />
      <div className='serviceSection'>
        <Service
          serviceIcon={WebDesign}
          serviceIconName='Designig Icon'
          serviceTitle='Front-end Development'
          serviceText='Front-end Development using React JS and pure HTML, CSS & SASS / SCSS'
        />

        <Service
          serviceIcon={WebDevelopment}
          serviceIconName='Development Icon'
          serviceTitle='Backend Development'
          serviceText='Backend Development using Python & Django'
        />

        <Service
          serviceIcon={APIDevelopment}
          serviceIconName='API Icon'
          serviceTitle='API Development'
          serviceText='API Development using Python & Django-Rest-Framework'
        />
      </div>
      <div className='serviceDetails'>
        <h2>I can Provide.</h2>
        <div className='details'>
          <div className='left_section'>
            <h3> Front-End Development:</h3>
            <p> - PSD / Sketch / Figma / AdobeXD to React Convert.</p>
            <p> - PSD / Sketch / Figma / AdobeXD to HTML Convert.</p>
            <p> - Pixel-perfect CSS design and complete Responsive.</p>
            <p> - I can deliver an elegant and user-friendly website. </p>
            <p> - Redesign & Rewrite code as needed. </p>
          </div>
          <div className='right_section'>
            <h3>Backend Development:</h3>
            <p> - Dynamic Web application Building.</p>
            <p> - API building with Django_Rest_Framework.</p>
            <p> - MySQL / PostgreSQL connections.</p>
            <p> - CRUD operations with Django /</p>
            <p> - Reconfiguration & Rewrite code as needed. </p>
          </div>
        </div>
      </div>
      <div className='serviceDetailseMore'>
        <h2>My Speciality.</h2>
        <div className='speciality_content'>
          <p> Clean and Understandable code.</p>
          <p> Hand-coded, W3C valid and well organized / commented code.</p>
          <p> SEO friendly, table-less markup and load speed optimization.</p>
          <p> Testing and cross browser / cross device compatibility. </p>
        </div>
      </div>
    </section>
  );
};

export default About;
