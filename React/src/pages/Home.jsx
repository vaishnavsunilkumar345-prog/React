import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../profile.jpg';
import { profile, projects, skills } from '../data/portfolio.js';

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {profile.role}</p>
            <h1>Hey, I&apos;m {profile.name}<span className="accent-text">.</span><br />I build things<br />for the <span className="serif-text">web.</span></h1>
            <p className="hero-description">{profile.bio}</p>
            <div className="button-row">
              <a className="button button-dark" href="#projects">
                View my work <ArrowIcon />
              </a>
              <Link className="button button-outline" to="/contact">Contact me</Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-line" />
              <span>Engineering student · Building for the web and beyond</span>
            </div>
          </div>
          <div className="hero-art">
            <img className="profile-photo" src={profileImage} alt={profile.name} />
          </div>
        </div>
      </section>

      <section className="skills-strip" aria-labelledby="skills-heading">
        <div className="container skills-inner">
          <p className="eyebrow" id="skills-heading">A few things I work with</p>
          <div className="skill-list">
            {skills.map((skill) => <Link className="skill-pill" key={skill} to="/about#toolkit">{skill}</Link>)}
          </div>
          <Link className="text-link" to="/about">More about my skills <ArrowIcon /></Link>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>A few things I&apos;ve <span className="serif-text">made.</span></h2>
            </div>
            <p className="section-intro">Projects built with backend logic, desktop interfaces, and a focus on solving real problems.</p>
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
          <div className="projects-note">
            <p>Have something interesting in mind?</p>
            <Link className="text-link" to="/contact">Let&apos;s make it happen <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
