import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState,useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineLanguage } from "react-icons/md"
import {RiAuctionLine} from "react-icons/ri"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location.pathname)
  const [counter, setCounter] = useState(0);
  // const user = localStorage.getItem("token");
  const user = true;
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  var color = localStorage.getItem("color");
  useEffect(() => {
    if (counter === 1) {
      console.log("counter", counter);
      var addScript = document.createElement("script");
      addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      setCounter(2);
    }
    setCounter(1);
  }, [counter]);
  const googleTranslateElementInit = () => {
    // if (counter === 1) {
    console.log("googleTranslateElementInit");
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "hi,en,bn,fr,mr",
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      "google_translate_element",
    );
    // setCounter(2);
    // }
  };
  return (
    <div className="w-full flex px-24 py-4 justify-between items-center">
      <div className="flex items-center gap-2">
        <RiAuctionLine className="text-2xl text-white" />
        <h1
          className={`text-2xl font-bold underline decoration-blue-500
          }`}
        >
        WinWise
        </h1>
      </div>

      {user ? (
        <div className="flex gap-4 items-center">
          <button
            onClick={() => logout()}
            className={`text-gray-100 text-sm px-8 py-4 bg-${color}-900 rounded-full`}
          >
            Logout
          </button>
          <div 
          id="google_translate_element"></div>
        </div>
      ) : (
        <div className="flex gap-12 items-center">
          <Link to="/login">
            <button className="font-semibold">Login</button>
          </Link>
          <Link to="/register">
            <button
              className={`text-gray-100 px-8 py-3 bg-${color}-500 rounded-full`}
            >
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
