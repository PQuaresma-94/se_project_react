import "./ItemModal.css";

const ItemModal = ({ 
    onClose,
    selectedCard,
    name, 
    onDelete
}) => {
    console.log(selectedCard)
    return (
        <div className={`modal modal_type_${name}`}>
            <div className="modal__container modal__container-item">
                <button className="modal__close-button modal__close-preview-button" type="button" onClick={onClose}/>
                <img className="modal__image" src={selectedCard.imageUrl} alt={selectedCard.name} />
                 <div className="modal__description">
                     <div className="modal__item-info">
                        <div>{selectedCard.name}</div>
                        <div>Weather: {selectedCard.weather}</div>
                    </div>
                    <button className="modal__delete-button" type="button" onClick={onDelete}>Delete item</button>
                </div>
            </div>
        </div>
    )
} 

export default ItemModal