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
        restaurants.map((restaurant) => (
            <div className='restaurant' key={restaurant.id}>    
                    <div><h1>{restaurant.name}</h1></div>
                    <div><h4> Rate: {restaurant.rating}<span> ({restaurant.user_ratings_total}) - </span>{restaurant.cuisine}</h4></div>
                    <div><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div><h3>Address:</h3>{restaurant.formatted_address}</div>
            </div>  )
        )
)}

export default RestaurantsList;