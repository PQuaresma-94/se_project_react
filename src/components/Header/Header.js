import { Link } from 'react-router-dom';
import { useContext } from "react";
import LogoImage from '../../images/Logo.svg';
import AvatarImage from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import "./Header.css";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';




const Header = ({ date, location, onCreateModal, isLoggedIn, onRegisterModal, onLoginModal }) => {
    
    const {currentUser} = useContext(CurrentUserContext);
    return (
            <header className="header">
                <div className="logo header__logo">
                    <Link to="/" className="logo__link">
                        <img className="logo__image" src={LogoImage} alt="Logo"/> 
                    </Link>
                    <div className="logo__text">{date}, {location}</div>
                </div>
                <div className="header__profile-logo">
                    <ToggleSwitch/>
                    {isLoggedIn ? (
                    <>
                        <div>
                            <button className="header__button" type="text" onClick={onCreateModal}>+ Add clothes</button>
                        </div>
                        <Link to="/profile" className="header__profile-link">
                            <div className="header__profile-name">{currentUser.name}</div>
                        </Link>
                        <img className="header__profile-avatar" src={currentUser.avatar} alt="Avatar"/>
                    </>
                    ) : (
                    <>
                        <div>
                            <button className="header__button" type="text" onClick={onRegisterModal}>Sign Up</button>
                        </div>
                        <div>
                            <button className="header__button" type="text" onClick={onLoginModal}>Log In</button>
                        </div>
                    </>
                    )}
                </div>
            </header>
    );
};

export default Header