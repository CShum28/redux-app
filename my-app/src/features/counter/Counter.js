import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(amount)));
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <form onSubmit={submit}>
          <p>Increment by amount</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            r
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
