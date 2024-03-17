import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-flexblue border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-bold">
                  &copy; Copyright 2024. All Rights Reserved by <a href="https://www.linkedin.com/in/ashmit-shukla-895813227/" className="hover:underline">
              Ashmit Shukla
            </a> .
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-700">
              About
              </h3>
              <ul>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://www.linkedin.com/in/ashmit-shukla-895813227/"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4 hover:underline">
                <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://github.com/Ashmit7465"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://www.instagram.com/ashmit._.7465/"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700 hover:underline"
                    to="/"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-700">
                Navigation
              </h3>
              <ul>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-700">
                Legals
              </h3>
              <ul>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
