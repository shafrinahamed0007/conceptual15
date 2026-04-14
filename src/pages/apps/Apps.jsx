import React from "react";
import { ClockLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const {apps, loading} = useApps();
  

  

  return (
    <div className="container mx-auto my-10">
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <ClockLoader color="#c92222" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 container mx-auto">
          {apps.map((app) => {
            return <AppCard key={app.id} app={app} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;
