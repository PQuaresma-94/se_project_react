//import components
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import { getForcastWeather, parseWeatherData, locationData } from '../../utils/WeatherApi';
import { useState, useEffect } from 'react';
import {CurrentTemperatureUnitContext} from '../../contexts/CurrentTemperatureUnitContext';
import { BrowserRouter, Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';
import { getItems, postItem, deleteItem } from '../../utils/api';
import './App.css';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [weatherTemp, setWeatherTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);

  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  // Handle Modal Functions

  const handleCreateModal = () => {
    setActiveModal("create")
  }

  const handleDeleteModal = () => {
    setActiveModal("delete")
  }

  const handleRegisterModal = () => {
    setActiveModal("register")
  }

  const handleLoginModal = () => {
    setActiveModal("login")
  }

  const handleCloseModal = () => {
    setActiveModal("")
  }

  // Handle Overlay Functions
  
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

  // Handle Items Functions

  const handleAddItemSubmit = (data) => {
    postItem({ name: data.name, type: data.weatherType, link: data.link })
        .then((addedItem) => {
            setClothingItems(prevItems => [...prevItems, addedItem]); // Add the new item to clothingItems state
        })
        .catch(error => {
            console.error("Error adding item:", error);
        });
};

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card)
  }

  const handleDeleteItem = (item) => {
    deleteItem(item._id)
        .then(() => {
            setClothingItems(prevItems => prevItems.filter(clothingItem => clothingItem._id !== item._id));
            handleCloseModal();
        })
        .catch(error => {
            console.error("Error deleting item:", error);
        });
  }

  // Handle Toogle Switch Changes Funtions

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F"); 
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
  
  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items)
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
        isLoggedIn={false} 
        onRegisterModal={handleRegisterModal} 
        onLoginModal={handleLoginModal}
      />
      <Switch>
        <Route exact path="/">
          <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} clothingItems={clothingItems}/>
        </Route>
        <Route path="/profile">
          <Profile onSelectCard={handleSelectedCard} onCreateModal={handleCreateModal} clothingItems={clothingItems} />
        </Route>
      </Switch>
      <Footer/>
      {activeModal === "login" && ( 
        <LoginModal handleCloseModal={handleCloseModal} isOpen={activeModal === "login"} onAddItem={handleAddItemSubmit}/>
      )}
      {activeModal === "register" && ( 
        <RegisterModal handleCloseModal={handleCloseModal} isOpen={activeModal === "register"} onAddItem={handleAddItemSubmit}/>
      )}
      {activeModal === "create" && (
        <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={handleAddItemSubmit} />
      )}
      {activeModal === "preview" && (
        <ItemModal 
          selectedCard={selectedCard} 
          onClose={handleCloseModal}
          onDelete={handleDeleteModal} />
      )}
      {activeModal === "delete" && ( 
        <DeleteConfirmationModal name={"delete"} onClose={handleCloseModal} onConfirmation={() => handleDeleteItem(selectedCard)}  />
      )}

      </CurrentTemperatureUnitContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
