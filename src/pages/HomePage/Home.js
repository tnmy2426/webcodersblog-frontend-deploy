import React from "react";
import "./Home.scss";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <header className='HomePage'>
      <div className='hero'>
        <h1 className='hero_text'>
          Hi, I'm <span>Abdullah Al Nahdi.</span>
        </h1>
        <h2>
          Web Application Developer <span>(Full-Stack)</span>
        </h2>
        <p>React | Python | Django</p>
      </div>
      <div className='social_icons'>
        <a href='https://www.facebook.com/xdxtnmy/' className='icon'>
          <FaFacebookF />
        </a>
        <a href='https://twitter.com/tnmy2426' className='icon'>
          <FaTwitter />
        </a>
        <a
          href='https://www.linkedin.com/in/abdullah-al-nahdi-335a1a12a/'
          className='icon'
        >
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/tnmy2426' className='icon'>
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Home;
