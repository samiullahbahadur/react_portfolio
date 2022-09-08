import React from "react";
import { socialLinks } from "./header/SocialLinks";
import "../stylesheets/contact.css";

const today = new Date();
const date = today.getFullYear();
const Contact = () => (
  <div className="contact-section">
    <h2 className="contact-page-title">Hire Me.</h2>
    <p className="contact-page-description">
      I am open to job opportunities and side projects. Connect with me via
      WhatsApp:
      <span className="contact-page-description-white"> +93787703796 </span>
      or email me
      <span className="contact-page-description-white">
        bahadursamiullah@gmail.com
      </span>
    </p>
    <form action="https://formspree.io/f/mzbwdjrv" method="POST">
      <input
        className="contact-form-input"
        type="text"
        name="Name"
        placeholder="Your Name *"
        maxLength="50"
        required
      />
      <input
        className="contact-form-input"
        type="email"
        name="Email"
        placeholder="Your Email *"
        maxLength="50"
        required
      />
      <input
        className="contact-form-input"
        type="text"
        name="Subject"
        placeholder="Write a Subject *"
        maxLength="50"
        required
      />
      <textarea
        className="contact-form-input"
        name="Message"
        placeholder="Your Message *"
        id=""
        rows="10"
        required
      />
      <button type="submit" className="contact-form-submit-button">
        Submit
      </button>
    </form>
    <div className="footer-social-links">
      <h3 className="footer-icon">
        <span>SamiullahCoding</span>
      </h3>
      <ul className="footer-social-links-container">
        {socialLinks.map((link) => (
          <li key={`link-${link.id}`}>
            <a href={link.link}>
              <link.icon className="social-icon" />
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-license-description">
        Copyright &copy; {date} Samiullah Bahadur
        <br /> All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Contact;
