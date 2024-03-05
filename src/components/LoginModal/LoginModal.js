import React, {useState, useEffect} from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal , onLogin , isOpen }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
  
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  
    const handleEmailChange = (e) => {
        const isEmailValid = e.target.validity.valid;
        setIsEmailValid(isEmailValid)
        setEmail(e.target.value)
        setIsButtonEnabled(isEmailValid && isPasswordValid)
    }

    const handlePasswordChange = (e) => {
        const isPasswordValid = e.target.validity.valid;
        setIsPasswordValid(isPasswordValid);
        setPassword(e.target.value)
        setIsButtonEnabled(isEmailValid && isPasswordValid)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin ({ email, password })
        handleCloseModal()
    }
    const handleSwitch = (e) => {
        console.log(e)
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
            submitButtonText = "Log In"
            onClose={handleCloseModal}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            isEnable={isButtonEnabled}
            switchButtonText = "or Sign Up"
            onClick = {handleSwitch}
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
                type="password"
                className="form__input"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
        </div>
        </ModalWithForm>
    );
}

export default LoginModal 