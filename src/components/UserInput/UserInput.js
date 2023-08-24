import React, { useState } from "react";

import SingleInput from "./SingleInput";
import "./UserInput.css";

const emptyInputs = {
    current_savings: 0,
    yearly_savings: 0,
    expected_interest: 0,
    investment_duration: 0
};

function UserInput(props) {
    const [inputValue, setInputValue] = useState(emptyInputs);

    const submitHandler = (event) => {
        event.preventDefault();

        console.log('Submit ;)');
    };

    const resetHandler = (event) => {
        setInputValue(emptyInputs);
    };

    const inputChangeHandler = (input, value) => {
        setInputValue((prevState) => {
            return {
                ...prevState,
                [input]: +value
            };
        });
    };

    return (
        <div className="user-input">
            <form onSubmit={submitHandler}>
                <SingleInput value={inputValue["current_savings"]} id="current_savings" label="Current Savings ($)" onInputChange={inputChangeHandler} />
                <SingleInput value={inputValue["yearly_savings"]} id="yearly_savings" label="Yearly Savings ($)" onInputChange={inputChangeHandler} />
                <SingleInput value={inputValue["expected_interest"]} id="expected_interest" label="Expected Interest (%, per year)" onInputChange={inputChangeHandler} />
                <SingleInput value={inputValue["investment_duration"]} id="investment_duration" label="Investment Duration (year)" onInputChange={inputChangeHandler} />

                <button className="reset-button" type="reset" onClick={resetHandler}>Reset</button>
                <button className="calculate-button" type="submit">Calculate</button>
            </form>
        </div>
    );
};

export default UserInput;
