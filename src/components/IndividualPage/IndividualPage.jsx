import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const IndividualPage = ({ app }) => {
  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isInstalled = installedApps.some((a) => a.id === app.id);
    if (isInstalled) setInstall(true);
  }, [app.id]);

  const installApp = () => {
    setInstall(true);
    toast.success("App installed successfully!");
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.some((a) => a.id === app.id)) {
      installedApps.push({
        id: app.id,
        title: app.title,
        size: app.size,
        downloads: app.downloads,
        ratingAvg: app.ratingAvg,
        image: app.image.replace("/public", ""), // fix path
      });
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };
  const chartData = app.ratings.map((r) => ({
    rating: r.name, // X-axis
    count: r.count, // Y-axis
  }));
  return (
    <div className="mx-12">
      <div className="flex gap-10 mt-10">
        <img src={app.image} alt="" />
        <div className="w-full">
          <h1 className="text-xl font-semibold">{app.title}</h1>
          <h1>
            Developed by <span className="font-bold">productive.io</span>
          </h1>

          <hr className="mt-4 mb-4"></hr>

          <div className="md:flex md:justify-between md:w-1/2">
            <div className="text-center">
              <img
                src="/icon-downloads.png"
                className="mx-auto"
                alt=""
              />
              <h1>Downloads</h1>
              <h1 className="text-2xl font-bold">{app.downloads}</h1>
            </div>
            <div className="text-center md:mt-0 mt-5 md:mb-0 mb-5">
              <img src="/icon-ratings.png" className="mx-auto" alt="" />
              <h1>Average Ratings</h1>
              <h1 className="text-2xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div className="text-center">
              <img src="/icon-review.png" className="mx-auto" alt="" />
              <h1>Total Reviews</h1>
              <h1 className="text-2xl font-bold">{app.reviews}</h1>
            </div>
          </div>

          <button onClick={installApp} className="btn btn-outline mt-5">
            {install ? "Installed" : "Install Now"} ({app.size})
          </button>
        </div>
      </div>

      <hr className="my-10" />

      <div>
        <h1 className="font-semibold">Rating</h1>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            layout="vertical" // This flips the axes
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="rating" type="category" /> <Tooltip />
            <Bar dataKey="count" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="my-10" />

      <div className="mb-10">
        <h1 className="font-bold">Description</h1>

        <p>{app.description}</p>
      </div>
    </div>
  );
};

export default IndividualPage;
