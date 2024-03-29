import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const ItemModal = ({ 
    onClose,
    selectedCard,
    name, 
    onDelete,
    isLoggedIn
}) => {
    const {currentUser} = useContext(CurrentUserContext);
    const userId = currentUser ? currentUser._id : null;
    const isOwner = (selectedCard.owner === userId) && isLoggedIn;

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
                    {isOwner ?
                        (<button className="modal__delete-button" type="button" onClick={onDelete}>Delete item</button>) :
                        ("")
                    }
                </div>
            </div>
        </div>
    )
} 

export default ItemModal