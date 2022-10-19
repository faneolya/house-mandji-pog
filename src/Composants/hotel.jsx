import React from 'react';
import Hotel from './img/Hotel.jpg';
import Stars from './img/Stars.png';
import Chercher from './img/Chercher.png';


export default function () {
  return (
    <div className='mere'>
    <div className='top'>
        <h1>Rechercher un hotel</h1>
        <div className='searchbar'>
            <input type="text"  />
            <button><img className='Chercher' src={Chercher} alt="" /></button>
        </div>
    </div>
    <div className='boximg'>
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
         <img className='stars' src= {Stars} alt="" />
         <span>301 avis</span>
        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span>93 avis</span>


        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span>501 avis</span>


        </div>
    </div>
    
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span>301 avis</span>


        </div>
    </div>
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span>301 avis</span>


        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span>Merdien Mandji</span> <br />
            <span>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span>301 avis</span>


        </div>
    </div>
    </div>



    

    
    </div>
  )
}
