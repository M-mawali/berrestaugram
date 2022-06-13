import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RestaurantsList (){//api fatching
    const [restaurants,setRestaurants] =useState([]);
    const [filteredRstaurants,setFilteredRestaurants] =useState([]);
    const [filteredRstaurants2,setFilteredRestaurants2] =useState([]);
    const [filteredRstaurants3,setFilteredRestaurants3] =useState([]);
    
    
    useEffect(()=>{
        async function dataFetch () {
            const data =await fetch('https://redi-final-restaurants.herokuapp.com/restaurants/');
            const response = await data.json();
            setRestaurants (response.results);
        }
        dataFetch()
    },[]);
    console.log(restaurants);


    const onSelect = (e ) => {//checkbox results handler
        const name   =e.target.value
        
        const selector = restaurants.filter((restaurant)=>
            restaurant.cuisine.toLowerCase().includes(name.toLowerCase()) ) 
            setFilteredRestaurants2(selector)
            setFilteredRestaurants(selector)
        console.log(filteredRstaurants)
        console.log(name)
        
    } 

    const onSelect2 = (e ) => {//checkbox results handler
        const name   =e.target.value
    const  selector2 =  filteredRstaurants2.filter((restaurant ) =>
     restaurant.dietaryRestrictions.toLowerCase().includes(name.toLowerCase())) 
       setFilteredRestaurants(selector2)

    const selector3 =restaurants.filter((restaurant ) =>
     restaurant.dietaryRestrictions.toLowerCase().includes(name.toLowerCase()))    
        setFilteredRestaurants3(selector3)
        console.log(name)

    }
    const onSearchedRestaurants = (e) => {// search results handler
        const search = e.target.value;

        const searchedRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||  restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
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
                <div className='selectors'> 
                        <div>
                  <label for='cuisine-select'>Filter 1 </label>
                  <select onChange={onSelect} name="cuisine"  id='cuisine-select' className='selector'>
                  <option name='' >no select</option>
                      <option name='italian' >italian</option>
                      <option name='thai'>thai</option>
                      <option name='american'>american</option>
                      <option name='vietnameese'>vietnameese</option>
                      <option name='indian'>indian</option>
                      <option name='chinese'>chinese</option>
                      <option name='German'>German</option>
                      <option name='mexican'>mexican</option>
                      </select>
                      </div>
                      <div>
                      <label for='dietaryRestrictions-select'>Filter 2 </label>
                      <select onChange={ onSelect2} name="dietaryRestrictions"  id='dietaryRestrictions-select' className='selector' >
                      <option name='no select' id='0'>no select</option>    
                      <option name='halal' >halal</option>
                      <option name='kosher' >kosher</option>
                      <option name='gluten free' >gluten free</option>
                      <option name='lactose free' >lactose free</option>
                      <option name='vegan' >vegan</option>
                      <option name='vegetarian' >vegetarian</option>
                      </select>
                      </div>
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
                    <div> Rate: <span style={{color:'gold'}}> {restaurant.rating} </span> ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine} <span style={{color:'blue'}}>({restaurant.dietaryRestrictions})</span></h3></div>
                    <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div className='open-now'>
                        {filteredRstaurants && restaurant && restaurant.opening_hours &&
                            restaurant.opening_hours.open_now && <h3> Open Now</h3>}
                    </div>
                    </Link>
            </div>  ) 
        )}  
        </div>
        <div className='restaurants'>
        {filteredRstaurants3.map((restaurant) => (//restaurants list creating
            <div className='restaurant' key={restaurant.id}>
                <Link to={`/RestaurantsList/${restaurant.id}`}>
                    <br/>    
                    <div style={{fontSize:'15px'}}><h3>{restaurant.name}</h3></div>
                    <div> Rate: <span style={{color:'gold'}}> {restaurant.rating} </span> ({restaurant.user_ratings_total}) <h3>{restaurant.cuisine} <span style={{color:'blue'}}>({restaurant.dietaryRestrictions})</span></h3></div>
                    <div className='res-img'><img src={restaurant.photos[0].links[1]} alt='' /></div>
                    <div className='open-now'>
                        {filteredRstaurants3 && restaurant && restaurant.opening_hours &&
                            restaurant.opening_hours.open_now && <h3> Open Now</h3>}
                    </div>
                    </Link>
            </div>)
        )}
        </div>
        </>)}
        export default RestaurantsList;