import React from "react";
import { useLoaderData } from "react-router";
import IndividualPage from "../components/IndividualPage/IndividualPage";

const Details = () => {
  const app = useLoaderData();

  return (
    <div>
      <IndividualPage app={app}></IndividualPage>
    </div>
  );
};

export default Details;
