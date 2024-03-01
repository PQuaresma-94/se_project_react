import { Link } from 'react-router-dom';
import LogoImage from '../../images/Logo.svg';
import AvatarImage from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import "./Header.css";




const Header = ({ date, location, onCreateModal, isLoggedIn, onRegisterModal, onLoginModal }) => {
    

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
                            <button className="header__add-button" type="text" onClick={onCreateModal}>+ Add clothes</button>
                        </div>
                        <Link to="/profile" className="header__profile-link">
                            <div className="header__profile-name">Terrence Tegegne</div>
                        </Link>
                        <img className="header__profile-avatar" src={AvatarImage} alt="Avatar"/>
                    </>
                    ) : (
                    <>
                        <div>
                            <button className="header__add-button" type="text" onClick={onRegisterModal}>Sign Up</button>
                        </div>
                        <div>
                            <button className="header__add-button" type="text" onClick={onLoginModal}>Log In</button>
                        </div>
                    </>
                    )}
                </div>
            </header>
    );
};

export default Header