import React from "react";
import UserPanel from "@/components/UserPanel";

const News = () => {
  return (
    <section>
      <UserPanel
        allowSignUp={true}
        securityItem={"newlife"}
        loginUrl={"http://romainfouillarondev.fr"}
        signupUrl={"http://romainfouillarondev.fr"}
      />
    </section>
  );
};

export default News;
