import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './ClothesSection.css';

const ClothesSection = ({ onCreateModal , onSelectCard, clothingItems, isLoggedIn, onCardLiked }) => {
    const {currentUser} = useContext(CurrentUserContext);

    const filteredCards = clothingItems.filter((item) => {
        return item.owner === currentUser._id;
    });
    
    return (
        <section className="clothes" id="clothes-section">
            <div className="clothes__header">
                <div className="clothes__title">Your Items</div>
                <button className="clothes__add-button" type="text" onClick={onCreateModal}>+ Add new</button>
            </div>
            <div className="clothes__items">
                {filteredCards.map((item) => (
                    <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} isLoggedIn={isLoggedIn} onCardLiked={onCardLiked}/>
                ))}
            </div>
        </section>
)}

export default ClothesSection