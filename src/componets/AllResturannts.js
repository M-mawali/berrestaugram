import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// crating all restaurants page 
function AllRestaurant() {
    const [all, SetAll] = useState();

        useEffect(()=>{
            async function dataFetch () {
                const data =await fetch('https://redi-final-restaurants.herokuapp.com/restaurants/');
                const response = await data.json();
                SetAll (response.results);
            }
            dataFetch()
    },[]);
    console.log(all)


 return (
    <div className='restaurants'>
    {all && all.map((restaurant) => (//restaurants list creating
        <div className='restaurant' key={restaurant.id}>
            <Link to={`/RestaurantsList/${restaurant.id}`}>
                <br/>    
                <div style={{fontSize:'15px'}}><h3>{restaurant.name}</h3></div>
                <div> Rate: <span style={{color:'gold'}}> {restaurant.rating} </span> ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine}</h3></div>
                <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                <div className='open-now'>
                    {all && restaurant && restaurant.opening_hours &&
                        restaurant.opening_hours.open_now && <h3> Open Now</h3>}
                </div>
                </Link>
        </div>  ) 
    )}
    </div>

 )
}

export default AllRestaurant