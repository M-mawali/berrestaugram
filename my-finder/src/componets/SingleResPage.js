import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurant() {
    const {id} = useParams();
    const [singleRes, SetSingleRes] = useState();

    useEffect(()=>{
        async function dataFetch () {
            const data =await fetch('https://redi-final-restaurants.herokuapp.com/restaurants/');
            const response = await data.json();
            const resId = response.results.find((rest) => rest.id === id)
            SetSingleRes(resId);
        } 
        dataFetch()
    },[id]);
    console.log(singleRes)

    return  (
        <div className='single-page-name'>
        {singleRes && <h3>{singleRes.name}</h3>}
        </div>
    )}
export default SingleRestaurant