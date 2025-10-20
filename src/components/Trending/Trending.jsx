import React from "react";
import AppDetails from "../AppDetails/AppDetails";
import { NavLink } from "react-router";
// import { useLoaderData } from "react-router";

// const promise = fetch("/public/trending.json")
//                 .then(res => res.json())
const Trending = ({trendingApps}) => {
    
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-semibold">Trending Apps</h1>
      <h1 className="mt-5">Explore All Trending Apps on the Market developed by us</h1>

      <div className="mb-10 mt-16 md:grid md:grid-cols-4 gap-4">
        {
            trendingApps.map(apps =>
                <AppDetails key={trendingApps.id} apps={apps}></AppDetails>
            )
        }
      </div>

      <NavLink to="/apps">
        <button className="btn btn-outline">See All</button>
      </NavLink>
    </div>
  );
};

export default Trending;


{/* <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>

            <div className="flex justify-between">
              <button className="btn btn-outline">
                <img src="/public/assets/icon-downloads.png" alt="" className="w-4"/>
                <div>Downloads</div>
              </button>
              <button className="btn btn-outline">
                <img src="/public/assets/icon-ratings.png" alt="" className="w-4"/>
                <div>rating</div>
              </button>
            </div>
          </div>
        </div> */}
