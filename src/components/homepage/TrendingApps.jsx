import React, { use } from "react";

const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  const apps = use(appsPromise);
  console.log("Apps", apps);
  return (
    <div>
      <div>{/* Section header */}</div>
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa
          nobis dolorum nulla repellat repudiandae doloribus sequi veritatis
          eveniet provident alias molestiae, corporis illo deserunt molestias
          fuga, non eum? Sunt!
        </p>
      </div>
    </div>
  );
};

export default TrendingApps;
