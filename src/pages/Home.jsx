import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import art from "../assets/videos/art.mp4";
import jewellery from "../assets/videos/jewellery.mp4";
import vehicle from "../assets/videos/vehicle.mp4";
import wine from "../assets/videos/wine2.mp4";
import antiques from "../assets/videos/Antiques.mp4";
import { Pannellum } from "pannellum-react";
import books from "../assets/videos/books.mp4";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { beaches, temples } from "./PreferenceData";
import realE1 from "../assets/images/realestate/example3.jpg";

import { CometChat } from "@cometchat-pro/chat";
import { useTranslation } from "react-i18next";
import Footer from "./FooterHome";
import SHOP_DATA from "../shop-data.json";
import CategoryItem from "../components/category-item";
import Jewelry360View from "./3d_render/Jewelry360View";
import { Canvas } from "react-three-fiber";

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
  }, [theme]);

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

  var options = ["jewellery", "art", "antiques", "wine", "vehicles", "books"];
  useEffect(() => {
    let filtered = temples.filter((item) =>
      item.location.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredList2(filtered);
    setRandomItem(options[Math.floor(Math.random() * options.length)]);
  }, [destination]);

  // Array of options
  const [randomItem, setRandomItem] = useState("books");

  // Randomly select an item
  console.log(randomItem);
  return (
    <div className={`w-full h-full relative `}>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "jewellery" ? "hidden" : "block"
        }`}
      >
        <source src={jewellery} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "art" ? "hidden" : "block"
        }`}
      >
        <source src={art} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "antiques" ? "hidden" : "block"
        }`}
      >
        <source src={antiques} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "wine" ? "hidden" : "block"
        }`}
      >
        <source src={wine} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "vehicle" ? "hidden" : "block"
        }`}
      >
        <source src={vehicle} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`absolute -z-10 w-full h-auto ${
          randomItem !== "books" ? "hidden" : "block"
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
            {t(
              "Discover historic collections and masterpieces by modern masters and contemporary giants of today"
            )}
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
      <div className="bg-white px-10">
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
          name="hs1"s
        />
      </Pannellum>
      
      <div>
        <div className="overflow-x-scroll flex px-10">
          {SHOP_DATA.map((item) => {
            // console.log(item);
            return <CategoryItem items={item}></CategoryItem>;
          })}
        </div>
      </div>

      <div className="mx-6">
        <div>
          <h1 className="text-3xl py-3">Upcoming Auctions</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SHOP_DATA.map((item) => {
            // console.log(item);
            const { id, name, imageUrl, price } = item;

            return (
              <div className="w-full h-full flex mx-6 my-3 py-2" id={id}>
                <div
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  className="h-52 w-1/2"
                  href={imageUrl}
                  alt={name}
                />
                <div className="flex-col pl-5">
                  <h3>Date</h3>
                  <h2>{name}</h2>
                  <p>Shop Now - {price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-3xl py-3 mx-6">Trending Lots</h1>
        </div>
        <div className="overflow-x-scroll flex px-10">
          {SHOP_DATA.map((item) => {
            // console.log(item);

            return (
              <div className="mb-4 pb-2 border-2 border-gray-400">
                <CategoryItem items={item}></CategoryItem>
                <button className="text-2xl  border-2 border-blue-100 mx-6 px-4 hover:border-black">
                  FOLLOW
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
