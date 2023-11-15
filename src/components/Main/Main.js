import "./Main.css";


const Main = () => {
    return (
        <div>
            <main className="main">
                <section className="weather" id="weather-section">
                    <div className="weather__info">75ºF</div>
                    <img className="weather__image" src="/images/night/cloudy.svg" alt="weather"/>
                </section>
                <section id="card-section">

                </section>
            </main>
        </div>
    );
};

export default Main