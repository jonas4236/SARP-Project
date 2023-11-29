import React, { useState } from "react";
import axios from "axios";
import Api from "../helpers/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();

    axios.post(`${Api}/login`, { email, password }).then((result) => {
      if (result.data.status === "success") {
        Swal.fire({
          title: "Login successfully!",
          text: "you can add the schedule students now!",
          icon: "success",
        });
        navigate("/");
      } else {
        // alert("Incorrect email or password! Please try again.");
        Swal.fire({
          text: "Incorrect email or password! Please try again.",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <div className="h-[80vh] w-[1170px] rounded-lg my-16 mx-auto bg-[url('../../public/images/bg-login.png')] bg-no-repeat">
        <div className="flex gap-4">
          <div className="flex-[1] flex justify-center">
            <div className="h-[80vh] flex items-center">
              <div className="bg-white p-8 h-max bg-opacity-75 z-50 rounded-lg w-[539px]">
                <div className="w-full">
                  <div className="flex justify-center text-center items-center px-8">
                    <span className="text-[24px] font-[400] ">
                      Welcome to{" "}
                      <span className="text-[26px] text-sky-600 font-bold drop-shadow-md">
                        SARP
                      </span>
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="">
                      <form
                        onSubmit={handleSummit}
                        className="flex flex-col px-24"
                      >
                        <label htmlFor="email">Email</label>
                        <input
                          className="px-4 rounded-lg"
                          type="text"
                          placeholder="email"
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                        <label className="mt-2" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="px-4 rounded-lg"
                          type="password"
                          placeholder="password"
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />
                        <button className="mt-4 py-2 bg-sky-600 text-white rounded-lg">
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
    </>
  );
};

export default Login;
