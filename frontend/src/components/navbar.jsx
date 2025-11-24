import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-kontener">
            <div>
              <Link to='/'>Home</Link>
               <Link to='/register'>Regisztráció</Link>
               <Link to='/login'>Bejelentkezés</Link>
              <Link to='/menetrend'>Menetrend</Link>
            </div>
            <div>
              <button>Kijelentkezés</button>
             </div>  
            <div>
              <Link to='http://localhost:3500/api'>Szerver</Link>
              
             </div>  
    </div>
  );
};

export default Navbar;
