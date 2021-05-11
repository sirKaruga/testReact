const increment = () => {
  return {
    type: "INCREMENT",
    payload: 7,
  };
};

const changeBool = () => {
  return {
    type: "SIGN_IN",
  };
};

const changeText = (myPayload) => {
  return {
    type: "REGISTER",
    payload: myPayload,
  };
};

const fetchedToStore = (myPayload) => {
  return {
    type: "FETCHED_DATA",
    payload: myPayload,
  };
};

const addToCart = (myPayload) => {
  return {
    type: "ADD_CART",
    payload: myPayload,
  };
};

const removeFromCart = (myPayload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: myPayload,
  };
};

const logins = (myPayload) => {
  return {
    type: "LOG_IN",
    payload: myPayload,
  };
};

export {
  increment,
  changeBool,
  changeText,
  fetchedToStore,
  addToCart,
  logins,
  removeFromCart,
};
