import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchedToStore } from '../store/actions/'

const About= ()=>{

const dispatch = useDispatch();

useEffect(()=>{
  const fetchData = async () => {
    const result = await axios('http://localhost:9000/',);
    const myData = result.data;
    dispatch(fetchedToStore(myData));
  };
  fetchData();
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
