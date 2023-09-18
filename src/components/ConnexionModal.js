import React from "react";
import Modal from "./Modal";

const ConnexionModal = () => {
  const [wantToCreateUser, setWantToCreateuser] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordMatching, setIsPasswordMatching] = useState(false);
  return (
    <Modal>
      {wantToCreateUser ? (
        <form>
          <label htmlFor="userInput">Renseignez votre identifiant :</label>
          <input type="text" id="userInput" placeholder="votre id" />
          <label htmlFor="passwordInput">Renseignez votre mot de passe :</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="votre mode de passe"
          />
          <button type="submit">connection</button>
          <p>Vous n'avez pas encore de compte ?</p>
          <button onClick={() => setWantToCreateuser(true)}>s'inscrire</button>
        </form>
      ) : (
        <form>
          <button onClick={() => setWantToCreateuser(false)}>
            revenir à la page de connection
          </button>
          <label htmlFor="userInput">
            Renseignez votre nouvel identifiant :
          </label>
          <input type="text" id="userInput" placeholder="votre id" />
          <label htmlFor="passwordInput">Renseignez votre mot de passe :</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="votre mode de passe"
          />
          <label htmlFor="passwordVerifInput">
            Confirmer votre mot de passe :
          </label>
          <input
            type="password"
            id="passwordVerifInput"
            placeholder="votre mode de passe"
          />
          {errorMessage && <p id="error">{errorMessage}</p>}
          <button type="submit">s'inscrire</button>
          <p>Vous n'avez pas encore de compte ?</p>
        </form>
      )}
    </Modal>
  );
};

export default ConnexionModal;
