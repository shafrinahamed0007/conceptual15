import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { ClockLoader } from "react-spinners";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log("Params", params.id);

  const { apps, loading } = useApps();
  const expectedApp = apps.find((app) => app.id == id);
  console.log(expectedApp);
  //   console.log("App and loading from App Details Page", apps, loading);
  return (
    <div>
      <h2>App Detalis Page</h2>
      {loading ? (
        <ClockLoader color="#c92222" />
      ) : (
        <div className="card bg-base-100 p-5 rounded-md  shadow-amber-100 container mx-auto shadow-sm w-90 my-10">
          <figure className="w-[300px] h-[300px]">
            <img src={expectedApp?.image} alt={expectedApp?.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{expectedApp?.title}</h2>
            <p>Developed By :{expectedApp?.companyName}</p>
            <p>{expectedApp?.description}</p>

            <button className="btn btn-neutral mt-2">Install Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
