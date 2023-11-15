import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";


const Main = () => {
    return (
        <div>
            <main className="main">
                <WeatherCard day={true} type="cloudy" />
                <ItemCard/>
            </main>
        </div>
    );
};

export default Main