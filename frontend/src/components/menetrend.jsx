import React, { useState } from "react";

export default function Menetrend() {
  const [from, setFrom] = useState("");
  const [via, setVia] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("00:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, via, to, date, time });
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
        <span role="img" aria-label="train">🚆</span>{" "}
        <span role="img" aria-label="bus">🚌</span>{" "}
        <span role="img" aria-label="tram">🚋</span>
      </div>

      {/* Honnan */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="from">Honnan?</label>
        <input
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="(Szeged)"
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
      </div>

      {/* Érintve */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="via">Érintve</label>
        <input
          id="via"
          value={via}
          onChange={(e) => setVia(e.target.value)}
          placeholder="(opcionális)"
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
      </div>

      {/* Hova */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="to">Hova?</label>
        <input
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
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
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="time">Hánykor?</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
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
