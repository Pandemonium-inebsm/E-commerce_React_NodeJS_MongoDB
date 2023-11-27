import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/connexion.css"


export function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    // Vérification des champs vides avant de soumettre le formulaire
    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    
  }

  return (

    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label className="form-label" htmlFor="username">
            Nom d'utilisateur:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="form-label" htmlFor="password">
            Mot de passe:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="col-12 text-center">
            <input
              className="login"
              type="submit"
              value="S'authentifier"
            />

          </div>
        </div>
      </form>
    </div>

  );
}
