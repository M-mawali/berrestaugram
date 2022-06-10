import { useEffect, useState } from 'react';


function RestaurantsList (){
    const [restaurants,setRestaurants] =useState([]);
    
    useEffect(()=>{
        async function dataFetch () {
            const data =await fetch('https://redi-final-restaurants.herokuapp.com/restaurants/');
            const response = await data.json();
            setRestaurants (response.results);
        }
        dataFetch()
    },[]);
    console.log(restaurants);
    return(
        <div className='restaurants'>
        {restaurants.map((restaurant) => (
            <div className='restaurant' key={restaurant.id}>    
                    <div><h2>{restaurant.name}</h2></div>
                    <div> Rate: {restaurant.rating} ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine}</h3></div>
                    <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div><h3>Address:</h3>{restaurant.formatted_address}</div>
            </div>  )
        )}
        </div>
)}

export default RestaurantsList;