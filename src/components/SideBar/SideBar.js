import React from 'react';
import AvatarImage from '../../images/Avatar.svg';
import './SideBar.css';

const SideBar = () => {
    return (
    <div className="profile_sidebar">
        <div className="profile__info">
            <img className="profile__avatar" src={AvatarImage} alt="Avatar"/>
            <p className="profile__name">Terrence Tegegne</p>
        </div>
        <div className="profile__buttons">
            <button className="profile__button">Change profile data</button>
            <button className="profile__button">Log out</button>
        </div>
        
    </div>
)}

export default SideBar