import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
//JSX ==> HTML like syntax in JS
// Browser do not understand JSX

//React Element

const jsx = <h1 id="heading">I am JSX Heading</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsx)

//React Component
//Class-based components -> ancient
//Functional components -> new

//Functional component -> normal JS function which returns some JSX
//Always written in capital case

const Title = () => <h1>Namaste React Functional Component</h1>

const text = "React is cool"

const HeadingComponent = () => {
    return <div className="container">
        <Title />
        {text}
    </div>
}

root.render(<HeadingComponent />)   //this is how to render react component inside root. babel understands only in this manner