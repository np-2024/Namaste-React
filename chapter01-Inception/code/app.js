// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
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
