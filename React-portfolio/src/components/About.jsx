import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text">
          <h2>The Protocol</h2>
          <p>
            I design and build clean, functional interfaces with a focus on
            structure and usability. 
          </p>
          <p>
            Bridging the gap between engineering discipline and visual
            aesthetics.
          </p>
        </div>
        <div className="skills-list">
          <span className="skill-tag">01_CORE: HTML5 / CSS3 / JAVASCRIPT ES6+</span>
          <span className="skill-tag">02_FRAMEWORKS: REACT.JS / TAILWIND CSS</span>
          <span className="skill-tag">03_DESIGN: FIGMA / UI_UX</span>
          <span className="skill-tag">04_TOOLS: GIT / GITHUB / VS_CODE</span>
        </div>
      </div>
    </section>
  );
};

export default About;
