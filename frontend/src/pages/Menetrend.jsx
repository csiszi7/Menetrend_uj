import React, { useEffect, useState } from "react";
import "./Menetrend.css";

export default function Menetrend() {
  const [from, setFrom] = useState("");
  // const [via, setVia] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  // const [time, setTime] = useState("00:00");

  let allomasok = [
    'Szeged', 'Szatymaz', 'Kistelek', 'Kiskunfélegyháza', 'Kecskemét', 'Nagykőrös',
    'Cegléd', 'Ferihegy', 'Kőbánya-kispest', 'Zugló', 'Budapest-Nyugati',
    'Szeged-Rókus','Hódmezővásárhelyi-Népkert ', 'Hódmezővásárhely Vasútállomás',
    'Kútvölgy', 'Székkutas', 'Orosháza', 'Orosházi-tanyák', 'Csorvás',
    'Csorvás-alsó', 'Telekgerendás', 'Békéscsaba', 'Kiskundorozsma', 'Jánosszállás',
    'Vilmaszállás', 'Őszeszék', 'Balástya', 'Kapitányság', 'Kisteleki-szőlők',
    'Csengele', 'Petőfiszállási-tanyák','Petőfiszállás', 'Selymes','Kunsszállás',
    'Városföld', 'Nyársapát','Üllő','Katonatelep'
  ];

  useEffect(() => {
    const leker = async () => {
      const response = await fetch('http://localhost:3500/api/schedules-frontend');
      const valasz = await response.json();
      console.log(valasz);
    }
    leker();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, date});
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        type="submit"
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
