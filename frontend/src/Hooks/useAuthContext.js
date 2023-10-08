import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "UseAuthcontext must be used inside an useauthcontext provider"
    );
  }

  return context;
};
