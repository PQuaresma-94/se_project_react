import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import {defaultClothingItems} from "../../utils/Constants"
import { useMemo } from "react";
import "./Main.css";


const Main = ({weatherTemp, onSelectCard}) => {
    const weatherType = useMemo(() => {
        if (weatherTemp >= 86) {
            return 'hot';
          } else if (weatherTemp >= 66 && weatherTemp <= 85) {
            return 'warm';
          } else if (weatherTemp <= 65) {
            return 'cold';
          }
    }, [weatherTemp]);

    const filteredCards = defaultClothingItems.filter((item) => {
        return item.weather.toLowerCase() === weatherType;
    });

    return (
            <main className="main">
                <WeatherCard day={true} type="snow" weatherTemp={weatherTemp} />
                <section className="cards" id="card-section">
                    <div className="cards__information">Today is {weatherTemp}° F / You may want to wear:</div>
                    <div className="cards__items">
                        {filteredCards.map((item) => (
                            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
                        ))}
                    </div>
                </section>
            </main>
    );
};

export default Main