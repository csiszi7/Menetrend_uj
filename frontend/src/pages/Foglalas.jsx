import { useEffect, useState } from "react";
import './Foglalas.css';

const Foglalas = (tetel, ar) => {
    const foglalasObj = {
    honnan: honnan,
    hova: hova,
    indulIdo: tetel.indIdoHonnan,
    erkezIdo: tetel.erkIdoHova,
    menetido: viszony[0].idotartam,
    ar: Number(ar.toFixed(0)),
    kepek: viszony[0].kepek
  };


  if (!jegy) return null;

  
  return (
    <div
      className="foglalas-tarto"
      style={{
        padding: '35px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '80px auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 className="cim">
        {jegy.honnan} ↪ {jegy.hova}
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <p><strong>Indulás:</strong> {jegy.indulIdo}</p>
        <p><strong>Érkezés:</strong> {jegy.erkezIdo}</p>
        <p><strong>Menetidő:</strong> {jegy.menetido}</p>
        <p><strong>Ár:</strong> {jegy.ar} Ft</p>
      </div>

      <div
        className="kepek-sor"
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center'
        }}
      >
        <img
          src={jegy.kepek[0]}
          alt="Induló állomás"
          style={{
            width: '320px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />

        <img
          src={jegy.kepek[1]}
          alt="Érkező állomás"
          style={{
            width: '320px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  );
};

export default Foglalas;
