import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto xl:w-[1170px] md:flex-warp p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to={"/"}>
              <img
                src={
                  "https://res.cloudinary.com/jonasdev/image/upload/v1702472072/SARP-LOGO_h4qsst.png"
                }
                className="h-16 w-16 mr-3"
                alt="FlowBite Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/jonas4236/SARP-Project"
                    target="_blank"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://medium.com/@jonas4236"
                    target="_blank"
                    className="hover:underline "
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href="https://prnt.sc/ZMSlfRxfN_CG"
                    target="_blank"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 SARP™ . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/joonas42366"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/jonas4236"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
