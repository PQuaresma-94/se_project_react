import React from 'react';
import './ToggleSwitch.css';
import { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
  const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
            checked={currentTemperatureUnit}
            onChange={handleToggleSwitchChange}
            className="toggle-switch__checkbox"
            type="checkbox"
            name="toggle-switch-checkbox"
        />
        <span className={currentTemperatureUnit === "F" ? "toggle-switch__slider toggle-switch__slider-F" : "toggle-switch__slider toggle-switch__slider-C" } />
        <p className={`switch__temp-F ${currentTemperatureUnit === "F" && "switch__active"}`}>F</p>
        <p className={`switch__temp-C ${currentTemperatureUnit === "C" && "switch__active"}`}>C</p>
      </label>
    </div>
  );
};

export default ToggleSwitch;