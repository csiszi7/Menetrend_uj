import React, { useState } from "react";
import "./Viszonylat.css"; // Feltételezve, hogy használnál CSS-t

const Viszonylat = () => {
  // Példa állapotok
  const [honnan, setHonnan] = useState("SZEGED*");
  const [hova, setHova] = useState("BUDAPEST*");
  const [datum, setDatum] = useState("Ma");
  const [ido, setIdo] = useState("15:47");

  // Példa a megjelenített eredményekre
  const results = [
    {
      indul: "15:44",
      erkez: "18:09",
      menetido: "02:25",
      atszallas: 0,
      jarat: "713 NAPERÉNY INTERCITY",
      kezdoallomas: "Szeged (KÉKI)",
      vegallomas: "Budapest-Nyugati",
      infoLink: "#",
      jegyLink: "#",
    },
  ];

  const handleSearch = () => {
    // Keresési logika ide
    console.log(`Keresés: ${honnan} -> ${hova}, Dátum: ${datum}, Idő: ${ido}`);
  };
  <button 
    className="search-button" 
    onClick={handleSearch} // Ezzel hívjuk meg a függvényt!
  >
    Útvonal keresése
  </button>

  

  return (
    <div className="route-planner-container">
      <header className="header">
        <button className="back-button">← Vissza</button>
        <h1>Útvonal beállítás</h1>
        <h2>SZEGED* &gt; BUDAPEST*</h2>
      </header>

      <div className="content-wrapper">
        {/* Útvonal beállítás oszlop */}
        <aside className="settings-column">
          <div className="input-group">
            <label>Honnan?</label>
            <select value={honnan} onChange={(e) => setHonnan(e.target.value)}>
              <option>SZEGED*</option>
              {/* További opciók */}
            </select>
          </div>

          <div className="input-group">
            <label>Hová?</label>
            <select value={hova} onChange={(e) => setHova(e.target.value)}>
              <option>BUDAPEST*</option>
              {/* További opciók */}
            </select>
          </div>

          <div className="input-group">
            <label>Mikor?</label>
            <select value={datum} onChange={(e) => setDatum(e.target.value)}>
              <option>Ma</option>
              {/* További opciók */}
            </select>
          </div>

          <div className="input-group">
            <label>Hánykor?</label>
            <select value={ido} onChange={(e) => setIdo(e.target.value)}>
              <option>15:47</option>
              {/* További opciók */}
            </select>
          </div>

          <details className="help-section">
            <summary>Súgó</summary>
            <p>Segítség az útvonaltervezéshez...</p>
          </details>
        </aside>

        {/* Eredmény megjelenítő oszlop */}
        <main className="results-column">
          <nav className="filter-tabs">
            <button className="active">Indulás</button>
            <button>Érkezés</button>
            <button>Menetidő</button>
            <button>Átszállás</button>
            <button>Szolgáltatások</button>
          </nav>

          {results.map((result, index) => (
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
                  <span className="train-info">**IC** {result.jarat}</span>
                  <div className="ticket-actions">
                    <span className="seat-count">4</span>
                  </div>
                </div>

                <div className="route-timeline">
                  {/* Ez a rész a vonalak és állomások diagramja lenne */}
                  <div className="station-row">
                    <div className="timeline-dot"></div>
                    <div className="station-name">{result.kezdoallomas}</div>
                  </div>
                  <div className="journey-info">2 óra 25 perc menetidővel</div>
                  <div className="station-row">
                    <div className="timeline-dot"></div>
                    <div className="station-name">{result.vegallomas}</div>
                    <span className="arrival-time">18:09</span>
                  </div>
                </div>
              </div>

              {/* Információk és jegyváltás alsó sáv */}
              <div className="bottom-info-bar">
                
                <div className="info-block">
                  <h4>Információ</h4>
                  <p>Távolság: 191 km</p>
                  <p>Menetidő: 02:25</p>
                  <p>Átszállások: 0</p>
                </div>
                
                <div className="ticket-info">
                  <h4>Jegyvételek:</h4>
                  
                  {/* A Jegyek gomb itt van elhelyezve, a box jobb alján */}
                  <button className="bottom-right-ticket-button">Jegyek</button>
                  
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
