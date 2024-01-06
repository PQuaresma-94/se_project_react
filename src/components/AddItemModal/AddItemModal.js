import React, {useState} from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal , onAddItem, isOpen}) => {
    const [name, setName] = useState("")
    const handleNameChange = (e) => {
        console.log(e.target.validity.valid)
        setName(e.target.value)
    }

    const [link, setUrl] = useState("")
    const handleUrlChange = (e) => {
        console.log(e.target.validity.valid)
        setUrl(e.target.value)
    }

    const [weatherType, setWeatherType] = useState("")
    const handleWeatherType = (e) => {
        console.log(e.target.validity.valid)
        setWeatherType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddItem ({name, link, weatherType})
        handleCloseModal()
    }

    return (
        <ModalWithForm 
            title="New garment"
            onClose={handleCloseModal}
            isOpen={isOpen}
            onSubmit={handleSubmit}
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
                value={name}
                onChange={handleNameChange}
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
                value={link}
                onChange={handleUrlChange}
              />
            </label>
          </div>
          <div>
            <p className="form__title">Select the weather type:</p>
            <div className="form__radio-button">
              <input 
                type="radio" 
                id="hot" 
                name="weatherType" 
                value="hot" 
                checked={weatherType === 'hot'}
                onChange={handleWeatherType} 
              />
              <label htmlFor="hot">Hot</label>
            </div>
            <div className="form__radio-button">
              <input 
                type="radio" 
                id="warm" 
                name="weatherType" 
                value="warm"
                checked={weatherType === 'warm'}
                onChange={handleWeatherType}
              />
              <label htmlFor="warm">Warm</label>
            </div>
            <div className="form__radio-button">
              <input 
                type="radio" 
                id="cold" 
                name="weatherType" 
                value="cold"
                checked={weatherType === 'cold'}
                onChange={handleWeatherType}
              />
              <label htmlFor="cold">Cold</label>
            </div>
          </div>
        </div>
        </ModalWithForm>
    );
}

export default AddItemModal