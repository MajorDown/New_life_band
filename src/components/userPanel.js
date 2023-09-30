"use client";
import React, { useEffect, useState } from "react";
import { useUserContext } from "@/contexts/UserContext";

const UserPanel = ({ allowSignUp, securityItem, loginUrl, signupUrl }) => {
  const { userId, updateUserId } = useUserContext();
  const [isConnected, setIsConnected] = useState(false);
  const [wantToCreateUser, setWantToCreateuser] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerif, setNewPasswordVerif] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPasswordSecured, setIsPasswordSecured] = useState(false);
  const [isPasswordMatching, setIsPasswordMatching] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  // VERIFICATION DE LA PRESENCE D'UN USERID
  useEffect(() => {
    if (!userId) setIsConnected(false);
    else setIsConnected(true);
  }, [isConnected, userId]);

  // VERIFICATIONS SUR LE PASSSWORD
  useEffect(() => {
    // VERIFICATION DU NIVEAU DE SECURITE DU PASSWORD
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(newPassword)) {
      setIsPasswordSecured(false);
      setErrorMessage(
        "Le mot de passe doit contenir au moins 12 caractères, incluant une lettre, un chiffre et un caractère spécial (@$!%*?&)"
      );
    } else {
      setIsPasswordSecured(true);
      setErrorMessage(null);
    }
    // VERIFICATION DE LA CONCORDANCE DES DEUX PASSWORDS
    if (
      wantToCreateUser &&
      newPassword &&
      newPasswordVerif &&
      newPassword !== newPasswordVerif
    ) {
      setErrorMessage("Il y a une différence entre vos deux passwords !");
      setIsPasswordMatching(false);
    } else {
      setErrorMessage(null);
      setIsPasswordMatching(true);
    }
  }, [wantToCreateUser, newPassword, newPasswordVerif]);

  // VERIFICATION QUE LE FORMULAIRE D'INSCRIPTION EST EN ORDRE
  useEffect(() => {
    if (mail && isPasswordSecured && isPasswordMatching)
      setIsFormCompleted(true);
    else setIsFormCompleted(false);
  }, [mail, isPasswordSecured, isPasswordMatching]);

  // REQUETE DE CONNEXION
  const login = async (event) => {
    event.preventDefault();
    // VERIFICATION QUE LOGINURL A ETE RENSEIGNE DANS LES PROPS
    if (!loginUrl) {
      setErrorMessage(
        "Erreur : ce formulaire ne contient pas d'adresse pour la requête"
      );
      return;
    }
    // REQUETE
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user, password: password }),
      });
      // SI LA REPONSE EST OK
      if (window && response.ok) {
        const data = await response.json();
        localStorage.setItem(`${securityItem}_userId`, data.userId);
        localStorage.setItem(`${securityItem}_token`, data.token);
        updateUserId(data.userId);
        setUser("");
        setPassword("");
        // SI LA REPONSE RENVOI UNE ERREUR
      } else if (response.status === 400) {
        throw new Error("identifiant ou mot de passe inconnu");
      } else if (response.status === 500) {
        throw new Error("erreur du serveur lors de la requète");
      } else {
        throw new Error("erreur inconnue lors de la requète");
      }
    } catch (error) {
      setErrorMessage(`Erreur : ${error.message}`);
    }
  };

  // REQUETE D'INSCRIPTION
  const signup = async (event) => {
    event.preventDefault();
    // VERIFICATION QUE SIGNUPURL A ETE RENSEIGNE DANS LES PROPS
    if (!signupUrl) {
      setErrorMessage(
        "Erreur : ce formulaire ne contient pas d'adresse pour la requête d'inscription"
      );
      return;
    }
    // REQUETE
    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user,
          password: newPassword,
          email: mail,
        }),
      });
      // Si LA REPONSE EST OK
      if (window && response.ok) {
        const data = await response.json();
        localStorage.setItem(`${securityItem}_userId`, data.userId);
        localStorage.setItem(`${securityItem}_token`, data.token);
        updateUserId(data.userId);
        setMail("");
        setUser("");
        setNewPassword("");
        setNewPasswordVerif("");
        // SI LA REPONSE RENVOI UNE ERREUR
      } else if (response.status === 400) {
        throw new Error("La requète a échoué.");
      } else if (response.status === 409) {
        throw new Error("l'email ou l'identifiant renseigné existe déjà.");
      } else if (response.status === 500) {
        throw new Error("Erreur serveur lors de la requète.");
      } else {
        throw new Error("Erreur inconnue lors de la requète.");
      }
    } catch (error) {
      setErrorMessage(`Erreur : ${error.message}`);
    }
  };

  // REQUETE DE DECONNEXION
  const logout = () => {
    localStorage.removeItem(`${securityItem}_userId`);
    localStorage.removeItem(`{securityItem}_token`);
    updateUserId(null);
  };

  // RENDER
  return (
    <div id="UserPanel">
      {/*SI L'UTILISATEUR EST CONNECTE*/}
      {isConnected && (
        <div>
          <h2>Vous souhaitez vous déconnecter ?</h2>
          <button onClick={() => logout()}>déconnection</button>
        </div>
      )}
      {/*SI L'UTILISATEUR N'EST PAS CONNECTE*/}
      {!isConnected && !wantToCreateUser && (
        <form onSubmit={(event) => login(event)}>
          <h2>Vous souhaitez vous connecter ?</h2>
          <label htmlFor="userInput">Renseignez votre identifiant :</label>
          <input
            required
            type="text"
            id="userInput"
            placeholder="votre id"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <label htmlFor="passwordInput">Renseignez votre mot de passe :</label>
          <input
            required
            type="password"
            id="passwordInput"
            placeholder="votre mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errorMessage && <p id="error">{errorMessage}</p>}
          <button type="submit">connection</button>
          {allowSignUp && (
            <>
              <p>Vous n'avez pas encore de compte ?</p>
              <button onClick={() => setWantToCreateuser(true)}>
                s'inscrire
              </button>
            </>
          )}
        </form>
      )}
      {/*SI L'UTILISATEUR N'EST PAS CONNECTE ET VEUT CREER UN COMPTE*/}
      {allowSignUp && !isConnected && wantToCreateUser && (
        <form onSubmit={(event) => signup(event)}>
          <h2>Vous souhaitez créer un compte</h2>
          <button onClick={() => setWantToCreateuser(false)}>
            revenir à la page de connection
          </button>
          <label htmlFor="mailInput">
            Renseignez une adresse email valide :
          </label>
          <input
            type="email"
            id="mailInput"
            placeholder="votre email"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
          <label htmlFor="userInput">
            Renseignez votre nouvel identifiant :
          </label>
          <input
            required
            type="text"
            id="userInput"
            placeholder="votre id"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <label htmlFor="passwordInput">Renseignez votre mot de passe :</label>
          <input
            required
            type="password"
            id="passwordInput"
            placeholder="votre mot de passe"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <label htmlFor="passwordVerifInput">
            Confirmer votre mot de passe :
          </label>
          <input
            required
            type="password"
            id="passwordVerifInput"
            placeholder="votre mode de passe"
            value={newPasswordVerif}
            onChange={(event) => setNewPasswordVerif(event.target.value)}
          />
          {errorMessage && <p id="error">{errorMessage}</p>}
          {isFormCompleted ? (
            <>
              <button type="submit">s'inscrire</button>
              <p>
                en cliquant sur s'inscrire, vous acceptez la charte
                d'utilisation du site
              </p>
            </>
          ) : (
            <button type="submit" disabled>
              s'inscrire
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default UserPanel;
