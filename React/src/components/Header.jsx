import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/portfolio.js';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label={`${profile.name} home`} onClick={closeMenu}>
          <span className="brand-mark">VPS</span>
          <span>{profile.name}<span className="brand-period">.</span></span>
        </NavLink>
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
