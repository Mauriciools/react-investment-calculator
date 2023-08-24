import React from "react";

import "./SingleInput.css";

function SingleInput(props) {
    return (
        <div className="single-input">
            <label>{props.label.toUpperCase()}</label>
            <input type="number" value={props.value} onChange={(event) => props.onInputChange(props.id, event.target.value)} ></input>
        </div>
    );
};

export default SingleInput;
