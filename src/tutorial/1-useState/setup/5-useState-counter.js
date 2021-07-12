import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => {setValue(value-1)}}>Decrease</button>
        <button className="btn" onClick={() => {setValue(0)}}>Reset</button>
        <button className="btn" onClick={() => {setValue(value + 1)}}>Increase</button>
      </section>
      <section style={{ margi: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>Increase later</button>
      </section>
    </>
  )
};

export default UseStateCounter;
