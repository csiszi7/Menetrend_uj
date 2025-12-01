import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const loggedInStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
        const letUser = JSON.parse(localStorage.getItem('user'));
        console.log(letUser);
        

        if (loggedInStatus === 1) {
            setIsLoggedIn(true);
        }

        if (letUser && letUser[0].admin === true) {
            setIsAdmin(true);
        }
    }, []);

    const kijelenkezes = () => {
        window.alert('Sikeres kijelentkezés!');
        localStorage.setItem('isLoggedIn', JSON.stringify(0));
        localStorage.setItem('user', null);
        setIsLoggedIn(false);
        window.location.href = '/';
    }; 
  return (
    
    <div className="navbar-kontener">
            <div>
              <Link to='/'>Home</Link>
               <Link to='/register'>Regisztráció</Link>
               <Link to='/login'>Bejelentkezés</Link>
              <Link to='/menetrend'>Menetrend</Link>
            </div>
            {isLoggedIn ? 
            <div>
              <button onClick={kijelenkezes}>Kijelentkezés</button>
            </div>  
            
            :
            <div>
            </div>
            }
            { isAdmin ? <div>
              <Link to='http://localhost:3500/api'>Szerver</Link>
              
             </div>   : <div>
            </div>}
            
    </div>
  );
};

export default Navbar;
