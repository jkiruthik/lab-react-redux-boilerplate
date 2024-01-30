import { useState } from "react";
import { incrementAction, decrementAction } from "./Actions"; 
import reducer from "./Reducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => store.dispatch(incrementAction())}>
        Increment
      </button>
      <button onClick={() => store.dispatch(decrementAction())}>
        Decrement
      </button>
    </div>
  );
}