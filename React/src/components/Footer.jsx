import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio.js';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand footer-brand" to="/">
              <span className="brand-mark">VPS</span>
              <span>{profile.name}<span className="brand-period">.</span></span>
            </Link>
            <p>{profile.role}</p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            {quickLinks.map(({ label, to }) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </div>
          <div className="footer-column">
            <h2>Get in touch</h2>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="footer-column">
            <h2>Elsewhere</h2>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>{profile.role}</span>
        </div>
      </div>
    </footer>
  );
}
