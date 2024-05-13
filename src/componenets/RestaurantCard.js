import React, { useState } from 'react';
import RatingReview from './RatingReview';
import chickenphoto from './Assets/chickenphoto.jpg';

function RestaurantCard({ restaurant, onDelete }) {
    const [rating, setRating] = useState(0);
    return (
        <div className='restaurant-card'>
            <div className='restaurant-details'>
                <h1>{restaurant.name}</h1>
                <h2>Location: {restaurant.location}</h2>
                <RatingReview rating={rating} setRating={setRating} />
                <img alt={'kintakiphoto'} src={chickenphoto} width={200} height={200} /><br />
                <button onClick={() => onDelete(restaurant.id)}>Delete</button>
            </div>
        </div>
    );
}

export default RestaurantCard;