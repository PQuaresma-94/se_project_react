//Add files that need to be imported
import "./Header.css";


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <img src="/images/Logo.svg" alt="Logo"/> 
                    <div>Date and Location</div>
                </div>
                <div className="header__avatar-logo">
                    <div>
                        <button type="text">+ Add Clothes</button>
                    </div>
                    <div>Terrence Tegegne</div>
                    <img src="/images/Avatar.svg" alt="Avatar"/>
                </div>
            </header>
        </div>
    );
};

export default Header