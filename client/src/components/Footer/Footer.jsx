import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto xl:w-[1170px] md:flex-warp p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 SARP™ . All Rights Reserved.
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
