const increment = ()=>{
  return{
    type: 'INCREMENT',
    payload: 7
  };
};

const changeBool = ()=> {
  return{
    type: 'SIGN_IN'
  };
};

const changeText = (myPayload)=> {
  return{
    type: 'REGISTER',
    payload: myPayload
  };
};
export { increment, changeBool, changeText };
