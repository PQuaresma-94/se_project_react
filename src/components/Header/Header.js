import LogoImage from '../../images/Logo.svg';
import AvatarImage from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import "./Header.css";
import { useState } from 'react';


const Header = ({ date, location, onCreateModal}) => {
    const [temperatureUnit, handleToggleSwitchChange] = useState("C");

    const handleChange = (e) => {
        if( temperatureUnit === "C" ) handleToggleSwitchChange("F");
        if( temperatureUnit === "F" ) handleToggleSwitchChange("C");
        console.log('Toggled! New value:', temperatureUnit);
      };

    return (
            <header className="header">
                <div className="logo header__logo">
                    <img className="logo__image" src={LogoImage} alt="Logo"/> 
                    <div className="logo__text">{date}, {location}</div>
                </div>
                <div className="profile header__profile-logo">
                    <ToggleSwitch 
                        temperatureUnit={temperatureUnit}
                        handleToggle={handleChange}
                    />
                    <div>
                        <button className="profile__add-button" type="text" onClick={onCreateModal}>+ Add clothes</button>
                    </div>
                    <p className="profile__name">Terrence Tegegne</p>
                    <img className="profile__avatar" src={AvatarImage} alt="Avatar"/>
                </div>
            </header>
    );
};

export default Header