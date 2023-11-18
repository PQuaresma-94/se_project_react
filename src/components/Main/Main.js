import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import {defaultClothingItems} from "../../utils/Constants"
import "./Main.css";


const Main = ({weatherTemp, onSelectCard}) => {
    return (
        <div>
            <main className="main">
                <WeatherCard day={true} type="snow" weatherTemp={weatherTemp} />
                <section className="cards" id="card-section">
                    <div className="cards__information">Today is {weatherTemp}° F / You may want to wear:</div>
                    <div className="cards__items">
                        {defaultClothingItems.map((item) => (
                            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Main