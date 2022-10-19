import React from "react"
import "./Chambres.css";
import { FaSwimmer } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import Chambre1 from "./image/Chambre1.png";


export const Chambres = () => {
  return (
    <div>
      <div>
        <div className="linear">
        </div>
        <div >
          <h3>Chambres</h3>
        </div>
      </div>
      <div>
        <img className="image" src={Chambre1} alt="Chambre1" />
      </div>
      <div>
          <div className="chambre" >
            <h1>Chambres standard</h1>
            <p>Situé à Libreville, à 1,5 km de la statue nationale de l'abolition de l'esclavage, l'Hotel Hibiscus Blvd Triomphal propose un restaurant, un parking privé gratuit et un bar. Vous séjournerez à quelques pas du parc national d'Akanda et à 2,6 km de la base de Loisirs. La réception est ouverte 24h/24 et un service de change est assuré.

Les chambres sont dotées d'un balcon avec vue sur la ville. Elles sont également équipées de la climatisation et d'une télévision à écran plat.</p>
            <div className="icons">
            <FaSwimmer size={30}/>
            <FaTv size={30}/>
            <FaUtensils size={30}/>
            <FaWifi size={30}/>
            </div>
          </div>

        </div>
      <div>
          <div className="prix" >
            <h1>Prix</h1>
            <div className="icons">
            <FaMoneyBillAlt size={30}/>
            <p>25.000Fcfa à 200.000Fcfa</p>
            </div>
          </div>

        </div>
        <button className='mar3'>Réserver</button>

    </div>

  )
}

export default Chambres