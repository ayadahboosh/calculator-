import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';


function RestaurantList() {
    const [restaurantsList, setRestaurantsList] = useState([
        { id: 1, name: "KFC", location: "Al-Jadriyah" },
        { id: 2, name: "Fried Chicken", location: "Al-Jadriyah" },
        { id: 3, name: "Shmesani", location: "Al-Mansour" },
        { id: 4, name: "MAC", location: "Al-Amriyah" },
        { id: 5, name: "Chicken Express", location: "Al-Mansour" },
        { id: 5, name: "Ray's Fried Chicken", location: "Al-Yarmouk" },
        { id: 5, name: "Kudo Kudo", location: "Al-Amiryah" },
    ]);

    const handleDeleteClick = (id) => {
        const newRestaurantsList = restaurantsList.filter((rest) => rest.id !== id);
        setRestaurantsList(newRestaurantsList);
    };

    const myRestaurantsList = restaurantsList.map((rest) => (
        <RestaurantCard key={rest.id} restaurant={rest} onDelete={handleDeleteClick} />
    ));

    return (
        <div>
            <RestaurantForm setRestaurantsList={setRestaurantsList} />
            {myRestaurantsList}
        </div>
    );
}

export default RestaurantList;