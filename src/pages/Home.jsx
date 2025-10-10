import React from "react";
import Hero from "../components/Hero/Hero";
import Marketing from "../components/Marketing/Marketing";
import Trending from "../components/Trending/Trending";
import { useLoaderData } from "react-router";

const Home = () => {
  const trendingApps = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Marketing></Marketing>
      <Trending trendingApps={trendingApps}></Trending>
    </div>
  );
};

export default Home;
