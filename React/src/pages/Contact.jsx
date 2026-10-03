import React, { useState } from 'react';
import { profile } from '../data/portfolio.js';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const fieldLabels = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone number',
  subject: 'Subject',
  message: 'Message',
};

function validate(values) {
  const errors = {};
  Object.entries(fieldLabels).forEach(([field, label]) => {
    if (!values[field].trim()) errors[field] = `${label} is required.`;
  });

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  const digits = values.phone.replace(/\D/g, '');
  if (values.phone.trim() && (!/^[+\d\s().-]+$/.test(values.phone.trim()) || digits.length < 7 || digits.length > 15)) {
    errors.phone = 'Enter a valid phone number (7–15 digits).';
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(false);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  function fieldProps(name) {
    return {
      id: name,
      name,
      value: values[name],
      onChange: handleChange,
      'aria-invalid': Boolean(errors[name]),
      'aria-describedby': errors[name] ? `${name}-error` : undefined,
    };
  }

  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">{profile.role}</p>
          <h1>Let&apos;s make<br />something <span className="serif-text">matter.</span></h1>
          <p className="page-lead">
            I&apos;m {profile.name}, a second-year engineering student passionate about building clean,
            responsive web applications and smart software projects. Get in touch to say hello.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <p className="eyebrow">Contact details</p>
            <h2>Good things start with a <span className="serif-text">conversation.</span></h2>
            <div className="contact-detail">
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-detail">
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">github.com/vaishnavsunilkumar345-prog ↗</a>
            </div>
            <div className="contact-detail">
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/vaishnav-ps ↗</a>
            </div>
          </aside>
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your name <span>*</span></label>
                  <input {...fieldProps('name')} autoComplete="name" placeholder="Your name" />
                  {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address <span>*</span></label>
                  <input {...fieldProps('email')} type="email" autoComplete="email" placeholder="you@example.com" />
                  {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone number <span>*</span></label>
                  <input {...fieldProps('phone')} type="tel" autoComplete="tel" placeholder="+1 (555) 123-4567" />
                  {errors.phone && <p className="field-error" id="phone-error">{errors.phone}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input {...fieldProps('subject')} placeholder="Project inquiry" />
                  {errors.subject && <p className="field-error" id="subject-error">{errors.subject}</p>}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Your message <span>*</span></label>
                <textarea {...fieldProps('message')} rows="5" placeholder="A little about what you have in mind..." />
                {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
              </div>
              <p className="required-note"><span>*</span> Required fields</p>
              {submitted && (
                <p className="form-success" role="status">
                  Thanks for reaching out! Your message is ready, and I&apos;ll be in touch soon.
                </p>
              )}
              <button className="button button-dark submit-button" type="submit">
                Send your message <span aria-hidden="true">↗</span>
              </button>
              <p className="form-note">This demo form shows a confirmation but does not send or store your details.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
