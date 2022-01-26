import { AuthContex } from "../contex/AuthContex";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContex);

  if (!context) {
    throw Error("use AuthContext must be inside AuthContextProvider");
  }

  return context;
};
