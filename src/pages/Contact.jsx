/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section id="contact" className=" full-height py-8 pl-4">
      <h1 className='contact text-center text-3xl lg:text-6xl  font-semibold md:text-[25px] font-playfair pb-14 '>Contact</h1>
      <div className="mx-auto flex  flex-col gap-4">
        <div className=" group">
          <a
            aria-label="Call Ranjana"
            href="tel:+919667188563"
            className="icon-container bg-teal-700 py-3.5 px-4 rounded-full group-hover:bg-teal-800 transition duration-300 hover:rounded-none"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl group-hover:rotate" />
          </a>
          <a aria-label="Call Ranjana" href="tel:+919667188563" className="ml-4 hover:underline">
            +91 9667188563
          </a>
        </div>
        <div className=" group">
          <a
            aria-label="Email Ranjana"
            href="mailto:yranjana757@gmail.com"
            className="icon-container bg-teal-700 py-3.5 px-4 rounded-full group-hover:bg-teal-800 transition duration-300 hover:rounded-none"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </a>
          <a aria-label="Email Ranjana" href="mailto:yranjana757@gmail.com" className="ml-4 hover:underline">
            yranjana757@gmail.com
          </a>
        </div>
        <div className="group">
          <a
            aria-label="View Ranjana on GitHub"
            href="https://github.com/Ranjana993"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container bg-teal-700 py-3.5 px-4 rounded-full group-hover:bg-teal-800 transition duration-300 hover:rounded-none"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
          <a
            aria-label="Ranjana on Github"
            href="https://github.com/Ranjana993"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            github.com/Ranjana993
          </a>
        </div>
        <div className="group">
          <a
            aria-label="View Ranjana on LinkedIn"
            href="https://www.linkedin.com/in/kumari-ranjana-yadav-a157311a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container bg-teal-700 py-3.5 px-4 rounded-full group-hover:bg-teal-800 transition duration-300 hover:rounded-none"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a
            aria-label="Ranjana on LinkedIn"
            href="https://www.linkedin.com/in/kumari-ranjana-yadav-a157311a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            linkedin.com/in/kumari-ranjana-yadav-a157311a7/
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
