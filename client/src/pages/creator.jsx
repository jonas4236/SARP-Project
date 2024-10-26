import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const creator = () => {
  return (
    <>
      <div className="">
        <div className="xl:w-[1170px] mx-auto">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <div className="w-full flex justify-center relative mb-4">
                  <span className="text-[36px] font-semibold text-sky-600">
                    ผู้จัดทำโครงการ
                  </span>
                  <div className="w-[100px] h-[5px] rounded-full bg-sky-500 absolute bottom-0"></div>
                </div>
              </div>
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-2">
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                  <img
                    className="xl:w-[239px] h-[239px] w-full xl:h-[239px] lg:w-[239px] lg:h-[239px] object-contain md:object-cover lg:object-cover xl:object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://res.cloudinary.com/jonasdev/image/upload/v1701691343/profile1_kwxaov.jpg"
                    alt="Bonnie Avatar"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span>นายธนากร แสงมี</span>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      Front-End Developer
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      นักเรียน นักศึกษาแผนกเทคนิคคอมพิวเตอร์ ปวส.4/1
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://www.facebook.com/Thanakorn.Sangmee/"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <div className="flex items-center">
                        <Link
                          className="text-gray-500 hover:text-gray-900"
                          to={"https://twitter.com/JonasDeveloper_"}
                        >
                          <FaXTwitter />
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="xl:w-[239px] h-[239px] w-full xl:h-[239px] lg:w-[239px] lg:h-[239px] object-contain md:object-cover lg:object-cover xl:object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://res.cloudinary.com/jonasdev/image/upload/v1701691871/profile2_sbzdrs.jpg"
                    alt="Michael Avatar"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span>นายนันทวัฒน์ นันทวิสาร</span>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      UX/Ui Designer
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      นักเรียน นักศึกษาแผนกเทคนิคคอมพิวเตอร์ ปวส.4/1
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100016855698544"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <div className="flex items-center">
                        <Link
                          className="text-gray-500 hover:text-gray-900"
                          to={"https://www.instagram.com/b_twinnn/"}
                        >
                          <FaInstagram />
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="xl:w-[239px] h-[239px] w-full xl:h-[239px] lg:w-[239px] lg:h-[239px] object-contain md:object-cover lg:object-cover xl:object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://res.cloudinary.com/jonasdev/image/upload/v1701691343/profile1_kwxaov.jpg"
                    alt="Michael Avatar"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span>นายธนากร แสงมี</span>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      Back-End Developer
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      นักเรียน นักศึกษาแผนกเทคนิคคอมพิวเตอร์ ปวส.4/1
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://www.facebook.com/Thanakorn.Sangmee/"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <div className="flex items-center">
                        <Link
                          className="text-gray-500 hover:text-gray-900"
                          to={"https://twitter.com/JonasDeveloper_"}
                        >
                          <FaXTwitter />
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="xl:w-[239px] h-[239px] w-full xl:h-[239px] lg:w-[239px] lg:h-[239px] object-contain md:object-cover lg:object-cover xl:object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://res.cloudinary.com/jonasdev/image/upload/v1701691871/profile2_sbzdrs.jpg"
                    alt="Michael Avatar"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span>นายนันทวัฒน์ นันทวิสาร</span>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      Algorithms/Logic
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      นักเรียน นักศึกษาแผนกเทคนิคคอมพิวเตอร์ ปวส.4/1
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100016855698544"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <div className="flex items-center">
                        <Link
                          className="text-gray-500 hover:text-gray-900"
                          to={"https://www.instagram.com/b_twinnn/"}
                        >
                          <FaInstagram />
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default creator;
