import Jegy from '../components/Jegy';
import './Home.css';

const Home = () => {
  return (
    <div className="home-kontener">
        <div class="image-grid-container">
    <div class="grid-row-1">
        <div class="grid-item item-1">
            <img src="" alt="Modern vonat naplementében" class="img-large"/>
        </div>
        <div class="grid-item item-2">
            <img src="kep2.jpg" alt="Pályaudvar épülete" class="img-large"/>
        </div>
    </div>

    <div class="grid-row-2">
        <div class="grid-item item-3">
            <img src="kep3.jpg" alt="Pályaudvar belső tér" class="img-small"/>
        </div>

        <div class="grid-item item-4">
            <img src="kep4.jpg" alt="Gőzmozdony" class="img-small"/>
        </div>
    </div>

    <div class="grid-row-3">
        <div class="grid-item item-5">
            <img src="kep5.jpg" alt="Vonat viadukton" class="img-large"/>
        </div>
        <div class="grid-item item-6">
            <img src="kep6.jpg" alt="Vonat éjszakai peronon" class="img-large"/>
        </div>
    </div>

    <div class="grid-row-4">
        <div class="grid-item item-7"/>
            <img src="kep7.jpg" alt="Utasok a pályaudvaron" class="img-small"/>
        <div class="grid-item item-8"/>
            <img src="kep8.jpg" alt="Peron részlet" class="img-small"/>
    </div>
</div>
    </div>
  )
}

export default Home;