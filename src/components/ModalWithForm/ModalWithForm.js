import "./ModalWithForm.css";

const ModalWithForm = ({
    children, 
    buttonText = "Add garment",
    title, 
    onClose,
    name
}) => {
    return (
        <div className={`modal modal_type_${name}`}>
            <div className="modal__container">
                <button className="modal__close-button" type="button" onClick={onClose}/>
                <h3 className="modal__title" >{title}</h3>
                <form className="modal__form">
                    {children}
                    <button className="modal__add-button" type="submit" disabled={false} >{buttonText}</button>
                </form>
            </div>
        </div>
    )
} 

export default ModalWithForm