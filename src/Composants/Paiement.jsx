import React from 'react'
import Visa from './img/Visa.png'
export default function Paiement() {
  return (
    <div>
        <div className='top'>
            <h1>Paiement</h1>
        </div>
        <div className='bigmother'>
            <div className='smallchild'>
            <input className='Bor' type="text"  placeholder='Nom'/>
            <input className='Bor' type="text"  placeholder='Prenom'/>
            <input className='Bor' type="email"  placeholder='Email'/>
            <input className='Bor' type="tel"  placeholder='Phone'/>

        </div>
            <div>< img src={Visa} alt='' className='visa' ></img></div>
            <div className='bas'>
                <span>Nom sur la carte</span>

                </div>
                <div><input className='bas2' type="text"  placeholder='Nom'/> </div> 
                <div className='bas3'><span >Num de carte</span></div>
                <div className=''><input className='Bor hey' type="number"  placeholder='  ....   ....  ....  ....'/></div>
                <div className='bas4'><span>Date d'expiration</span> <span>  Cryptogramme</span>
                </div>
                <div className='sp'><input type="date"  /><input className='taille' type="number"  placeholder='  ....'/></div>

        </div>
        <button className='mar3'>Payer</button>
        
    </div>
  )
}
