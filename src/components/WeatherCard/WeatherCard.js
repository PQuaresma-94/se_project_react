import "./WeatherCard.css";
import { weatherOptions } from "../../utils/Constants";

const WeatherCard = ({ day, weatherType, weatherTemp }) => {
  const imageSrc = weatherOptions.find(
    (option) => option.day === day && option.type === weatherType
  );

  const imageSrcUrl = imageSrc ? imageSrc.url : "";

  return (
    <section className="weather" id="weather-section">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imageSrcUrl} alt="weather" />
    </section>
  );
};

export default WeatherCard;
