import React, { useEffect } from "react";
import { testAPI } from "../services/api";

const Home = () => {
  useEffect(() => {
    testAPI().then(res => console.log(res.data));
  }, []);

  return <div>Home</div>;
};

export default Home;
