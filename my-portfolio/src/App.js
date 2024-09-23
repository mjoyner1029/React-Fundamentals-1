// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header 
                name="Your Name or Fictional Character" 
                backgroundImage="path_to_your_image.jpg" // Replace with actual image URL
            />
            <About 
                title="About Me"
                description="This is a brief description about yourself or a fictional character. I am passionate about coding, design, and bringing ideas to life through technology."
            />
            <Contact 
                email="example@example.com" 
                linkedin="https://www.linkedin.com/in/example"
            />
        </div>
    );
};

export default App;
