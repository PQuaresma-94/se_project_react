import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({temperatureUnit, handleToggle}) => {
  return (
    <div className="toggle-switch">
      <label
        className="toggle-switch__label"
        htmlFor={`react-switch-new`}
      >
        <input
            checked={temperatureUnit}
            onChange={handleToggle}
            className="toggle-switch__checkbox"
            type="checkbox"
            name="toggle-switch-checkbox"
        />
        <span className={temperatureUnit === "F" ? "toggle-switch__slider toggle-switch__slider-F" : "toggle-switch__slider toggle-switch__slider-C" } />
        <p className={`switch__temp-F ${temperatureUnit === "F" && "switch__active"}`}>F</p>
        <p className={`switch__temp-C ${temperatureUnit === "C" && "switch__active"}`}>C</p>
      </label>
    </div>
  );
};

export default ToggleSwitch;