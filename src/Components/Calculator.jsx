import React, { useState } from 'react'

const Calculator = () => {
    const [ unit, setUnit ] = useState("C");
    const [ tempConverted, setTempConverted ] = useState(null);
    const [ tempToConvert, setTempToConvert ] = useState(null);
    
    const cToF = (celsius) => {
        return celsius * 9 / 5 + 32;
    }

    const fToC = (fahrenheit) => {
        return (fahrenheit- 32) * 5 / 9;
    }

    const handleChangeInput = (e) => {
        const temp = e.target.value;
        setTempToConvert(temp);
        if (unit === "C") {
            return setTempConverted(cToF(temp));
        }
        return setTempConverted(fToC(temp));
    }

    const clickChangeUnit = () => {
        if (unit === "C") {
            setUnit("F");
            return setTempConverted(fToC(tempToConvert));
        }
        setUnit("C");
        return setTempConverted(cToF(tempToConvert));
        
    }

    return (
        <div>
            <div className="input-temp">
                <input 
                placeholder="Type your temperature" 
                name="temperature"
                onChange = { e => handleChangeInput(e)}
                />
                <label for="temperature">°{unit}</label>
            </div>
            <button onClick={e => clickChangeUnit(e)}>Change Unit</button>
            <div>
                <p>{tempConverted} {unit === "C" ? "°F" : "°C"}</p>
            </div>
        </div>
    )
}

export default Calculator
