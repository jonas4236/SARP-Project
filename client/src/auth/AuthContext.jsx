import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Api from "../helpers/Api";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(secureLocalStorage.getItem("user")) || null
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("staff")) || null
  );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("a_name")) || null
  );

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/login/users`,
        email,
        password
      );
      if (res.data.status === "success") {
        const result = res.data;
        const name = result.results.username;
        setUsername(name);
        setCurrentUser(result);
        Swal.fire({
          title: "เข้าสู่ระบบ สำเร็จแล้ว!",
          text: "คุณคือผู้ปกครอง! คุณสามารถเช็คการเข้าเรียนของบุตรหลานท่านได้เท่านั้น",
          icon: "success",
        });
      } else {
        setCurrentUser(null);
        setUsername(null);
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
      await axios.get(`${import.meta.env.VITE_API}/logout`);
      setCurrentUser(null);
      setUsername(null);
      location.reload(true);
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  useEffect(() => {
    secureLocalStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    secureLocalStorage.setItem("a_name", JSON.stringify(username));
  }, [username]);

  return (
    <AuthContext.Provider value={{ username, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
