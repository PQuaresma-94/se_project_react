import "./Header.css";


const Header = ({ date, location, onCreateModal}) => {
    return (
        <div>
            <header className="header">
                <div className="logo header__logo">
                    <img className="logo__image" src={require("../../images/Logo.svg").default} alt="Logo"/> 
                    <div className="logo__text">{date}, {location}</div>
                </div>
                <div className="profile header__profile-logo">
                    <div>
                        <button className="profile__add-button" type="text" onClick={onCreateModal}>+ Add clothes</button>
                    </div>
                    <div className="profile__name">Terrence Tegegne</div>
                    <img className="profile__avatar" src={require("../../images/Avatar.svg").default} alt="Avatar"/>
                </div>
            </header>
        </div>
    );
};

export default Header