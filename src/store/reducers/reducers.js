import myObject from "../../components/object";
import LineChartData from "../../pages/dashboard/dashboardPages/lineChartData";
import BarChartData from "../../pages/dashboard/dashboardPages/barChartData";

const initialStat = {
  textValue: "Value",
  booleanValue: false,
  intValue: 1,
  fetchedData: [],
  cart: [],
  shopItems: myObject,
  lineChartData: LineChartData,
  barChartData: BarChartData,
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
      let newState = Object.assign({}, state, {
        cart: state.cart.concat(action.payload),
      });
      return newState;
    }

    default:
      return state;
  }
};

export default counterReducer;
