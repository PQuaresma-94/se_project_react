import LogoImage from '../../images/Logo.svg';
import AvatarImage from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import "./Header.css";



const Header = ({ date, location, onCreateModal}) => {
    

    return (
            <header className="header">
                <div className="logo header__logo">
                    <img className="logo__image" src={LogoImage} alt="Logo"/> 
                    <div className="logo__text">{date}, {location}</div>
                </div>
                <div className="header__profile-logo">
                    <ToggleSwitch/>
                    <div>
                        <button className="header__add-button" type="text" onClick={onCreateModal}>+ Add clothes</button>
                    </div>
                    <p className="header__profile-name">Terrence Tegegne</p>
                    <img className="header__profile-avatar" src={AvatarImage} alt="Avatar"/>
                </div>
            </header>
    );
};

export default Header