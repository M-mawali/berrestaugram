import { useEffect, useState } from 'react';


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

    const onSearchedRestaurants = (e) => {
        const search = e.target.value;

        const searchedRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||  restaurant.cuisine.includes(search.toLowerCase())
        );
        setFilteredRestaurants(searchedRestaurants);
        console.log(filteredRstaurants)
        };
    
    return(
        <>
            <div className='search-div'>
                <input
                    className='Search'
                    autoFocus='on'
                    autoComplete='off'
                    type='text'
                    placeholder='type restaurant name or cuisine '
                    onChange={onSearchedRestaurants}
                />
            </div>

        <div className='restaurants'>
        {filteredRstaurants && filteredRstaurants.map((restaurant) => (//restaurants list creating
            <div className='restaurant' key={restaurant.id}>
                    <br/>    
                    <div style={{fontSize:'15px'}}><h3>{restaurant.name}</h3></div>
                    <div> Rate: <span style={{color:'gold'}}> {restaurant.rating} </span> ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine}</h3></div>
                    <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div><h3>Address:</h3>{restaurant.formatted_address}</div>
            </div>  )
        )}
        </div>
        </>
)}

export default RestaurantsList;