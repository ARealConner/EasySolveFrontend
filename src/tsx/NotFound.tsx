// NotFound.tsx

import React from 'react';
import '../dist/css/NotFound.css';  // Assuming you moved the CSS to an external file named NotFound.css

const NotFound = () => {
    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Page Not Found</title>
            </head>
            <body>
            <div className="not-found-container">
                <h1>Page Not Found</h1>
                <p>Sorry, but the page you were trying to view does not exist.</p>
            </div>
            </body>
        </>
    );
};

export default NotFound;
