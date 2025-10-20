import React, { useState } from "react";
import AppDetails from "../AppDetails/AppDetails";
import { useLoaderData } from "react-router";

const AllApps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApp = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="mx-10 mb-4 flex justify-between">
        <div className="font-semibold text-xl">({filteredApp.length}) Apps Found</div>
        
        
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" 
            onChange={e => setSearch(e.target.value)}
          />
         
        </label>
      </div>
      <div className="md:grid md:grid-cols-4">
        {filteredApp.length > 0 ? (filteredApp.map((app) => (
          <AppDetails key={app.id} apps={app}></AppDetails>
        ))
        ) : (<div className="text-center text-gray-500 col-span-4">
            <img src="/public/App-Error.png" className="m-auto mt-10 mb-10" alt="" />
            <h1 className="mb-10 text-white font-semibold text-2xl">App not found</h1>
          </div>)}
      </div>
    </div>
  );
};

export default AllApps;
