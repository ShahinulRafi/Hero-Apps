import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    console.log(installedApps)
    let sortedApps = [...installedApps];
    if (value === "High-Low") {
      sortedApps.sort((a, b) => Number(b.downloads) - Number(a.downloads));
    } else if (value === "Low-High") {
      sortedApps.sort((a, b) => Number(a.downloads) - Number(b.downloads));
    }
    setInstalledApps(sortedApps);
  };
  const uninstallApp = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success("App uninstalled successfully!");
  };

  return (
    <div className="m-10">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            Installed Apps ({installedApps.length})
          </h1>
        </div>
        <div>
          <select
            value={sort}
            onChange={handleSortChange}
            className="select select-primary"
          >
            <option value="">Sort By</option>
            <option value="High-Low">High-Low</option>
            <option value="Low-High">Low-High</option>
          </select>
        </div>
      </div>

      {installedApps.length === 0 ? (
        <p>No apps installed yet.</p>
      ) : (
        <div className="gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className=" bg-white text-black flex justify-between mb-6 p-4 rounded-lg"
            >
              <div className="flex">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 mr-5 h-20 mb-3"
                />
                <div>
                  <h2 className="text-lg font-semibold">{app.title}</h2>

                  <div className="flex gap-4 mt-6">
                    <div className="flex gap-2">
                      <img
                        src="/public/icon-downloads.png"
                        className="h-6"
                        alt=""
                      />
                      <p>Downloads: {app.downloads}</p>{" "}
                    </div>
                    <div className="flex gap-2">
                      <img
                        src="/public/icon-ratings.png"
                        className="h-6"
                        alt=""
                      />
                      <p>Rating: {app.ratingAvg}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => uninstallApp(app.id)}
                  className="btn btn-outline mt-2"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
