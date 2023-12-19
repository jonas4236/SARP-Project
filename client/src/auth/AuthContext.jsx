import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(secureLocalStorage.getItem("user")) || null
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(secureLocalStorage.getItem("staff")) || null
  );
  const [username, setUsername] = useState(
    JSON.parse(secureLocalStorage.getItem("a_name")) || null
  );

  // for adminstrator
  const [adminstrator, setAdminstrator] = useState(
    JSON.parse(secureLocalStorage.getItem("adminstrator")) || null
  );

  const updateLocalStorage = (admin) => {
    setCurrentAdmin(admin);
    secureLocalStorage.setItem("staff", JSON.stringify(admin));
    // อื่น ๆ ที่คุณต้องการทำหลังจาก loginAdmin สำเร็จ
  };

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
        setCurrentAdmin(null);
        Swal.fire({
          title: "เข้าสู่ระบบ สำเร็จแล้ว!",
          text: `คุณคือผู้ปกครอง! คุณสามารถเช็คการเข้าเรียนของบุตรหลานท่านได้เท่านั้น`,
          icon: "success",
        });
      } else {
        setCurrentUser(null);
        setUsername(null);
        setCurrentAdmin(null);
        Swal.fire({
          text: "อีเมล หรือ รหัสผ่านของท่านไม่ถูกต้อง!",
          icon: "error",
        });
      }

      if (res.data.status === "success" && res.data.isAdmin === "admin") {
        const result = res.data;
        const name = result.results.username;

        setUsername(name);
        setCurrentUser(null);
        updateLocalStorage(result);

        Swal.fire({
          title: "เข้าสู่ระบบ สำเร็จแล้ว!",
          text: `สวัสดีคุณ ${name}! ยินดีต้อนรับสู่ระบบเช็คชื่อการเข้าเรียน!`,
          icon: "success",
        });
      }

      if (
        res.data.status === "success" &&
        res.data.isAdminstrator === "adminstrator"
      ) {
        const result = res.data;
        const name = result.results.username;

        setUsername(name);
        setCurrentUser(null);
        setAdminstrator(result);
        setCurrentAdmin(null);
        Swal.fire({
          title: "เข้าสู่ระบบ สำเร็จแล้ว!",
          text: `สวัสดีคุณคือ ${name}! ยินดีต้อนรับสู่ระบบเช็คชื่อการเข้าเรียน!`,
          icon: "success",
        });
      }

      return res.data;
    } catch (err) {
      console.log("err login: ", err);
    }
  };

  const loginAdmin = async (email, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/login/staff`,
        email,
        password
      );
      if (res.data.status === "success") {
        const result = res.data;
        const name = result.results.username;
        setUsername(name);
        // เรียกใช้ callback เพื่ออัพเดท secureLocalStorage
        Swal.fire({
          title: "เข้าสู่ระบบ สำเร็จแล้ว!",
          text: `สวัสดีคุณ ${name}! ยินดีต้อนรับสู่ระบบเช็คชื่อการเข้าเรียน!`,
          icon: "success",
        });
      } else {
        setCurrentAdmin(null);
        setUsername(null);
        setCurrentUser(null);
        Swal.fire({
          text: "อีเมล หรือ รหัสผ่านของท่านไม่ถูกต้อง!",
          icon: "error",
        });
      }

      return res.data;
    } catch (err) {
      console.log("err login: ", err);
    }
  };

  const helping = async (day, message) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/support`,
        day,
        message
      );
      const result = res.data;

      return result;
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API}/logout`);
      setCurrentUser(null);
      setUsername(null);
      setCurrentAdmin(null);
      setAdminstrator(null);
      location.reload(true);
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  useEffect(() => {
    secureLocalStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    secureLocalStorage.setItem("staff", JSON.stringify(currentAdmin));
  }, [currentAdmin]);

  useEffect(() => {
    secureLocalStorage.setItem("adminstrator", JSON.stringify(adminstrator));
  }, [adminstrator]);

  useEffect(() => {
    secureLocalStorage.setItem("a_name", JSON.stringify(username));
  }, [username]);

  return (
    <AuthContext.Provider
      value={{
        username,
        currentUser,
        currentAdmin,
        adminstrator,
        helping,
        login,
        loginAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
