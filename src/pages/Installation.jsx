import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const uninstallApp = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
  };

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-5">
        Installed Apps ({installedApps.length})
      </h1>

      {installedApps.length === 0 ? (
        <p>No apps installed yet.</p>
      ) : (
        <div className="gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className=" bg-white text-black flex mb-6 p-4 rounded-lg">
              <div className="flex">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 mr-5 h-20 mb-3"
                />
                <div>
                  <h2 className="text-lg font-semibold">{app.title}</h2>

                  <p>Size: {app.size}</p>
                  <p>Rating: {app.ratingAvg}</p>
                </div>
              </div>
              <button
                onClick={() => uninstallApp(app.id)}
                className="btn btn-outline mt-2"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
