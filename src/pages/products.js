import React from "react";
import { useParams } from "react-router-dom";
import item from "../components/item";
export default function useProducts() {
  let category = useParams();
  return (
    <div>
      <item />
    </div>
  );
}
