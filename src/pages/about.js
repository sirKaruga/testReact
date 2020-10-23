import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const About= ()=>{

const [myData, setMydata] = useState({mainsTable: []});
const dispatch = useDispatch();

useEffect(()=>{
  const fetchData = async () => {
    const result = await axios('http://localhost:9000/',);
    setMydata({object1:result.data});
  };
  fetchData();
}, []);


useEffect(()=>{
  const updStore = ()=>{dispatch({type: 'FETCHED_DATA', payload: myData})};
  updStore();
}, []);

  return(
    <>
    <h1>About</h1>
    <br/>
    <p>This is just a sample app</p>

    </>
  );
}

export default About;
