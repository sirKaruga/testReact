import React from "react";
import Body from "../components/body";

export default function Home() {
  return (
    <>
      <div
        className="hd8"
        style={{
          minHeight: "50vh",
          overflow: "hidden",
          marginLeft: "5em",
          marginRight: "5em",
        }}
      >
        <Body />
      </div>

      <div
        className="hd9"
        style={{
          minHeight: "50vh",
          overflow: "hidden",
        }}
      >
        <Body />
      </div>
    </>
  );
}
