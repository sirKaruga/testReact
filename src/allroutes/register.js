import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import increment from '../actions/';
import { Card, Row, Col, Container } from 'react-bootstrap';
import store from '../store';

const InputForm = (props)=>{
  return(
    <>
    <input value ={props.myName} onChange={props.inputChanged}/>
    {props.myName}
    </>
  );
};

function Register(){
  const mycount = useSelector(state=>state.counter);
  const name = useSelector(state=>state.myName);  // value in json format
// create empty array and extract the json into it
  const arr = [];
  Object.keys(name).forEach(key => arr.push({name: key, value: name[key]}));
              console.log(arr); // array in the console
  const isLogged = useSelector(state=>state.islogged);
  const dispatch = useDispatch();

  return(
    <div>
    <Container>
      <h1>Register Component </h1>
      <br />
      <Row>
        <Col sm="7">
          <button onClick={()=>dispatch(increment())}>Change integer</button>
          <InputForm store={store}/>
        </Col>
          <Col sm="5">
            <Card>
              <Container>
                <h2>Elements in state</h2>
                <ul>Integer Value: <b>{mycount}</b></ul>
                <ul>Boolean Value: <b>{isLogged ? <span>True</span> : <span>False</span>}</b></ul>
                <ul>Text from input:<b> {arr.map((item)=>{return(<span key={item.name}>{item.value}</span>);})}</b></ul>
              </Container>
            </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    myName: state.myName
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    inputChanged:(event)=>{
      console.log('changed', event.target.value);
      const action = {type:'REGISTER', text: event.target.value}
      dispatch(action);
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Register);
