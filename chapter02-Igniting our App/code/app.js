// imported react and reactdom from nodemodule folder, refer notes.md
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        style: {
            background: "orange",
        },
    },
    "heading1"
);
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        style: {
            background: "green",
        },
    },
    "heading2"
);

const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    [heading1, heading2]
);

// Accessing div with root id inside html
const root = ReactDOM.createRoot(document.getElementById("root"));
// Appending parent inside root element
root.render(parent);
