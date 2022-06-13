import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl ,RouteButton } from '@pbe/react-yandex-maps';



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
        <div className="single-page">
        
        <div > <br/>
        {singleRes && <h2 style={{fontFamily:"Raleway"}}>{singleRes.name}</h2>}
        </div>
        <div><br/>{singleRes && singleRes.cuisine && <h3 style={{fontFamily:"Raleway"}}> Finest dishes from the  {singleRes.cuisine} cuisine</h3>} </div>
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
        <div className="singelRes-details" >
                <ul >{singleRes && singleRes.price_level===2 && <li style={{fontFamily:"Raleway"}}>Price : €€ </li>}
                    {singleRes && singleRes.price_level===1 && <li style={{fontFamily:"Raleway"}}>Price : € </li>}
                    {singleRes && singleRes.price_level===3 && <li style={{fontFamily:"Raleway"}}>price : €€€ </li>}
                    {singleRes && singleRes.price_level===4 && <li style={{fontFamily:"Raleway"}}>price : €€€€ </li>}
                    {singleRes && singleRes.opening_hours.hours && <li style={{fontFamily:"Raleway"}}> Openinig Time : {singleRes.opening_hours.hours.open} - {singleRes.opening_hours.hours.close}</li>}</ul>
                    <ul>{singleRes && singleRes.delivery===true ? <li style={{fontFamily:"Raleway"}}> delivery : ✔️  </li>
                                                            : <li style={{fontFamily:"Raleway"}}> delivery : ❌ </li> }
                    {singleRes && singleRes.pickup===true ? <li style={{fontFamily:"Raleway"}}>pickup : ✔️</li>
                                                          : <li style={{fontFamily:"Raleway"}}>pickup : ❌ </li>}
                </ul>
                
            </div>
            <div><br/><br></br>
                {singleRes && singleRes.geometry && singleRes.geometry.location && <YMaps>
    <div className="res-map">
       <div className="location"> <br/> <li style={{fontFamily:"Raleway"}}> 📍 Location</li>
        {singleRes && singleRes.formatted_address && <li style={{fontFamily:"Raleway"}}>{singleRes.formatted_address}</li>}
        <br/><br/>
        <li style={{fontSize:"23px" ,fontFamily:"Raleway" }} > Contact Informations</li><br/>
                <li style={{fontSize:"38px"}}>📱</li> 
                {singleRes && singleRes.social && singleRes.social.phone && <li style={{fontFamily:"Raleway"}}>Phone-Number : {singleRes.social.phone} </li>}
                <li style={{fontSize:"38px"}}>📧</li>
                {singleRes && singleRes.social && singleRes.social.email && <li style={{fontFamily:"Raleway"}}>Email : {singleRes.social.email } </li>}
        </div>
      <div className="map"><Map defaultState={{ center: [singleRes.geometry.location.lat, singleRes.geometry.location.lng], zoom: 12 }} height='320px' width='900px'>
          <Placemark geometry={ [singleRes.geometry.location.lat, singleRes.geometry.location.lng]}/>
          <FullscreenControl options={{float: 'left'}}/>
          <GeolocationControl options={{float:'right'}}/>
          <RouteButton options={{float: 'right' }} />

      </Map>
    </div>
    </div>
  </YMaps>}
            </div>
     
        </div>
    )}
export default SingleRestaurant