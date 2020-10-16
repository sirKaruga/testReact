const counterReducer = (state = 0, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return state +1;

    case 'DECREMENT':
      return state - 1;

    default:
    return state;

  }
};

const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;

    default:
    return state;

  }
};

const initialState={
  myName: 'cspital'
};
const myname = (state= initialState, action)=>{
  switch (action.type) {
    case 'REGISTER':
      return Object.assign({}, state, {myName: action.text})

    default:
      return state;
  }
};



export {counterReducer, isLoggedReducer, myname};
