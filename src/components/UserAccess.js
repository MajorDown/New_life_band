import { UserContext } from "@/app/layout";
import { useContext, useState } from "react";
import Modal from "./Modal";
import UserPanel from "./UserPanel";

const UserAccess = () => {
  const user = useContext(UserContext);
  const [wantUserPanel, setWantUserPanel] = useState(false);

  return (
    <>
      <div id="userAccess" onClick={() => setWantUserPanel(!wantUserPanel)}>
        <button aria-label="userAccess">
          {user && <p>user: {user}</p>}
          <svg width="218" height="287" viewBox="0 0 218 287">
            <rect width="218" height="287" fill="#00000000" />
            <circle cx="106" cy="75" r="75" fill="#9D773E" />
            <path
              d="M21.9558 201.601C27.1417 164.559 58.8279 137 96.2314 137H116.623C153.656 137 185.144 164.029 190.757 200.633L204 287H10L21.9558 201.601Z"
              fill="#9D773E"
            />
          </svg>
        </button>
      </div>
      {wantUserPanel && (
        <Modal onClick={() => setWantUserPanel(!wantUserPanel)}>
          <UserPanel
            allowSignUp={true}
            securityItem={"newlife"}
            loginUrl={"/api/user/login"}
            signupUrl={"/api/user/signup"}
          />
        </Modal>
      )}
    </>
  );
};

export default UserAccess;
