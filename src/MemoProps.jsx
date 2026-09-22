import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ name }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Hello, {name}</p>
    </div>
  );
});

function MemoProps() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Example 2 - React.memo with Props</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ChildComponent name="Lokesh" />
    </div>
  );
}

export default MemoProps;