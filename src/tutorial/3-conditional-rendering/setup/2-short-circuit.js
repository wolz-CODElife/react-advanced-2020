import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}

    <h1>{text || 'John Doe'}</h1>
    <button className="btn" onClick={() => setIsError(!isError)}>Toggle error</button>
    {isError && <h1>Error . . .</h1> }
    {isError ? <p>There is an Error . . .</p> : <p>There is no Error . . . </p> }
  </>;
};

export default ShortCircuit;
