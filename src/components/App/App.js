//import components
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import { getForcastWeather, parseWeatherData, locationData } from '../../utils/WeatherApi';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [weatherTemp, setWeatherTemp] = useState(0);
  const [city, setCity] = useState("");

  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  const handleCreateModal = () => {
    setActiveModal("create")
  }

  const handleCloseModal = () => {
    setActiveModal("")
  }

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card)
  }

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const location = locationData(data);
        const temp = parseWeatherData(data);
        setCity(location);
        setWeatherTemp(temp);
      })
      .catch(console.error)
  }, []);


  return (
    <div>
      <Header 
        date={currentDate}
        location={city}
        onCreateModal={handleCreateModal}
      />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer/>
      {activeModal === "create" && (<ModalWithForm 
        title="New garment"
        onClose={handleCloseModal}
      >
        <div className="form">
          <div>
            <p className="form__title">Name</p>
            <label className="form__label">
              <input
                type="text"
                className="form__input"
                name="name"
                placeholder="Name"
                minLength="1"
                maxLength="30"
                required
              />
            </label>
          </div>
          <div>
            <p className="form__title">Image</p>
            <label className="form__label">
              <input
                type="url"
                className="form__input"
                name="link"
                placeholder="Image URL"
                minLength="1"
                maxLength="30"
                required
              />
            </label>
          </div>
          <div>
            <p className="form__title">Select the weather type:</p>
            <div className="form__radio-buttons">
              <div className="form__radio-button">
                <input type="radio" name="weatherType" id="hot" value="hot"></input>
                <label>Hot</label>
              </div>
              <div className="form__radio-button">
                <input type="radio" name="weatherType" id="warm" value="warm"></input>
                <label> Warm</label>
              </div>
              <div className="form__radio-button">
                <input type="radio" name="weatherType" id="cold" value="cold"></input>
                <label> Cold</label>
              </div>
            </div>
          </div>
        </div>
        </ModalWithForm>
        )}
       {activeModal === "preview" && (<ItemModal 
       selectedCard={selectedCard} 
       onClose={handleCloseModal} />
       )}
    </div>
  );
}

export default App;
