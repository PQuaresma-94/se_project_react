//Add files that need to be imported
import "./Header.css";


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="logo header__logo">
                    <img className="logo__image" src="/images/Logo.svg" alt="Logo"/> 
                    <div className="logo__text">Date, Location</div>
                </div>
                <div className="profile header__profile-logo">
                    <div>
                        <button className="profile__add-button" type="text">+ Add clothes</button>
                    </div>
                    <div className="profile__name">Terrence Tegegne</div>
                    <img className="profile__avatar" src="/images/Avatar.svg" alt="Avatar"/>
                </div>
            </header>
        </div>
    );
};

export default Header