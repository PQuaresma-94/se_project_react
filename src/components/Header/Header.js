import LogoImage from '../../images/Logo.svg';
import AvatarImage from '../../images/Avatar.svg';
import "./Header.css";


const Header = ({ date, location, onCreateModal}) => {
    return (
            <header className="header">
                <div className="logo header__logo">
                    <img className="logo__image" src={LogoImage} alt="Logo"/> 
                    <div className="logo__text">{date}, {location}</div>
                </div>
                <div className="profile header__profile-logo">
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