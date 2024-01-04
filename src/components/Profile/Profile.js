import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

const Profile = () => {
    

    return (
            <section className="profile">
                <SideBar/>
                <ClothesSection/>
            </section>
    );
};

export default Profile