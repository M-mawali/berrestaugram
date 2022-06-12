import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RestaurantsList (){//api fatching
    const [restaurants,setRestaurants] =useState([]);
    const [filteredRstaurants,setFilteredRestaurants] =useState([]);
    
    useEffect(()=>{
        async function dataFetch () {
            const data =await fetch('https://redi-final-restaurants.herokuapp.com/restaurants/');
            const response = await data.json();
            setRestaurants (response.results);
        }
        dataFetch()
    },[]);
    console.log(restaurants);

    const onChkClick = (e) => {//checkbox results handler
        const name  =e.target

        const chkcuisine = restaurants.filter((e,restaurant)=>{
            e.cuisine[restaurant].includes(name.toLowerCase())});
        setFilteredRestaurants(chkcuisine)
        console.log(filteredRstaurants)
    }

    const onSearchedRestaurants = (e) => {// search results handler
        const search = e.target.value;

        const searchedRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||  restaurant.cuisine.includes(search.toLowerCase())
        );
        setFilteredRestaurants(searchedRestaurants);
        console.log(filteredRstaurants)
        };

    
    return(
        <>
            <div className='search-div' >
                <input
                    className='Search'
                    autoFocus='on'
                    autoComplete='off'
                    type='text'
                    placeholder='type restaurant name or cuisine '
                    onChange={onSearchedRestaurants}
                />
                <div> 
                <input type='checkbox' name='italian' checked onChange={onChkClick}/>italian&nbsp;&nbsp;
                <input type='checkbox' name='thai' onChange={onChkClick} />thai&nbsp;&nbsp;
                <input type='checkbox' name='american' onChange={onChkClick} />american&nbsp;&nbsp;
                <input type='checkbox' name='vietnameese' onChange={onChkClick} />vietnameese&nbsp;&nbsp;
                <input type='checkbox' name='indian' onChange={onChkClick} />indian&nbsp;&nbsp;
                <input type='checkbox' name='chinese' onChange={onChkClick} />chinese&nbsp;&nbsp;
                <input type='checkbox' name='German' onChange={onChkClick} />german&nbsp;&nbsp;
                <input type='checkbox' name='mexican' onChange={onChkClick} />mexican&nbsp;&nbsp;
                </div>
            </div>

            <div>
                <button >
                    <Link to='/RestaurantsList'>
                     browser all restaurants 
                     </Link>
                     </button>
            </div>

        <div className='restaurants'>
        {filteredRstaurants && filteredRstaurants.map((restaurant) => (//restaurants list creating
            <div className='restaurant' key={restaurant.id}>
                <Link to={`/RestaurantsList/${restaurant.id}`}>
                    <br/>    
                    <div style={{fontSize:'15px'}}><h3>{restaurant.name}</h3></div>
                    <div> Rate: <span style={{color:'gold'}}> {restaurant.rating} </span> ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine}</h3></div>
                    <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div className='open-now'>
                        {filteredRstaurants && restaurant && restaurant.opening_hours &&
                            restaurant.opening_hours.open_now && <h3> Open Now</h3>}
                    </div>
                    </Link>
            </div>  ) 
        )}
        </div>
        </>)}
        export default RestaurantsList;