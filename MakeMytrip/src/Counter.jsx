import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleIncrement } from "./Redux/feature/counter/counterSlice";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(handleIncrement());
  }

  function handleSub() {}

  function handleReset() {}

  return (
    <>
      <div>Counter</div>
      <h2>{counterValue}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

// button add reset sub
//   counterValue flights lo kavali <Flights props> wrong
// step 2 Context api
