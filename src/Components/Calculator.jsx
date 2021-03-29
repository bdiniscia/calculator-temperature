import React, { useState } from 'react';
import reverse from '../img/reverse.png';

const Calculator = () => {
    const [ unit, setUnit ] = useState("C");
    const [ tempConverted, setTempConverted ] = useState(null);
    const [ tempToConvert, setTempToConvert ] = useState(null);
    const [ notANumber, setNotANumber ] = useState(false);
    
    const cToF = (celsius) => {
        const temp = sanitize(celsius);
        if (!temp) {
            return setNotANumber(true);
        }
        return temp * 9 / 5 + 32;
    }

    const fToC = (fahrenheit) => {
        const temp = sanitize(fahrenheit);
        if (!temp) {
            return setNotANumber(true);
        }
        return (temp - 32) * 5 / 9;
    }

    const sanitize = (input) => {
        console.log('input', input);
        const str = input.replace(',','.');
        console.log('str', str);
        return Number(str);
    }

    const handleChangeInput = (e) => {
        setNotANumber(false);
        const temp = e.target.value;
        console.log('temp', temp);
        setTempToConvert(temp);
        if (unit === "C") {
            return setTempConverted(cToF(temp));
        }
        return setTempConverted(fToC(temp));
    }

    const clickChangeUnit = () => {
        console.log('tempToConvert', tempToConvert);
        if (unit === "C") {
            setUnit("F");
            return setTempConverted(fToC(tempToConvert));
        }
        setUnit("C");
        return setTempConverted(cToF(tempToConvert));
        
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
