import React, { useEffect, useState } from "react";
import "./Menetrend.css";
import { Link } from "react-router-dom";

export default function Menetrend() {
  const [from, setFrom] = useState("");
  // const [via, setVia] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [menetrendek, setMenetrendek] = useState([]);
  // const [time, setTime] = useState("00:00");

  let allomasok = [
"Szeged", "Szatymaz", "Kistelek", "Kiskunfélegyháza", "Kecskemét", "Nagykőrös", "Cegléd", "Ferihegy", "Kőbánya-kispest(KÖKI)", "Zugló", "Budapest-Nyugati",
"Szeged-Rókus", "Hódmezővásárhelyi-Népkert", "Hódmezővásárhely Vasútállomás", "Kútvölgy", "Székkutas", "Orosháza", "Orosházi-tanyák", "Csorvás", "Csorvás-alsó",
"Telekgerendás", "Békéscsaba", "Kiskundorozsma", "Jánosszállás", "Vilmaszállás", "Őszeszék", "Balástya", "Kapitányság", "Kisteleki-szőlők", "Csengele",
"Petőfiszállási-tanyák", "Petőfiszállás", "Selymes", "Kunsszállás", "Városföld", "Nyársapát", "Üllő", "Katonatelep",
"Budapest-Déli","Budapest-Kelenföld","Budaörs","Törökbálint","Biatorbágy","Herceghalom","Bicske alsó","Bicske","Szár","Szárliget","Alsógalla","Tatabánya","Vérteszőlős","Tóvároskert","Tata","Almásfüzitő","Almásfüzitő felső","Szőny","Komárom","Ács","Nagyszentjános","Győrszentiván","Győr-Gyárváros","Győr",
"Budapest-Keleti","Sárbogárd","Dombóvár","Szentlőrinc","Pécs",
"kőbánya-alsó","Pestszentlőrinc","Szemeretelep","Vecsés","Vecsés-Kertekalja","Hosszúberek-Péteri","Monor","Monorierdő","Pilis","Albertirsa","Ceglédbercel","Ceglédbercel-Cserő","Budai út","Abony","Szolnok","Szajol","Törökszentmiklós","Fegyvernek-Örményes","Kisújszállás","Karcag","Püspökladány","Kaba","Hajdúszoboszló","Ebes","Debrecen",
"Rákoshegy","Nyíregyháza","Tokaj","szerencs","Miskolc-Tiszai","Füzesabony","Hatvan","Kisvárda","Záhony","Nyírábrány","Hegyeshalom","Mosonmagyaróvár","Debrecen-Szabadságtelep","Debrecen-Kondoros","Nagycsere","Haláp","Vámospécs","Demecser","Mezőkövesd","Nyékládháza","Kőbánya-felső","Rákos","Akadémiaújtelep","Rákosliget","Rákoscsaba-Újtelep","Pécel","Isaszeg","Gödöllő","Máriabesnyő","Bag","Aszód","Tura","Vámosgyörk","Adács","Karácsond","Ludas","Nagyút","Kál-Kápolna","Szilhalom","Mezőkövesd-felső","Mezőkeresztes-Mezőnyárád","Csincse","Emőd","Rakamaz","Rákoscsaba"
  ];

  useEffect(() => {
    const leker = async () => {
      const response = await fetch(
        "http://localhost:3500/api/schedules-frontend"
      );
      const valasz = await response.json();
      console.log(valasz);

      if (response.ok) {
        setMenetrendek(valasz.schedules);
      }
    };
    leker();
  }, []);

  const feldolgoz = (e) => {
    e.preventDefault();
    console.log({ from, to, date });
    menetrendek.forEach((elem) => {
      let tartalmaz = elem.allomasok.filter((item) => item === to);
      if (
        elem.induloallomas === from &&
        (elem.celallomas === to || tartalmaz.length > 0)
      ) {
        console.log(elem);
        window.location.href = `/viszonylat`;
      }
    });
  };

  return (
    <form
      style={{
        maxWidth: 450,
        margin: "0 auto",
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 12,
        background: "#fff",
      }}
    >
      {/* közlekedési eszközök */}
      <div style={{ marginBottom: 12 }}>
        <label>Közlekedési eszköz: </label>
        🚆 🚌 🚋
      </div>

      {/* Honnan */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="from">Honnan?</label>
        <select
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        >
          <option value="">Válassz...</option>
          {allomasok.map((allomas) => (
            <option key={allomas} value={allomas}>
              {allomas}
            </option>
          ))}
        </select>
      </div>

      {/* Hova */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="to">Hova?</label>
        <select
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        >
          <option value="">Válassz...</option>
          {allomasok.map((allomas) => (
            <option key={allomas} value={allomas}>
              {allomas}
            </option>
          ))}
        </select>
      </div>

      {/* Mikor */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="date">Mikor?</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "95%", padding: 8, marginTop: 6 }}
          />
        </div>
      </div>

      {/* keresés */}
      <button
        onClick={(event) => feldolgoz(event)}
        style={{
          width: "100%",
          padding: "12px 0",
          background: "#ffd500",
          border: "none",
          borderRadius: 6,
          fontSize: 16,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🔍 Keresés
      </button>
    </form>
  );
}
