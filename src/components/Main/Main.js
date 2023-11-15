import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";


const Main = () => {
    return (
        <div>
            <main className="main">
                <WeatherCard/>
                <section id="card-section">
                    <div>Today is 75° F / You may want to wear:</div>
                </section>
            </main>
        </div>
    );
};

export default Main