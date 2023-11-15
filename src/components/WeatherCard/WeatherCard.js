import "./WeatherCard.css";
import { weatherOptions } from "../../utils/Constants";

const WeatherCard = ({ day, type }) => {

    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type;
    });

    const imageSrcUrl = imageSrc[0].url || "";

    return (
        <section className="weather" id="weather-section">
            <div className="weather__info">75º F</div>
            <img className="weather__image" src={imageSrcUrl} alt="weather"/>
        </section>
    );
};

export default WeatherCard