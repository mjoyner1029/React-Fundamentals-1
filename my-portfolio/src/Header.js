// src/Header.js
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ name, backgroundImage }) => {
    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="header-content">
                <h1>{name}</h1>
            </div>
        </header>
    );
};

Header.propTypes = {
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
};

export default Header;
