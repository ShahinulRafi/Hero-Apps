
import React from "react";
import { Link } from "react-router";

const AppDetails = ({apps}) => {
  return (
    <Link to={`/Details/${apps.id}`}>
      {
        <div className="card bg-white border-1 text-black mx-auto mb-10 w-80 h-90 shadow-sm">
          <figure>
            <img
              src={apps.image}
              alt="Shoes"
              className="w-2/3 h-2/3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{apps.title}</h2>

            <div className="flex justify-between mt-4">
              <button className="btn btn-outline">
                <img
                  src="/public/icon-downloads.png"
                  alt=""
                  className="w-4"
                />
                <div>{apps.downloads}</div>
              </button>
              <button className="btn btn-outline">
                <img
                  src="/public/icon-ratings.png"
                  alt=""
                  className="w-4"
                />
                <div>{apps.reviews}</div>
              </button>
            </div>
          </div>
        </div>
      }
    </Link>
  );
};

export default AppDetails;
