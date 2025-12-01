// LoginForm.jsx
import React, { useState } from "react";
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setJelszo] = useState("");
  const [error, setError] = useState("");
  
  async function bejelentkezes(event) {
    event.preventDefault();
    console.log({
      email,
      jelszo,
    });


    // const response = await fetch('http://localhost:3500/api/register-frontend', {
    // 	method: 'POST',
    // 	headers: { 'Content-Type': 'application/json' },
    // 	body: JSON.stringify({ nev, email, jelszo })
    // });

    // const valasz = await response.json();

    // if (response.ok) {
    // 	window.alert(valasz.msg);
    // 	window.location.href = '/login';
    // } else {
    // 	window.alert(valasz.msg);
    // }
  }

  const validate = () => {
    if (!email.trim()) return "Kérlek add meg az e-mail címet.";
    // egyszerű e-mail ellenőrzés
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Érvényes e-mail címet adj meg.";
    if (password.length < 6) return "A jelszónak legalább 6 karakter hosszúnak kell lennie.";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");

     if (email === "markus.rego.benedek@szbiszeged.hu" && password === '123456789')
      {
        window.location.href = '/jegy';
      }
    // ha nincs onLogin prop, alapértelmezett konzol-üzenet
    // if (typeof onLogin === "function") {
    //   // onLogin({ email, password });
     
    // } else {
    //   console.log("Login:", { email, password });
    // }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // regisztrációhoz lehet más logika; itt továbbküldjük az adatokat callback-be
    if (typeof onRegister === "function") {
      onRegister({ email, password });
    } else {
      // alapértelmezett: átirányítás regisztrációs oldalra
      window.location.href = "/register";
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      aria-labelledby="login-heading"
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h2 id="login-heading">Bejelentkezés</h2>

      <div>
        <label htmlFor="email">E-mail cím</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="e-mail cím"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
      </div>

      <div>
        <label htmlFor="jelszo">Jelszó</label>
        <input
          id="jelszo"
          name="jelszo"
          type="password"
          placeholder="Írja be a jelszavát."
          value={password}
          onChange={(e) => setJelszo(e.target.value)}
          required
          aria-required="true"
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
      </div>

      {error && (
        <div role="alert" aria-live="polite" style={{ color: "crimson" }}>
          {error}
        </div>
      )}

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit"  style={{ flex: 1, padding: "10px 12px" }} onClick={bejelentkezes}>
          Bejelentkezés 
        </button>

        <button
          type="button"
          onClick={handleRegister}
          style={{
            flex: 1,
            padding: "10px 12px",
            background: "transparent",
            border: "1px solid #ccc",
          }}
        >
          Regisztráció
        </button>
      </div>
    </form>
  );
}
