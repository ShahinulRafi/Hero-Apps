import React from "react";
// import { useLoaderData } from 'react-router';
import AllApps from "../components/AllApps/AllApps";

const Apps = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold ">Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us</p>
      </div>
      
      <div>
        <AllApps></AllApps>
      </div>
    </div>
  );
};

export default Apps;
