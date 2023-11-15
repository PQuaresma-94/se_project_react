import "./WeatherCard.css";


const WeatherCard = () => {
    return (
        <section className="weather" id="weather-section">
            <div className="weather__info">75º F</div>
            <img className="weather__image" src="/images/night/cloudy.svg" alt="weather"/>
        </section>
    );
};

export default WeatherCard