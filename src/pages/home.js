import React from "react";
import Body from "../components/body";
import windowSize from "../components/windowSize";

export default function Home() {
  const margin = windowSize().width > 998 ? "7em" : 0; //768
  return (
    <>
      <div
        style={{
          minHeight: "50vh",
          marginLeft: margin,
          marginRight: margin,
          width: windowSize().width < 998 ? "900px" : "auto",
        }}
      >
        <Body style={{ minWidth: "1000px", display: "inlineBlock" }} />
      </div>
    </>
  );
}
