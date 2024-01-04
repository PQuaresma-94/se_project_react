import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import {defaultClothingItems} from "../../utils/Constants"
import './ClothesSection.css';

const ClothesSection = ({ onCreateModal , onSelectCard}) => {

    return (
        <section className="clothes" id="clothes-section">
            <div className="clothes__header">
                <div className="clothes__title">Your Items</div>
                <button className="clothes__add-button" type="text" onClick={onCreateModal}>+ Add new</button>
            </div>
            <div className="clothes__items">
                {defaultClothingItems.map((item) => (
                    <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
                ))}
            </div>
        </section>
)}

export default ClothesSection