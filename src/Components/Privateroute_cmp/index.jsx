import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { Login } from "../../pages/Login";

export function Privateroute({ element }) {
  const { authenticate } = useContext(AuthContext);
  const nav = useNavigate();

  if (authenticate) {
    return element;
  } else {
    nav("/");
    return <Login />;
  }
}
