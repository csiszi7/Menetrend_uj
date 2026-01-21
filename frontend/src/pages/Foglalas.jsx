import { useEffect, useState } from "react";
import "./Foglalas.css";

const Foglalas = () => {
  const [adat, setAdat] = useState(null);

  useEffect(() => {
    const mentett = JSON.parse(localStorage.getItem("foglalas"));
    if (mentett) {
      setAdat(mentett);
    }
  }, []);

  if (!adat) {
    return <p>Foglalás betöltése...</p>;
  }

  return (
    <div className="foglalas-tarto">
      <h2>{adat.honnan} → {adat.hova}</h2>

      <div className="foglalas-info">
        <p><strong>Indulás:</strong> {adat.idopont}</p>
        <p><strong>Ár:</strong> {adat.ar} Ft</p>
        <p><strong>Járat:</strong> {adat.viszonylat.jarat}</p>
      </div>

      <div className="foglalas-kepek">
        {adat.viszonylat.kepek?.map((kep, i) => (
          <img key={i} src={kep} alt="állomás" />
        ))}
      </div>

      <button className="veglegesites-gomb">
        Foglalás véglegesítése
      </button>
    </div>
  );
};

export default Foglalas;
