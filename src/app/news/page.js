import React from "react";
import UserPanel from "@/components/userPanel";

const News = () => {
  return (
    <section>
      <UserPanel
        allowSignUp={true}
        securityItem={"major"}
        loginUrl={"http://romainfouillarondev.fr"}
        signupUrl={"http://romainfouillarondev.fr"}
      />
    </section>
  );
};

export default News;
