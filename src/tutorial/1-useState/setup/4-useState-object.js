import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')
  const [person, setPerson] = useState({name: name, age: age, message: message})
  const changeMessage = () => {
    if (person.message === 'random message') {      
      setPerson({...person, message: 'Hello World'})
    }
    else{      
      setPerson({...person, message: 'random message'})
    }
  }
  return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
    )
};

export default UseStateObject;
