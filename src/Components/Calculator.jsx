import React, { useState, useMemo, useEffect } from 'react';
import reverse from '../img/reverse.png';
import { sanitize } from '../helpers';
import styles from './Calculator.module.css';

const CELSIUS = 'C';
const FAHRENHEIT = 'F';

const Calculator = () => {
    const [ unit, setUnit ] = useState(CELSIUS);
    const [ tempToConvert, setTempToConvert ] = useState(null);
    const [ pristine, setPristine ] = useState(true);

    useEffect(() => {
        if (!pristine) {
            return;
        }
        setPristine(false);
    }, [pristine, tempToConvert]);

    const notANumber = useMemo(() => !pristine && Number.isNaN(sanitize(tempToConvert)), [ pristine, tempToConvert ]);

    const tempConverted = useMemo(() => {
        const temperature = sanitize(tempToConvert);
        // Apply the correct formula
        const convertedTemperature = unit === 'C' ? temperature * 9 / 5 + 32 : (temperature - 32) * 5 / 9;
        if (Number.isNaN(convertedTemperature)) {
            return '';
        }
        // Check if it's a and integer,  if not show just 1 decimal place
        if (Number.isInteger(convertedTemperature)) {
            return convertedTemperature;
        }
        return convertedTemperature.toFixed(1);
    }, [ unit, tempToConvert ]);

    // Handles the change in the input
    const handleChangeInput = (e) => {
        setTempToConvert(e.target.value);
    }

    // Handles the change of units
    const clickChangeUnit = () => {
        setUnit(unit === CELSIUS ? FAHRENHEIT : CELSIUS);
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.dataEntry}>
                <div>
                    <input 
                    className={styles.inputTemperature}
                    placeholder="Type your temperature" 
                    name="temperature"
                    onChange={handleChangeInput}
                    />
                    <label className={styles.units} htmlFor="temperature"> °{unit}</label>
                </div>
                {notANumber && <span className={styles.notANumber}>Please introduce a valid number</span>}
            </div>
            <img src={reverse} alt="Change units" onClick={clickChangeUnit} className={styles.reverseBtn}/>
            <div className={styles.result}>
                <div className={styles.resultNumber}>
                    <span>{tempConverted}</span>
                </div>
                <span className={styles.units}>{unit === CELSIUS ? "°F" : "°C"}</span>
            </div>
        </div>
    )
}

export default Calculator
