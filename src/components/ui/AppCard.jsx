import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const AppCard = ({ app }) => {
  return (
    <div key={app.id} className="card bg-base-100 shadow shadow-emerald-300 p-5 ">
      <figure>
        <img className="w-[200px] h-[200px]" src={app?.image} alt={app?.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app?.title}</h2>
        <div className="flex justify-between items-center">
          <span className="bg-green-100 text-green-500 p-2 rounded-lg flex">
            {" "}
            <FaDownload className="mr-2 mt-1" />
            {app?.downloads}
          </span>
          <span className="bg-yellow-100 text-yellow-500 p-2 rounded-lg flex">
            <FaRegStar className="mr-2 mt-1" />
            {app?.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
