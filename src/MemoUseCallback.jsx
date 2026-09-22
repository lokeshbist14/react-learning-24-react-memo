import { memo, useCallback, useState } from "react";

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

function MemoUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Child button clicked!");
  }, []);

  return (
    <div>
      <h2>Example 9 - React.memo with useCallback</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default MemoUseCallback;