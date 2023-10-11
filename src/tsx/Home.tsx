// Home.tsx

import React from 'react';
import '../dist/css/normalize.css';
import '../dist/css/main.css';
import '../dist/css/calculator.css';
import '../dist/js/vendor/modernizr-3.11.2.min.js';
import '../dist/js/plugins.js';
import '../dist/js/main.js';
import '../dist/js/interface.js';

const Home = () => {
    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <title>EasySolve.AI Calculator</title>
                <meta name="description" content="Advanced Calculator by EasySolve.AI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="EasySolve.AI Calculator" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://easysolve.ai" />
                <meta property="og:image" content="icon.png" />
                {/*<link rel="manifest" href="site.webmanifest" />*/}
                <link rel="apple-touch-icon" href="../assets/img/icon.png" />
                <meta name="theme-color" content="#fafafa" />
            </head>
            <body>
            <header>
                <h1>EasySolve.AI</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
                <div id="theme-toggle-container">
                    <button id="theme-toggle">Dark Mode</button>
                </div>
            </header>
            <div className="calculator">
                <label className="visually-hidden" htmlFor="input-box">Input Box</label>
                <label className="visually-hidden" htmlFor="output-box">Output Box</label>
                <div className="editable-div" contentEditable={true} id="input-box"></div>
                <div className="editable-div" contentEditable={false} id="output-box"></div>
            </div>
            </body>
        </>
    );
};

export default Home;
