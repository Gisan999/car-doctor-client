import { useContext } from "react";
import { AuthContext } from "../Provieder/AuthProvider";


const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;