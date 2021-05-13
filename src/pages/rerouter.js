import React from "react";
import { useHistory } from "react-router-dom";

export default function useRerouter(params) {
  let history = useHistory();

  history.push({
    pathname: "/searchResults",
    searchResults: history.location.searchResults,
  });

  return <div></div>;
}
