import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import "./Login.css";
import DefaultAPI from "../helpers/DefaultAPI";

const Login = () => {
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, currentUser } = useContext(AuthContext);

  const handleSummit = async (e) => {
    e.preventDefault();
    await login({ email, password }).then((result) => {

      if (result.status === "success") {
        navigate("/").then(() => {
          location.reload(true);
        });
      } else {
        navigate("/login");
      }
    });
  };

  // useEffect(() => {
  //   axios.get(`${DefaultAPI}/login`).then((res) => {
  //     if (res.data.redirectTo) {
  //       window.location.href = res.data.redirectTo;
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="px-4">
        {currentUser ? (
          ""
        ) : (
          <>
            <div className="h-[80vh] lg:w-[1170px] xl:w-[1170px] rounded-lg my-16 mx-auto bg-[url('https://res.cloudinary.com/jonasdev/image/upload/v1702113852/bg-login_y4scnk.png')] bg-no-repeat">
              <div className="flex gap-4">
                <div className="flex-[1] flex justify-center">
                  <div className="h-[80vh] flex items-center">
                    <div className="p-8 h-max bg-opacity-75 z-50 rounded-lg lg:w-[439px] xl:w-[439px]">
                      <div className="w-full">
                        <div className="mt-4">
                          <div className="">
                            <div className="wrapper">
                              <div className="card-switch">
                                <div className="flip-card__front">
                                  <div className="flex justify-center text-center items-center">
                                    <span className="text-[24px] text-[#323232] font-bold">
                                      Welcome to{" "}
                                      <span className="text-[26px] text-sky-600 font-bold drop-shadow-md">
                                        SARP!
                                      </span>
                                    </span>
                                  </div>
                                  <div className="title">Log in</div>
                                  <form
                                    className="flip-card__form"
                                    onSubmit={handleSummit}
                                  >
                                    <input
                                      className="flip-card__input"
                                      type="email"
                                      placeholder="email"
                                      onChange={(event) =>
                                        setEmail(event.target.value)
                                      }
                                      required
                                    />
                                    <input
                                      className="flip-card__input"
                                      type="password"
                                      placeholder="password"
                                      onChange={(event) =>
                                        setPassword(event.target.value)
                                      }
                                      required
                                    />
                                    <button className="flip-card__btn">
                                      LOGIN
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
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

export default Login;
