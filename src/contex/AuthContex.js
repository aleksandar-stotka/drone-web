import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { projectAuth } from "../firebase/config";
import React from "react";
export const AuthContex = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

//sega go definirame <AuthContex> toj e provajder na context

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    //second argument i ititial state
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContex.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
};
