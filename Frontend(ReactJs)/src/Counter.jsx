import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reset } from "./Redux/Slices/CounterSlice";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const count = useSelector((globalState) => globalState.counterSlice.Count);

  console.log("count", count);
  // dispatch signal --- reducer
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(add());
  }

  function handleSub() {
    dispatch(sub());
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <div>Counter</div>
      <h2>{count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

// button add reset sub
//   counterValue flights lo kavali <Flights props> wrong
// step 2 Context api


// 50%


// MakeMytrip 