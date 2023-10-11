// About.tsx

import React from 'react';
import '../dist/css/main.css';
import '../dist/css/about.css';
import '../dist/js/interface.js';

const About = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About - EasySolve.AI</title>
                <meta name="theme-color" content="#fafafa" />
            </head>
            <body>
            <header>
                <h1>EasySolve.AI</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
                <button id="theme-toggle">Dark Mode</button>
            </header>

            <main>
                <h2>About EasySolve.AI</h2>
                <p>
                    EasySolve.AI is an advanced calculator designed to automatically solve physics problems. Built by a team of
                    dedicated undergraduates at WPI, our goal is to simplify complex physics calculations for students and
                    professionals alike.
                </p>

                <h3>Features</h3>
                <ul>
                    <li>Automatic physics problem-solving based on available information.</li>
                    <li>Support for special characters (e.g., \(\omega\)).</li>
                    <li>Real-time processing as users type their inputs.</li>
                </ul>

                <h3>Contact Us</h3>
                <p>If you have any questions or feedback, please contact us at
                    <a href="mailto:contact@easysolve.ai">contact@easysolve.ai</a>.
                </p>
            </main>

            <footer>
                <p>© 2023 EasySolve.AI. All rights reserved.</p>
            </footer>
            </body>
        </>
    );
};

export default About;
