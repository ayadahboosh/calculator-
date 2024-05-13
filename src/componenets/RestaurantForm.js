import React, { useState } from 'react';

function RestaurantForm({ setRestaurantsList }) {
    const [restaurant, setRestaurant] = useState({
        name: "",
        location: "",
    });

    const [nextId, setNextId] = useState(6);

    function handleAddClick() {
        setRestaurantsList((prevList) => [
            ...prevList,
            { ...restaurant, id: nextId },
        ]);
        setNextId(nextId + 1);
        setRestaurant({ name: "", location: "" });
    }

    return (
        <div>
            <input
                value={restaurant.name}
                type="text"
                placeholder="Restaurant Name"
                onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
                required
            />
            <input
                value={restaurant.location}
                type="text"
                placeholder="Location"
                required
                onChange={(e) => setRestaurant({ ...restaurant, location: e.target.value })}
            />
            <button onClick={handleAddClick}>Add Restaurant</button>
        </div>
    );
}

export default RestaurantForm;