import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./jegy.css";

const Jegy = () => {
  const navigate = useNavigate();
  const [jegy, setJegy] = useState(null);

  useEffect(() => {
    const mentett = JSON.parse(localStorage.getItem("foglalas"));
    if (mentett) {
      setJegy(mentett);
    }
  }, []);

  if (!jegy) {
    return (
      <div style={{ padding: 40 }}>
        <p>Nincs kiválasztott jegy.</p>
        <p>Menj vissza és válassz járatot.</p>
      </div>
    );
  }

  return (
    <div className="jegy-tarto">
      <h2>{jegy.honnan} → {jegy.hova}</h2>

      <p><strong>Indulás:</strong> {jegy.idopont}</p>
      <p><strong>Ár:</strong> {jegy.ar} Ft</p>

      <div className="jegy-kepek">
        {jegy.viszonylat.kepek.map((kep, i) => (
          <img key={i} src={kep} alt="állomás" />
        ))}
      </div>

      <button onClick={() => navigate("/foglalas")}>
        Foglalás
      </button>
    </div>
  );
};

export default Jegy;
