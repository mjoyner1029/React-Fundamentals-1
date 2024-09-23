// src/About.js
import React from 'react';
import PropTypes from 'prop-types';

const About = ({ title, description }) => {
    return (
        <section className="about">
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

About.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default About;
