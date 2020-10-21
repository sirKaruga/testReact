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
export { increment, changeBool };
