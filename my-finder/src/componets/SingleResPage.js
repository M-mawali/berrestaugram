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

    return (
        <>
        <div >
        {singleRes && <h2>{singleRes.name}</h2>}
        </div>
        <div>{singleRes && singleRes.cuisine && <h3> enjoy with us finest dishes from the  {singleRes.cuisine} cuisine</h3>} </div>
        <div className='dishs-imgs'>
            <div className="dish">  {singleRes && singleRes.photos && singleRes.photos[0] && singleRes.photos[0].links &&
                    singleRes.photos[0].links[0] && (
                    <img src={singleRes.photos[0].links[0]} alt='icon' />
            )}</div>
            <div className="dish">  {singleRes && singleRes.photos && singleRes.photos[0] && singleRes.photos[0].links &&
                    singleRes.photos[0].links[1] && (
                    <img src={singleRes.photos[0].links[1]} alt='icon' />
            )}</div>
            <div className="dish">  {singleRes && singleRes.photos && singleRes.photos[0] && singleRes.photos[0].links &&
                    singleRes.photos[0].links[7] && (
                    <img src={singleRes.photos[0].links[7]} alt='icon' />
            )}</div>
            
        </div>
        </>
    )}
export default SingleRestaurant