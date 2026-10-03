import React from 'react';
import { Link } from 'react-router-dom';
import { profile, projects, skills } from '../data/portfolio.js';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">A little context</p>
          <h1>Curious by nature.<br /><span className="serif-text">Developer</span> by choice.</h1>
          <p className="page-lead">
            I&apos;m {profile.name}, a {profile.role.toLowerCase()} passionate about building clean,
            responsive web applications and smart software projects.
          </p>
        </div>
      </section>

      <section className="section about-intro-section">
        <div className="container about-intro-grid">
          <div className="about-aside">
            <span className="about-initials">VPS</span>
            <p>Frontend developer.<br />Engineering student.</p>
          </div>
          <div className="about-prose">
            <p className="eyebrow">The short version</p>
            <h2>Good work happens when <span className="serif-text">care meets craft.</span></h2>
            <p>
              {profile.bio}
            </p>
            <p>
              I enjoy working with modern frontend tools, building practical applications, and
              exploring how software can connect with embedded systems and IoT.
            </p>
            <Link className="text-link" to="/contact">Tell me what you&apos;re working on <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container two-column-section">
          <div className="section-label">
            <p className="eyebrow">01 / Education</p>
            <h2>Learning is<br /><span className="serif-text">never finished.</span></h2>
          </div>
          <article className="education-card">
            <span className="education-year">Second Year</span>
            <h3>B.Tech in Engineering</h3>
            <p className="education-school">Currently pursuing</p>
            <p>Building a strong foundation in engineering, software development, and technology.</p>
          </article>
        </div>
      </section>

      <section className="section" id="toolkit">
        <div className="container two-column-section skills-section">
          <div className="section-label">
            <p className="eyebrow">02 / Toolkit</p>
            <h2>The tools behind<br /><span className="serif-text">the pixels.</span></h2>
            <p className="section-intro">Technologies I use to build web applications, software, and connected devices.</p>
          </div>
          <div className="skill-groups">
            <div className="skill-list">
              {skills.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading timeline-heading">
            <div>
              <p className="eyebrow">03 / Projects</p>
              <h2>Things I&apos;ve <span className="serif-text">built.</span></h2>
            </div>
            <p className="section-intro">A couple of projects where I put my software and engineering skills to work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <span className="project-number">{project.number} / 02</span>
                  <span className="project-monogram">{project.monogram}</span>
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container lower-about-grid">
          <div>
            <p className="eyebrow">04 / Interests</p>
            <h2>What I&apos;m <span className="serif-text">learning.</span></h2>
            <ul className="simple-list">
              <li><span>01</span> Frontend development</li>
              <li><span>02</span> Backend application logic</li>
              <li><span>03</span> Embedded systems and IoT</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">05 / Looking ahead</p>
            <h2>Always room to <span className="serif-text">grow.</span></h2>
            <p className="goal-copy">
              My goals are to build scalable web applications, master modern JavaScript frameworks,
              and explore embedded systems and IoT.
            </p>
            <Link className="text-link" to="/contact">Let&apos;s connect <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
