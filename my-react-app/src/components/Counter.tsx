import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
