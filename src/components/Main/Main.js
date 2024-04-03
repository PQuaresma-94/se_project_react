import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({
  weatherTemp,
  weatherType,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  onCardLiked,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const numericTemp = parseFloat(weatherTemp?.temperature?.F);
  const weatherTempType = useMemo(() => {
    if (numericTemp >= 86) {
      return "hot";
    } else if (numericTemp >= 66 && numericTemp <= 85) {
      return "warm";
    } else if (numericTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherTempType;
  });

  const typeExample = useMemo(() => {
    const weatherTypeMap = {
      Clear: "sunny",
      Clouds: "cloudy",
      Rain: "rain",
      Drizzle: "rain",
      Thunderstorm: "storm",
      Snow: "snow",
      Fog: "fog",
    };

    return weatherTypeMap[weatherType];
  }, [weatherType]);

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="snow"
        weatherTemp={temp}
        weatherType={typeExample}
      />
      <section className="cards" id="card-section">
        <div className="cards__information">
          Today is {temp}/ You may want to wear:
        </div>
        <div className="cards__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              onCardLiked={onCardLiked}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
