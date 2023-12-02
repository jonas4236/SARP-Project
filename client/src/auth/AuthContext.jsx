import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Api from "../helpers/Api";
import Swal from "sweetalert2";

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${Api}/login`, email, password);
      if (res.data.status === "success") {
        const result = res.data;
        setCurrentUser(result);
        Swal.fire({
          title: "Login successfully!",
          text: "you can add the schedule students now!",
          icon: "success",
        });
      } else {
        setCurrentUser(null);
        Swal.fire({
          text: "Invalid email or password!",
          icon: "error",
        });
      }

      return res.data;
    } catch (err) {
      console.log("err login: ", err);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${Api}/logout`);
      setCurrentUser(null);
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
