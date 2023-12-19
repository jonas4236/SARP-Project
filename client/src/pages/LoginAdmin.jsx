import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const LoginAdmin = () => {
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginAdmin, currentAdmin } = useContext(AuthContext);

  const handleSummit = async (e) => {
    e.preventDefault();
    await loginAdmin({ email, password }).then((result) => {
      if (result.status === "success") {
        navigate("/").then(() => {
          location.reload(true);
        });
      } else {
        navigate("/teacher");
      }
    });
  };

  return (
    <>
      <div className="px-4">
        {currentAdmin ? (
          ""
        ) : (
          <>
            <div className="h-[100vh] lg:w-[1170px] xl:w-[1170px] rounded-lg mx-auto">
              <div className="flex gap-4">
                <div className="flex-[1] flex justify-center">
                  <div className="h-[100vh] flex items-center">
                    <div className="p-8 h-max bg-opacity-75 z-50 rounded-lg lg:w-[439px] xl:w-[439px]">
                      <div className="w-full">
                        <div className="mt-4">
                          <div className="">
                            <div className="">
                              <img
                                src="https://res.cloudinary.com/jonasdev/image/upload/v1702551478/sarp-logo-figma_qh583e.png"
                                alt="SARP_LOGO"
                              />
                            </div>
                            <form onSubmit={handleSummit}>
                              <div className="w-full mt-4">
                                <input
                                  className="w-full rounded-[10px_10px_0_0]"
                                  type="email"
                                  name=""
                                  id=""
                                  placeholder="Username & Email"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                  className="w-full rounded-[0_0_10px_10px]"
                                  type="password"
                                  name=""
                                  id=""
                                  placeholder="Password"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                              <div className="flex flex-col mt-4">
                                <button className="py-2 bg-gradient-to-r from-sky-500 to-emerald-300 rounded-lg text-white font-medium">
                                  เข้าสู่ระบบ
                                </button>
                                <Link to={"/help"}>
                                  <div className="w-full flex justify-between mt-2">
                                    <button className="text-[#2F80ED] font-medium">
                                      ลืมรหัสผ่าน
                                    </button>
                                    <Link to={"/login"}>
                                      <button className="text-[#2F80ED] font-medium">
                                        ผู้ปกครอง
                                      </button>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginAdmin;
