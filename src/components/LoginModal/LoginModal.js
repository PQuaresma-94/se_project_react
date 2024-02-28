import React, {useState, useEffect} from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal , onAddItem, isOpen }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
  
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  
    const handleEmailChange = (e) => {
        const isEmailValid = e.target.validity.valid;
        setIsEmailValid(isEmailValid)
        setEmail(e.target.value)
        setIsButtonEnabled(isEmailValid && isUrlValid)
    }

    const handleUrlChange = (e) => {
        const isUrlValid = e.target.validity.valid;
        setIsPasswordValid(isUrlValid);
        setPassword(e.target.value)
        setIsButtonEnabled(isEmailValid && isPasswordValid)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddItem ({email, password})
        handleCloseModal()
    }

    useEffect(() => {
      if (isOpen) {
          setEmail("");
          setPassword("");
          setIsEmailValid(false);
          setIsPasswordValid(false);
          setIsButtonEnabled(false);
      }
  }, [isOpen]);

    return (
        <ModalWithForm 
            title="Log In"
            buttonText = "Log In"
            onClose={handleCloseModal}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            isEnable={isButtonEnabled}
        >
        <div className="form">
          <div>
            <label className="form__label">
              <p className="form__title">Email</p>
              <input
                type="email"
                className="form__input"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <div>
            <label className="form__label">
              <p className="form__title">Password</p>
              <input
                type="text"
                className="form__input"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleUrlChange}
              />
            </label>
          </div>
        </div>
        </ModalWithForm>
    );
}

export default LoginModal 