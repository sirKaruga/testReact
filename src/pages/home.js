import React from "react";
import Body from "../components/body";
import windowSize from "../components/windowSize";
import MobileHome from "../components/mobileComponents/mobileHome";

export default function Home() {
  const margin = windowSize().width > 998 ? "7em" : null; //768
  return (
    <>
      <div
        style={{
          marginLeft: margin,
          marginRight: margin,
          //width: windowSize().width,
        }}
      >
        {windowSize().width >= 915 ? (
          <Body style={{ display: "inlineBlock" }} />
        ) : (
          <MobileHome />
        )}
      </div>
    </>
  );
}
