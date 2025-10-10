import React from "react";

const AppDetails = ({apps}) => {
  return (
    <div>
      {
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={apps.image}
              alt="Shoes"
              className="w-2/3 h-2/3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{apps.title}</h2>

            <div className="flex justify-between">
              <button className="btn btn-outline">
                <img
                  src="/public/assets/icon-downloads.png"
                  alt=""
                  className="w-4"
                />
                <div>{apps.downloads}</div>
              </button>
              <button className="btn btn-outline">
                <img
                  src="/public/assets/icon-ratings.png"
                  alt=""
                  className="w-4"
                />
                <div>{apps.reviews}</div>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default AppDetails;
