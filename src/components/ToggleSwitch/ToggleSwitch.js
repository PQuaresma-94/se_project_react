import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({isOn, handleToggle}) => {
  return (
    <div className="toggle-switch">
      <label
        className="toggle-switch__label"
        htmlFor={`react-switch-new`}
      >
        <input
            checked={isOn}
            onChange={handleToggle}
            className="toggle-switch__checkbox"
            id={`react-switch-new`}
            type="checkbox"
            name="toggle-switch-checkbox"
        />
        <span className={`toggle-switch__button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;