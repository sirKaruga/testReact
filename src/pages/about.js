import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Topnav from "../components/topnav";
import BottomNav from "../components/bottomNav";

const About = () => {
  const datab = useSelector((state) => state);
  console.log(datab);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:9000/");
      const myData = result.data;
    };
    fetchData();
  }, []);

  return (
    <>
      <Topnav />
      <h1>About</h1>
      <br />
      <p>This is just a sample app</p>
      <BottomNav />
    </>
  );
};

export default About;
