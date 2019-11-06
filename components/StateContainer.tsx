import { createContainer } from "unstated-next";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

export const StateContainer = createContainer(() => {
  const [user, setUser] = useState(null);

  function init() {
    axios
      .get("/api/me")
      .then(resp => setUser(resp.data))
      .catch(() => {
        Router.replace("/");
      });
  }

  return {
    init,
    user,
  };
});
