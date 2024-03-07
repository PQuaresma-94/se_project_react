//import components
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Profile from '../Profile/Profile';
import ItemModal from '../ItemModal/ItemModal';
import AddItemModal from '../AddItemModal/AddItemModal';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
import ProtecteRoute from "../ProtectedRoute/ProtectedRoute";
import { getForcastWeather, parseWeatherData, locationData } from '../../utils/WeatherApi';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {CurrentTemperatureUnitContext} from '../../contexts/CurrentTemperatureUnitContext';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { getItems, postItem, deleteItem, updateUserProfile } from '../../utils/api';
import { register, authorize, checkToken } from '../../utils/auth';
import './App.css';

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [weatherTemp, setWeatherTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");


  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  // Handle User Functions

  const handleRegister = (data) => {
    const userEmail = data.email
    const userPassword = data.password
    register( data.email, data.password, data.name, data.avatar )
        .then(() => {
            const userData = ({email: userEmail, password: userPassword})
            handleLogin(userData)
        })
        .catch(error => {
            console.error("Error creating a new user:", error);
        });
  }

  const handleLogin = (data) => {
    return new Promise ((resolve, reject) => {
      authorize(data.email, data.password)
        .then((res) => {
          checkToken(res)
          .then((userData) => {
            setCurrentUser(userData)
            setIsLoggedIn(true)
            resolve(true)
          })
        })
        .catch(error => {
            console.error("Login In Error:", error);
            reject(error)
          }
      );
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }

  const handleEditUserProfile = (data) => {
    updateUserProfile(data)
    .then((userData) => {
      setCurrentUser(userData)
    })
  }

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

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile")
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
    postItem({ name: data.name, type: data.weather, imageUrl: data.link })
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
    const token= localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
      .then((userData) => {
        setCurrentUser(userData)
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err)
        setIsLoggedIn(false);
      });
  }
}, []);

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
      <CurrentUserContext.Provider value={currentUser} > 
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}} >
      <Header 
        date={currentDate}
        location={city}
        onCreateModal={handleCreateModal}
        isLoggedIn={isLoggedIn} 
        onRegisterModal={handleRegisterModal} 
        onLoginModal={handleLoginModal}
      />
      <Switch>
        <Route exact path="/">
          <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} clothingItems={clothingItems} />
        </Route>
        <ProtecteRoute 
          path="/profile" 
          isLoggedIn={isLoggedIn} 
          component={Profile} 
          onSelectCard={handleSelectedCard} 
          onCreateModal={handleCreateModal} 
          clothingItems={clothingItems} 
          onEditProfileModal={handleEditProfileModal} 
          onLogout={handleLogout}>
        </ProtecteRoute>
      </Switch>
      <Footer/>
      {activeModal === "login" && ( 
        <LoginModal handleCloseModal={handleCloseModal} isOpen={activeModal === "login"} onLogin={handleLogin} onSwitch={handleRegisterModal} />
      )}
      {activeModal === "register" && ( 
        <RegisterModal handleCloseModal={handleCloseModal} isOpen={activeModal === "register"} onRegister={handleRegister} onSwitch={handleLoginModal} />
      )}
      {activeModal === "create" && (
        <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={handleAddItemSubmit} />
      )}
      {activeModal === "edit-profile" && (
        <EditProfileModal handleCloseModal={handleCloseModal} isOpen={activeModal === "edit-profile"} onEditUser={handleEditUserProfile} />
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
      </CurrentUserContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
