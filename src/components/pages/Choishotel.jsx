import React from 'react';
import"./Choishotel.jsx"
import"./Choishotel.css"

import Vector from'./image/Vector.png'
import Group from'./image/Group.png'
import menu from'./image/menu.png'
import map from'./image/map.png'



function Choishotel() {
  return (
    <div>
      <body>
      <div className='image1'>
        
        </div>
      <div className='hotel'> 
        <h1>Hotel Bambou</h1> 
        <div description> <div className="image-vector hey"><img src={Vector} alt="" /></div>; <h3>Abela, quartier Sobraga</h3> </div>
        <div className="text"> <p>Au calme, idéalement situé dans le triangle aéroport, port, centre ville. Studios et chambres meublés. Location au mois et à la journée. TV, wifi</p> </div>
        <div className="icons"><img src={Group} alt="" /></div>
        <div className="map"><img src={map} alt="" /><button className="reservation"><p>Reserver</p></button></div>
        
      </div>
      </body>
    </div>
  )
}

export default Choishotel



