import logo from './logo.svg';
import './App.css';
import Hotel from './Composants/hotel';
import Calendar from './Composants/Calendar'
import Paiement from './Composants/Paiement';
import Choishotel from './components/pages/Choishotel';
import Paiement2 from './components/Paiement2';
import Acceuil from './components/Accueil/Accueil';
import Chambres from './components/Chambres/Chambres';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div> <Routes>
      <Route path='/' element ={<Hotel/>}/>
      <Route path='/calendar' element ={<Calendar/>}/>
      <Route path='/paiement' element ={<Paiement/>}/>
      <Route path='/Choishotel' element={<Choishotel/>}/>
      <Route path='/Paiement2' element={<Paiement2/>}/>
      <Route path='/Acceuil' element={<Acceuil/>}/>
      <Route path='/Chambres' element={<Chambres/>}/>



      
      

    </Routes>
    
    </div>
  );
}

export default App;
