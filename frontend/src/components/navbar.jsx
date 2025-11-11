import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-kontener">
              <Link to='/'>Home</Link>
               <Link to='https://www.mavcsoport.hu/'>MÁV-CSOPORT</Link>
              <Link to='https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas'>Belföldi Utazás</Link>
              <Link to='https://www.mavcsoport.hu/mav-szemelyszallitas/nemzetkozi-utazas'>Nemzetközi Utazás</Link>
              <Link to='https://www.mavcsoport.hu/ugyfelszolgalat/mav-ugyfelszolgalat'>Ügyfészolgálat</Link>
              <Link to='https://jegy.mav.hu/bejelentkezes?compensationRequest=compensationRequest'>Késési biztosítás</Link>
              <Link to='/menetrend'>Menetrend</Link>
              
    </div>
  );
};

export default Navbar;
