import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ number }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Number: {number}</p>
    </div>
  );
});

function MemoNumber() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  return (
    <div>
      <h2>Example 3 - React.memo with Number Prop</h2>

      <p>Parent Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <p>Number Prop: {number}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <ChildComponent number={number} />
    </div>
  );
}

export default MemoNumber;