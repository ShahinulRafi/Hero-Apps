import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
    const navigagteBack = useNavigate();
  return (
    <div className="mx-auto text-center m-20">
      <img src="/error-404.png" className="mx-auto" alt="" />

      <h1 className="text-3xl font-semibold mt-5 mb-4">Oops, page not found!</h1>
      <h5>The Page you are looking for is not available.</h5>
      <button onClick={() => navigagteBack(-1)} className="btn btn-outline mt-4">Go Back!</button>
    </div>
  );
};

export default Error;
