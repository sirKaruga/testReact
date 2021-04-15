import React from "react";
import Body from "../components/body";

export default function Home() {
  return (
    <>
      <div
        className="hd8"
        style={{
          minHeight: "50vh",
          marginLeft: "5em",
          marginRight: "5em",
        }}
      >
        <Body style={{ minWidth: "1000px", display: "inlineBlock" }} />
      </div>

      <div
        className="hd9"
        style={{
          minHeight: "50vh",
        }}
      >
        <Body style={{ minWidth: "1000px", display: "inlineBlock" }} />
      </div>
    </>
  );
}
