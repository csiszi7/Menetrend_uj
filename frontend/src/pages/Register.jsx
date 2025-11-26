import { useState } from "react";
import "./Register.css";
export default function Register() {
  const [keresztNev, setKeresztNev] = useState("");
  const [vezetekNev, setVezetekNev] = useState("");
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [jelszoUjra, setJelszoUjra] = useState("");
  // const [szuletesiDatum, setszuletesiDatum] = useState("");

  async function regisztracio(event) {
    event.preventDefault();
    console.log({
      keresztNev,
      vezetekNev,
      email,
      jelszo,
      jelszoUjra,
      // szuletesiDatum,
    });

    if (jelszo !== jelszoUjra) {
      window.alert("A jelszavak nem egyeznek!");
      return;
    }

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (typeof onLogin === "function") {
      onLogin({ email, jelszo });
    } else {
      // alapértelmezett: átirányítás regisztrációs oldalra
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-center">Regisztráció</h1>

        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          E-mail cím
        </label>
        <input
          type="email"
          placeholder="E-mail cím"
          id="email"
          name="email"
          value={email}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          htmlFor="password"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          Jelszó
        </label>
        <input
          type="password"
          placeholder="jelszó"
          id="password"
          name="password"
          value={jelszo}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setJelszo(e.target.value)}
          required
        />

        <label
          htmlFor="passwordConfirm"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          Jelszó ismétlés
        </label>
        <input
          type="password"
          placeholder="Jelszó ismétlés"
          id="passwordConfirm"
          name="passwordConfirm"
          value={jelszoUjra}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setJelszoUjra(e.target.value)}
          required
        />

        <label
          htmlFor="lastName"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          Vezetéknév
        </label>
        <input
          type="text"
          placeholder="Vezetéknév"
          id="lastName"
          name="lastName"
          value={vezetekNev}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setVezetekNev(e.target.value)}
        />

        <label
          htmlFor="firstName"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          Keresztnév
        </label>
        <input
          type="text"
          placeholder="Keresztnév"
          id="firstName"
          name="firstName"
          value={keresztNev}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setKeresztNev(e.target.value)}
        />

        {/* <label
          htmlFor="birthDate"
          className="block text-sm font-medium mb-1 text-gray-800"
        >
          Születési dátum
        </label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={szuletesiDatum}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          onChange={(e) => setszuletesiDatum(e.target.value)}
        /> */}

        <div className="jelolo">
          <input type="checkbox" id="privacy" name="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Az Adatkezelési tájékoztatót elfogadom, az abban foglalt
            adatkezeléshez hozzájárulok
          </label>
        </div>

        <div className="jelolo">
          <input type="checkbox" id="terms" name="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-700">
            A felhasználási feltételeket elfogadom
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          onClick={regisztracio}
        >
          Regisztráció
        </button>
        <button
          type="button"
          onClick={handleLogin}
          style={{
            flex: 1,
            padding: "10px 12px",
            background: "transparent",
            border: "1px solid #ccc",
          }}
        >
          Bejelentkezés
        </button>
      </form>
    </div>
  );
}
