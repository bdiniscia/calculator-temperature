import React from 'react';
import PropTypes from 'prop-types';

const Input = ({placeholder, unit}) => {
    return (
        <div className="input-temp">
            <input placeholder={placeholder} name="temperature"/>
            <label for="temperature">°{unit}</label>
        </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
}

export default Input
