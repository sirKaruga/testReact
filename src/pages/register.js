import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, changeBool, changeText } from '../store/actions/';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

const InputForm = ()=>{
  const dispatch = useDispatch();
  const onChangeM = (e)=> dispatch(changeText(e.target.value));

  return(
    <>
    <input value ={useSelector(state=>state.textValue)} onChange={onChangeM}/>
    </>
  );
};

function Register(){
  const mycount = useSelector(state=>state.intValue);
  const name = useSelector(state=>state.textValue);
  const isLogged = useSelector(state=>state.booleanValue);
  const dispatch = useDispatch();
  const handleClick =  ()=>dispatch(increment());
  const changeBoolean =  ()=>dispatch(changeBool());


  return(
    <div>
    <Container>
      <Card>
        <Card.Title>
          <h1>Register Component </h1>
        </Card.Title>
      </Card>
      <br />
      <Row>
        <Col sm="7">
          <Button onClick={handleClick}>Change integer</Button><br /><br />
          <Button onClick={changeBoolean}>Change Boolean Value</Button><br /><br />
          <InputForm />
        </Col>
          <Col sm="5">
            <Card>
              <Container>
                <h2>Elements in state</h2>
                <ul>Integer Value: <b>{mycount}</b></ul>
                <ul>Boolean Value: <b>{isLogged ? <span>True</span> : <span>False</span>}</b></ul>
                <ul>Text from input:<b> {name} </b></ul>
              </Container>
            </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Register;
