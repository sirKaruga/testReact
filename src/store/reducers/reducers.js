const initialStat =  {
  textValue: 'cspital',
  booleanValue: false,
  intValue: 1,
  fetchedData: []
};
const counterReducer = (state = initialStat, action) =>{
  switch (action.type) {
    case 'INCREMENT': {
      state.intValue = state.intValue + action.payload;
      state = {...state, state};
      return state;
      }

    case 'DECREMENT':{
      state.intValue = state.intValue - action.payload;
      state = {...state, state};
      return state;
      }

      case 'SIGN_IN':{
        state.booleanValue = !state.booleanValue;
        state = {...state, state};
        return state;
      }

      case 'REGISTER':{
        state.textValue = action.payload;
        state = {...state, state}
        return state;
      }

      case 'FETCHED_DATA':{
        state.fetchedData = action.payload;
        state = {...state, state}
        return state;
}

    default:
    return state;

  }
};


export default counterReducer;
