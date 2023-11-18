import "./ItemModal.css";

const ItemModal = ({ 
    onClose,
    selectedCard,
    name
}) => {
    return (
        <div className={`modal modal_type_${name}`}>
            <div className="modal__container modal__container-item">
                <button className="modal__close-button modal__close-preview-button" type="button" onClick={onClose}/>
                <img className="modal__image" src={selectedCard.link} alt={selectedCard.name} />
                 <div className="modal__description">
                    <div>{selectedCard.name}</div>
                    <div>Weather: {selectedCard.weather}</div>
                </div>
            </div>
        </div>
    )
} 

export default ItemModal