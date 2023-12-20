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
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  const handleCreateModal = () => {
    setActiveModal("create")
  }

  const handleCloseModal = () => {
    setActiveModal("")
  }
  
  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    }

  const handleOverlayClick = (event) => {
      if (event.target.classList.contains('modal')) {
        handleCloseModal();
      }
    }

    if (activeModal) {
      document.addEventListener('keydown', handleEscapeKeyPress);
      document.addEventListener('mousedown', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [activeModal, handleCloseModal]);



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
            <label className="form__label">
              <p className="form__title">Name</p>
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
            <label className="form__label">
              <p className="form__title">Image</p>
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
            <div className="form__radio-button">
              <input type="radio" id="hot" name="weatherType" value="hot" />
              <label htmlFor="hot">Hot</label>
            </div>
            <div className="form__radio-button">
              <input type="radio" id="warm" name="weatherType" value="warm" />
              <label htmlFor="warm">Warm</label>
            </div>
            <div className="form__radio-button">
              <input type="radio" id="cold" name="weatherType" value="cold" />
              <label htmlFor="cold">Cold</label>
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
