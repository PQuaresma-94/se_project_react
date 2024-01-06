import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

const Profile = ({ onSelectCard , onCreateModal }) => {
    

    return (
            <section className="profile">
                <SideBar/>
                <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} />
            </section>
    );
};

export default Profile