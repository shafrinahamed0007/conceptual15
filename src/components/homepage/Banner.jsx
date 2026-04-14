import React from "react";
import bannerImg from "../../assets/images/hero.png"

const Banner = () => {
  return (
    <div className="min-h-[50vh] container mx-auto mt-10">
      <h2 className="font-bold text-center text-5xl ">
        We Build <br />
        <span className="text-purple-500"> Productive </span> Apps
      </h2>
      <p className="text-center mt-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, <br /> and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an <br /> impact.
      </p>
      <div className="text-center mt-5">
        <button className="btn btn-neutral mx-2">Play store</button>
        <button className="btn btn-neutral">App Store</button>
      </div>
      <img className="mt-10 mx-auto" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
