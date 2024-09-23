// src/Contact.js
import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ email, linkedin }) => {
    return (
        <section className="contact">
            <h2>Contact Information</h2>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
        </section>
    );
};

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
};

export default Contact;
