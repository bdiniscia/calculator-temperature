import React, { useState } from 'react';
import reverse from '../img/reverse.png';

const Calculator = () => {
    const [ unit, setUnit ] = useState("C");
    const [ tempConverted, setTempConverted ] = useState(null);
    const [ tempToConvert, setTempToConvert ] = useState(null);
    const [ notANumber, setNotANumber ] = useState(false);
    
    // Formula to process the conversion 
    const formula = (temp, unit) => {
        let temperature = sanitize(temp);
        // If is NaN show the flag and get out of the function
        if (Number.isNaN(temperature)) {
            return setNotANumber(true);
        }
        // Apply the correct formula
        if(unit === 'C') {
            temperature = temperature * 9 / 5 + 32
        } else if (unit === 'F') {
            temperature = (temperature - 32) * 5 / 9;
        }
        // Check if it's a and integer,  if not show just 1 decimal place
        if (Number.isInteger(temperature)) {
            return temperature;
        }
        return temperature.toFixed(1);
    }

    const sanitize = (input) => {
        // For people who use , instead of . for decimals
        const str = input.replace(',','.');
        // Avoid the process of Falsies and spaces
        if ((!str && str !== '0') || str.includes(' ')) {
            return NaN;
        }
        return Number(str);
    }

    // Handle the change in the input
    const handleChangeInput = (e) => {
        setNotANumber(false);
        setTempToConvert(e.target.value);
        return setTempConverted(formula(e.target.value, unit));
    }

    // Handle the change of units
    const clickChangeUnit = () => {
        if (unit === "C") {
            setUnit("F");
            return setTempConverted(formula(tempToConvert, "F"));
        }
        setUnit("C");
        return setTempConverted(formula(tempToConvert, "C"));
    }

    return (
        <div className="calculator">
            <div className="data-entry">
                <div>
                    <input 
                    className="input-temperature"
                    placeholder="Type your temperature" 
                    name="temperature"
                    onChange = { e => handleChangeInput(e)}
                    />
                    <label className="units" for="temperature"> °{unit}</label>
                </div>
                {notANumber && <span className="not-a-number">Please introduce a valid number</span>}
            </div>
            <img src={reverse} alt="Change units" onClick={e => clickChangeUnit(e)} className="reverse-btn"/>
            <div className="result">
                <div className="result-number">
                    <span>{tempConverted}</span>
                </div>
                <span className="units">{unit === "C" ? "°F" : "°C"}</span>
            </div>
        </div>
    )
}

export default Calculator
