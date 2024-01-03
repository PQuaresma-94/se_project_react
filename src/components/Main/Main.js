import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import {defaultClothingItems} from "../../utils/Constants"
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';


const Main = ({weatherTemp, onSelectCard}) => {

    const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit]
    const numericTemp = parseFloat(weatherTemp?.temperature?.F)
    const weatherType = useMemo(() => {
        if (numericTemp >= 86) {
            return 'hot';
          } else if (numericTemp >= 66 && numericTemp <= 85) {
            return 'warm';
          } else if (numericTemp <= 65) {
            return 'cold';
          }
    }, [weatherTemp]);

    const filteredCards = defaultClothingItems.filter((item) => {
        return item.weather.toLowerCase() === weatherType;
    });

    return (
            <main className="main">
                <WeatherCard day={true} type="snow" weatherTemp={temp} />
                <section className="cards" id="card-section">
                    <div className="cards__information">Today is {temp}/ You may want to wear:</div>
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