import React from "react";
import './Register.css'
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-center">Regisztráció</h1>

        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">E-mail cím</label>
        <input
          type="email"
          placeholder="E-mail cím"
          id="email"
          name="email"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          required
        />

        <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-800">Jelszó</label>
        <input
          type="password"
          placeholder="jelszó"
          id="password"
          name="password"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          required
        />

        <label htmlFor="passwordConfirm" className="block text-sm font-medium mb-1 text-gray-800">Jelszó ismétlés</label>
        <input
          type="password"
          placeholder="Jelszó ismétlés"
          id="passwordConfirm"
          name="passwordConfirm"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
          required
        />

        <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-800">Vezetéknév</label>
        <input
          type="text"
          placeholder="Vezetéknév"
          id="lastName"
          name="lastName"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
        />

        <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-800">Keresztnév</label>
        <input
          type="text"
          placeholder="Keresztnév"
          id="firstName"
          name="firstName"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
        />

        <label htmlFor="birthDate" className="block text-sm font-medium mb-1 text-gray-800">Születési dátum</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          className="w-full mb-3 p-2 border border-gray-300 rounded text-gray-900"
        />

        <div className="flex items-center mb-2">
          <input type="checkbox" id="privacy" name="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Az Adatkezelési tájékoztatót elfogadom, az abban foglalt adatkezeléshez hozzájárulok
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" name="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-700">
            A felhasználási feltételeket elfogadom
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          Regisztráció
        </button>
      </form>
    </div>
  );
}
