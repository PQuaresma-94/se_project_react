import React from 'react';
import AvatarImage from '../../images/Avatar.svg';
import './SideBar.css';

const SideBar = () => {
    return (
    <div className="profile__info">
        <img className="profile__avatar" src={AvatarImage} alt="Avatar"/>
        <p className="profile__name">Terrence Tegegne</p>
    </div>
)}

export default SideBar