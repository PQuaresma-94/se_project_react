import React, {useState, useEffect} from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal , onAddItem, isOpen }) => {
    const [name, setName] = useState("")
    const [weather, setWeather] = useState("")
    const [imageUrl, setImageUrl] = useState("")
  
    const [isNameValid, setIsNameValid] = useState(false)
    const [isWeatherValid, setIsWeatherValid] = useState(false)
    const [isImageUrlValid, setIsImageUrlValid] = useState(false)
  
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  
    const handleNameChange = (e) => {
        const isNameValid = e.target.validity.valid;
        setIsNameValid(isNameValid)
        setName(e.target.value)
        setIsButtonEnabled(isNameValid && isWeatherValid && isImageUrlValid)
    }

    const handleUrlChange = (e) => {
        const isImageUrlValid = e.target.validity.valid;
        setIsImageUrlValid(isImageUrlValid);
        setImageUrl(e.target.value)
        setIsButtonEnabled(isNameValid && isWeatherValid && isImageUrlValid)
    }

    const handleWeatherType = (e) => {
        const isWeatherValid = e.target.validity.valid;
        setIsWeatherValid(isWeatherValid);
        setWeather(e.target.value)
        setIsButtonEnabled(isNameValid && isWeatherValid && isImageUrlValid)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddItem ({name, imageUrl, weather})
        handleCloseModal()
    }

    useEffect(() => {
      if (isOpen) {
          setName("");
          setWeather("");
          setImageUrl("");
          setIsNameValid(false);
          setIsWeatherValid(false);
          setIsImageUrlValid(false);
          setIsButtonEnabled(false);
      }
  }, [isOpen]);

    return (
        <ModalWithForm 
            title="New garment"
            submitButtonText = "Add garment"
            onClose ={handleCloseModal}
            isOpen ={isOpen}
            onSubmit ={handleSubmit}
            isEnable ={isButtonEnabled}
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
                required
                value={imageUrl}
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
                checked={weather === 'hot'}
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
                checked={weather === 'warm'}
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
                checked={weather === 'cold'}
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