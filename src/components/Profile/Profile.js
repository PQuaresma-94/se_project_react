import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

const Profile = ({ onSelectCard , onCreateModal, clothingItems, onEditProfileModal, onLogout }) => {
    return (
            <section className="profile">
                <SideBar onEditProfileModal={onEditProfileModal} onLogout={onLogout} />
                <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems} />
            </section>
    );
};

export default Profile