import "./WeatherCard.css";
import { weatherOptions } from "../../utils/Constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const imageSrc = weatherOptions.find(
    (option) => option.day === day && option.type === type
  );

  const imageSrcUrl = imageSrc.url || "";

  return (
    <section className="weather" id="weather-section">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imageSrcUrl} alt="weather" />
    </section>
  );
};

export default WeatherCard;
