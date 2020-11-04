import myObject from "../../components/object";

const initialStat = {
  textValue: "Value",
  booleanValue: false,
  intValue: 1,
  fetchedData: [],
  cart: [],
  shopItems: myObject,
};
const counterReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "INCREMENT": {
      let newState = Object.assign({}, state, {
        intValue: state.intValue + action.payload,
      });
      return newState;
    }

    case "DECREMENT": {
      let newState = Object.assign({}, state, {
        intValue: state.intValue - action.payload,
      });
      return newState;
    }

    case "SIGN_IN": {
      let newState = Object.assign({}, state, {
        booleanValue: !state.booleanValue,
      });
      return newState;
    }

    case "REGISTER": {
      let newState = Object.assign({}, state, { textValue: action.payload });
      return newState;
    }

    case "FETCHED_DATA": {
      let newState = Object.assign({}, state, { fetchedData: action.payload });
      return newState;
    }

    case "ADD_CART": {
      let newState = Object.assign({}, state, { cart: action.payload });
      return newState;
    }

    default:
      return state;
  }
};

export default counterReducer;
