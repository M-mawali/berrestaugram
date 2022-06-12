import React from 'react';
import './App.css';
import RestaurantsList from './componets/RestaurantsList';
import SingleRestaurant from './componets/SingleResPage';
import NavBar from './componets/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRestaurant from './componets/AllResturannts';


function App() {
  return (
    <div className="App">
      <h1>  muhmmad sssss </h1> 
      <Router>
      <NavBar/>
      <Routes>
          <Route path='/' exact element={<RestaurantsList />} />
          <Route path='/RestaurantsList' element={<AllRestaurant/>} />
          <Route path='/RestaurantsList/:id' element={<SingleRestaurant/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
