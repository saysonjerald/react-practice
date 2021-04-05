import React from 'react';

//options on how to add CSS

//SASS
import "./styles/App.scss";

//Modulized CSS
import s from "./styles/App.module.css";

const TestComponent = () => {
    return (
        <div className="test">
            <h2>Hello there!</h2>
            <p className={s.blue}>This is me, from the component</p>
        </div>
    );
}

export default TestComponent;