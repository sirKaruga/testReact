import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchedToStore } from "../store/actions/";
import { addToCart } from "../store/actions/";

function dispatcher(props) {
  const dispatch = useDispatch();
  dispatch(addToCart(props));
}

export default dispatcher;
