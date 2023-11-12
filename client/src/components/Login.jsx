import React from "react";

const Login = () => {
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
                      <form className="flex flex-col px-24">
                        <label htmlFor="username">Username</label>
                        <input
                          className="px-4 rounded-lg"
                          type="text"
                          placeholder="username"
                        />
                        <label className="mt-2" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="px-4 rounded-lg"
                          type="password"
                          placeholder="password"
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
