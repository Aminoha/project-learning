import React, { useState } from "react";
import classes from './UI/button/MyButton.module.css'

const Counter = function () {
  const [count, serCount] = useState(0);

  function increment() {
    serCount(count + 1);
  }

  function decrement() {
    serCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.myBtn} style={{margin: '15px 0'}} onClick={increment}>Increment</button>
      <button className={classes.myBtn} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
