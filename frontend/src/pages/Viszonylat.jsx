import { useContext, useState, useEffect } from "react";
// 1. 👈 Importáljuk a useNavigate hook-ot a React Router-ből
import { useNavigate } from "react-router-dom";
import "./Viszonylat.css";
import { MenetrendContext } from '../context/MenetrendContext.jsx';

const Viszonylat = () => {
  // 2. 👈 Inicializáljuk a navigációs funkciót a komponensen belül
  const navigate = useNavigate();
  // const { viszonylatok } = useContext(MenetrendContext);
  const [viszonylatok, setViszonylatok] = useState(
      JSON.parse(localStorage.getItem("viszonylatok")) || []
    );
    
  //   useEffect(() => {
  //     console.log(viszonylatok);
  // }, [])
  
  // Példa állapotok
  const [honnan, setHonnan] = useState("");
  const [hova, setHova] = useState("");
  // const [datum, setDatum] = useState("Ma");
  // const [ido, setIdo] = useState("15:47");
  
  useEffect(() => {
    setHonnan();
    setHova();
  }, [])
    



  // const handleSearch = () => {
  
  //   console.log(`Keresés: ${honnan} -> ${hova}, Dátum: ${datum}, Idő: ${ido}`);
  // };

  // 3. 👈 A Jegyek gombhoz tartozó navigációs függvény
  const handleTicketClick = (routeData) => {
    console.log("Jegyek gomb lenyomva. Navigálás a /jegy oldalra.");
    // Átirányítás a /jegy útvonalra.
    // Átadjuk a járat adatait (result), ami hasznos lehet a jegyvásárló oldalon.
    navigate("/jegy", { state: { data: routeData } });
  };

  const handleMainClick = (routeData) => {
    console.log("Navigálás a / oldalra.");
    // Átirányítás a /jegy útvonalra.
    // Átadjuk a járat adatait (result), ami hasznos lehet a jegyvásárló oldalon.
    navigate("/", { state: { data: routeData } });
  };
  // 4. ❗ SZINTAKTIKAI HIBA KIJAVÍTVA: A JSX elemeknek a return() belsejében kell lenniük!
  // A keresőgombot a megfelelő helyre, a beállítások oszlopába helyezzük.

  return (
    <div className="route-planner-container">
      <header className="header">
        <h1>Útvonal beállítás</h1>
        <h2></h2>
      </header>

      <div className="content-wrapper">
        <div id="fedo"></div>
        {/* Útvonal beállítás oszlop */}
        {/* <aside className="settings-column">
          <div className="input-group">
            <label>Honnan?</label>
            <select value={honnan} onChange={(e) => setHonnan(e.target.value)}>
              <option>SZEGED*</option>
            </select>
          </div>

          <div className="input-group">
            <label>Hová?</label>
            <select value={hova} onChange={(e) => setHova(e.target.value)}>
              <option>BUDAPEST*</option>
            </select>
          </div>

          <div className="input-group">
            <label>Mikor?</label>
            <select value={datum} onChange={(e) => setDatum(e.target.value)}>
              <option>Ma</option>
            </select>
          </div>

          <div className="input-group">
            <label>Hánykor?</label>
            <select value={ido} onChange={(e) => setIdo(e.target.value)}>
              <option>15:47</option>
            </select>
          </div>

          <details className="help-section">
            <summary>Súgó</summary>
            <p>Segítség az útvonaltervezéshez...</p>
          </details>

          <button className="search-button" onClick={handleSearch}>
            Útvonal keresése
          </button>
        </aside> */}

        {/* Eredmény megjelenítő oszlop */}
        <main className="results-column">
          {/* <nav className="filter-tabs">
            <button className="active">Indulás</button>
            <button>Érkezés</button>
            <button>Menetidő</button>
            <button>Átszállás</button>
            <button>Szolgáltatások</button>
          </nav> */}
          

          {viszonylatok.map((result, index) => (
            <div key={index} className="route-card">
              <div className="summary-row">
                <span className="time">{result.indul}</span>
                <div className="timeline-segment">
                  <div className="timeline-bar"></div>
                  <span className="duration">{result.menetido}</span>
                </div>
                <span className="time">{result.erkez}</span>
                <span className="transfers">{result.atszallas}</span>
                <div className="service-icons">
                  {/* Ikonok helye */}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* Részletes járat információ - Ez lenne a lenyitott rész */}
              <div className="details-expanded">
                <div className="detail-header">
                  <span className="departure-time">{result.indul}</span>
                  <span className="train-info"> {result.jarat}</span>
                  <div className="ticket-actions">
                    <span className="seat-count"></span>
                  </div>
                </div>

                <div className="route-timeline">
                  {/* Ez a rész a vonalak és állomások diagramja lenne */}
                  <div className="station-row">
                    <div className="timeline-dot"></div>
                    <div className="station-name">{result.induloallomas}</div>
                  </div>
                  <div className="journey-info"></div>
                  <div className="station-row">
                    <div className="timeline-dot"></div>
                    <div className="station-name">{result.celallomas}</div>
                    {/* <span className="arrival-time">18:09</span> */}
                  </div>
                </div>
              </div>

              {/* Információk és jegyváltás alsó sáv */}
              <div className="bottom-info-bar">
                <div className="info-block">
                  <h4></h4>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>

                <div className="ticket-info">
                  <h4>Jegyvételek:</h4>
                  {/* Ez a link elhagyható, ha csak a gomb kell */}
                  {/* <a href={result.infoLink}>Szeged &gt; Budapest-Nyugati</a> */}

                  {/* A Jegyek gomb itt van elhelyezve, a box jobb alján */}
                  <button
                    className="bottom-right-ticket-button"
                    // 4. 👈 A Jegyek gombhoz rendeljük az átirányítást
                    onClick={() => handleTicketClick(result)}
                  >
                    Jegyek
                  </button>
                  <h4>Vissza a főoldalra:</h4>
                  {/* Ez a link elhagyható, ha csak a gomb kell */}
                  {/* <a href={result.infoLink}>Szeged &gt; Budapest-Nyugati</a> */}

                  {/* A Jegyek gomb itt van elhelyezve, a box jobb alján */}
                  <button
                    className="bottom-right-ticket-button"
                    // 4. 👈 A Jegyek gombhoz rendeljük az átirányítást
                    onClick={() => handleMainClick(result)}
                  >
                    Vissza
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Viszonylat;
