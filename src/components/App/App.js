//import components
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';

import './App.css';

function App() {
  const weatherTemp = "102° F";
  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create")
  }

  const handleCloseModal = () => {
    setActiveModal("")
  }

  return (
    <div>
      <Header 
        onCreateModal={handleCreateModal}
      />
      <Main weatherTemp={weatherTemp} />
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
      {/* <ItemModal/> */}
    </div>
  );
}

export default App;
