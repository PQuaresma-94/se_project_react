//import components
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';
import { getForcastWeather, parseWeatherData, locationData } from '../../utils/WeatherApi';
import { useState, useEffect } from 'react';
import {CurrentTemperatureUnitContext} from '../../contexts/CurrentTemperatureUnitContext';
import { BrowserRouter, Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';


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

  const handleDeleteModal = () => {
    setActiveModal("delete")
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

  const onAddItem = (values) => {
    console.log(values);
  }

  const handleAddItemSubmit = () => {
    // Still to do: setClothingItems([item, ...clothingItems]);
  }

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card)
  }

  const handleDeleteItem = () => {
    console.log("The item has been deleted")
    handleCloseModal();
  }

  const handleToggleSwitchChange = () => {
    if( currentTemperatureUnit === "C" ) setCurrentTemperatureUnit("F");
    if( currentTemperatureUnit === "F" ) setCurrentTemperatureUnit("C");
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
    <BrowserRouter>
    <div>
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}} >
      <Header 
        date={currentDate}
        location={city}
        onCreateModal={handleCreateModal}
      />
      <Switch>
        <Route exact path="/">
          <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
        </Route>
        <Route path="/profile">
          <Profile onSelectCard={handleSelectedCard} onCreateModal={handleCreateModal} />
        </Route>
      </Switch>
      <Footer/>
      {activeModal === "create" && (
        <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={onAddItem} />
        )}
       {activeModal === "preview" && (<ItemModal 
       selectedCard={selectedCard} 
       onClose={handleCloseModal}
       onDelete={handleDeleteModal} />
       )}
       {activeModal === "delete" && ( 
       <DeleteConfirmationModal name={"delete"} onClose={handleCloseModal} onConfirmation={handleDeleteItem} />
       )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
