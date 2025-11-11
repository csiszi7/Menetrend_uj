import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form action="/login" className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Regisztráció</h1>

        <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail cím</label>
        <input
          type="email"
          placeholder="E-mail cím"
          id="email"
          name="email"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <label htmlFor="password" className="block text-sm font-medium mb-1">Jelszó</label>
        <input
          type="password"
          placeholder="jelszó"
          id="password"
          name="password"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <label htmlFor="passwordConfirm" className="block text-sm font-medium mb-1">Jelszó ismétlés</label>
        <input
          type="password"
          placeholder="Jelszó ismétlés"
          id="passwordConfirm"
          name="passwordConfirm"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Vezetéknév</label>
        <input
          type="text"
          placeholder="Vezetéknév"
          id="lastName"
          name="lastName"
          className="w-full mb-3 p-2 border rounded"
        />

        <label htmlFor="firstName" className="block text-sm font-medium mb-1">Keresztnév</label>
        <input
          type="text"
          placeholder="Keresztnév"
          id="firstName"
          name="firstName"
          className="w-full mb-3 p-2 border rounded"
        />

        <label htmlFor="birthDate" className="block text-sm font-medium mb-1">Születési dátum</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          className="w-full mb-3 p-2 border rounded"
        />

        <div className="flex items-center mb-2">
          <input type="checkbox" id="privacy" name="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm">Az Adatkezelési tájékoztatót elfogadom, az abban foglalt adatkezeléshez hozzájárulok</label>
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" name="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">A felhasználási feltételeket elfogadom</label>
        </div>

        <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white font-medium">Regisztráció</button>
      </form>
    </div>
  );
}
