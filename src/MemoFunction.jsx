import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ onClick }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>

      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
});

function MemoFunction() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Child button clicked!");
  };

  return (
    <div>
      <h2>Example 8 - React.memo with Function Prop</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default MemoFunction;