import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent() {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Hello from Child Component</p>
    </div>
  );
});

function MemoBasic() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Example 1 - Basic React.memo</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ChildComponent />
    </div>
  );
}

export default MemoBasic;