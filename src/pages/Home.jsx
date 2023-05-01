import React, { Fragment, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import art from "../assets/videos/art.mp4";
import jewellery from "../assets/videos/jewellery.mp4";
import vehicle from "../assets/videos/vehicle.mp4";
import wine from "../assets/videos/wine2.mp4";
import antiques from "../assets/videos/Antiques.mp4";
import { Pannellum } from "pannellum-react";
import books from "../assets/videos/books.mp4";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { beaches, temples } from "./PreferenceData"
import realE1 from "../assets/images/realestate/example3.jpg";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  FeatureGroup,
  withLeaflet,
} from "react-leaflet";

import { BiMapPin, BiMap } from "react-icons/bi";
import { events } from "./eventData";
import { CometChat } from "@cometchat-pro/chat";
import { Dialog, Transition } from "@headlessui/react";
import L from "leaflet";
import mark from "../assets/images/markers.png";
import { useTranslation } from "react-i18next";
import Footer from "./FooterHome";

const Card = ({ data, theme }) => {
  const { t } = useTranslation();
  const [openMap, setOpenMap] = useState(false);
  const [openView, setOpenView] = useState(false);




  const cancelButtonRef = useRef(null);

  return (
    <div
      key={data.id}
      className="w-full rounded-xl shadow-lg border relative bg-gray-100"
    >
      <img
        className="rounded-t-xl h-[35vh] w-full"
        src={data.image_url}
        alt=""
      />
      <div className="px-4 py-6">
        <h1 className="text-gray-600 text-xl font-bold mb-2">{t(data.name)}</h1>
        <h1 className="text-gray-400 text-sm mb-4 flex items-center gap-2">
          <HiOutlineLocationMarker className="text-lg" /> {t(data.location)}
        </h1>
        {/* <div className="border-t border-b p-3 flex justify-between items-center">
          <h1 className="text-gray-400"> Date :</h1>
          <h1 className="text-gray-600 text-2xl font-bold">{data.date}</h1>
        </div> */}
        <h1 className="text-sm text-gray-600 py-4">
          Rate : {parseInt(Math.abs(data.latitude % 10))}/10
        </h1>
        <div className="flex justify-between">

          <button
            onClick={() => setOpenView(true)}
            className={`flex items-center gap-2 text-white font-semibold uppercase rounded-full px-6 py-2 ${theme == "emerald"
              ? "bg-emerald-500"
              : theme == "amber"
                ? "bg-amber-500"
                : theme == "sky"
                  ? "bg-sky-500"
                  : theme == "red"
                    ? "bg-red-500"
                    : theme == "violet"
                      ? "bg-violet-500"
                      : "bg-purple-500"
              }`}
          >
            <BiMapPin /> View
          </button>
        </div>
      </div>
      <Transition.Root show={openMap} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenMap}
        >
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-screen min-w-screen items-end justify-center text-center sm:items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[70vw]">
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpenMap(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openView} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenView}
        >
        </Dialog>
      </Transition.Root>
    </div>
  );
};

const Background = ({ backgroundVideo, theme }) => {
  return (
    <video autoPlay loop muted className={`absolute -z-10 w-full h-auto`}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

const Home = () => {
  const [destination, setDestination] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filteredList2, setFilteredList2] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [packages, setPackages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();

  const [theme, setTheme] = useState("blue");
  useEffect(() => {
    localStorage.setItem("color", theme);
  }, [theme])

  localStorage.setItem("color", theme);
  useEffect(() => {
    CometChat.getLoggedinUser().then(
      (user) => {
        console.log("user details:", { user });
      },
      (error) => {
        console.log("error getting details:", { error });
      }
    );

    let usersRequest = new CometChat.UsersRequestBuilder().setLimit(30).build();
    usersRequest.fetchNext().then((userList) => {
      console.log(userList);
    });
  }, []);
  useEffect(() => {
    let filtered = beaches.filter((item) =>
      item.location.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredList(filtered);
  }, [destination]);

  useEffect(() => {
    let filtered = temples.filter((item) =>
      item.location.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredList2(filtered);
  }, [destination]);

  // Array of options
  var options = ["jewellery", "art", "antiques", "wine", "vehicles", "books"];

  // Randomly select an item
  var randomItem = options[Math.floor(Math.random() * options.length)];
  console.log(randomItem);
  return (
    <div className={`w-full h-full relative `}>

      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "jewellery" ? "hidden" : "block"
          }`}
      >
        <source src={jewellery} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "art" ? "hidden" : "block"
          }`}
      >
        <source src={art} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "antiques" ? "hidden" : "block"
          }`}
      >
        <source src={antiques} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "wine" ? "hidden" : "block"
          }`}
      >
        <source src={wine} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "vehicle" ? "hidden" : "block"
          }`}
      >
        <source src={vehicle} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${randomItem !== "books" ? "hidden" : "block"
          }`}
      >
        <source src={books} type="video/mp4" />
      </video>
      <div className="bg-gray-800/40 h-screen">
        <div className="text-gray-100">
          <Navbar color={theme} />
        </div>
        {/* <iframe width="700" height="450" src="https://www.airpano.com/embed.php?3D=polar-urals" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen> </iframe> */}
        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center py-36 px-60 gap-6 h-full"
        >
          <h1 className="text-6xl text-white font-bold text-center leading-snug">
            {t("Bid, Win, Experience: Unleash the Thrill of Auctions!")}
          </h1>
          <h1 className="text-xl text-gray-100 font-medium text-center leading-normal">
            {t("Discover historic collections and masterpieces by modern masters and contemporary giants of today")}
          </h1>
          <Link to="/register" className="">
            <button
              className={`text-gray-100 text-lg capitalize px-10 py-6 bg-blue-900
                } rounded-full`}
            >
              {t("Get Started")}
            </button>
          </Link>
        </div>
      </div>
      <div
        className={` px-36 bg-gradient-to-t from-white
        bg-blue-500`}
      >
        {/*<div className="flex flex-col items-center py-8">
          <h2 className="font-bold text-3xl py-8">{t("Select your theme :")} </h2>
          <div className="flex items-center justify-between gap-8 mt-4">
            <button
              data-aos="zoom-in-up"
              onClick={() => setTheme("red")}
              className="flex flex-col items-center justify-center w-60 h-60 shadow-lg rounded-2xl bg-emerald-900 text-xl font-semibold gap-2 focus:outline focus:shadow-emerald-700/70"
            >
              <img
                className="w-28"
                src="https://cdn-icons-png.flaticon.com/512/1020/1020719.png"
                alt="moun"
              />{" "}
              {t("Mountain")}{" "}
            </button>
            <button
              data-aos="zoom-in-up"
              onClick={() => setTheme("emerald")}
              className="flex flex-col items-center justify-center w-60 h-60 shadow-lg rounded-2xl bg-red-900 text-xl font-semibold gap-2 delay-150 focus:outline focus:shadow-red-700/70"
            >
              <img
                className="w-28"
                src="https://cdn-icons-png.flaticon.com/512/2465/2465330.png"
                alt="moun"
              />
              {t("Temples")}
            </button>
            <button
              data-aos="zoom-in-up"
              onClick={() => setTheme("sky")}
              className="flex flex-col items-center justify-center w-60 h-60 shadow-lg rounded-2xl bg-sky-900 text-xl font-semibold gap-2 delay-150 focus:outline focus:shadow-sky-700/70"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3126/3126507.png"
                className="w-28"
                alt="moun"
              />{" "}
              {t("Beaches")}{" "}
            </button>
            <button
              data-aos="zoom-in-up"
              onClick={() => setTheme("violet")}
              className="flex flex-col items-center justify-center w-60 h-60 shadow-lg rounded-2xl bg-violet-900 text-xl font-semibold gap-2 focus:outline focus:shadow-violet-700/70"
            >
              <img
                className="w-28"
                src="https://cdn-icons-png.flaticon.com/512/4719/4719969.png"
                alt="moun"
              />
              {t("Events")}
            </button>
            <button
              data-aos="zoom-in-up"
              onClick={() => setTheme("amber")}
              className="flex flex-col items-center justify-center w-60 h-60 shadow-lg rounded-2xl bg-amber-100 text-xl font-semibold gap-2 focus:outline focus:shadow-amber-700/70"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3654/3654925.png"
                className="w-28"
                alt="moun"
              />
              {t("Monuments")}{" "}
            </button>
          </div>
        </div> */}
      </div>
      <Pannellum
        width="100%"
        height="500px"

        image={realE1}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
      <Footer />
    </div>
  );
};

export default Home;
