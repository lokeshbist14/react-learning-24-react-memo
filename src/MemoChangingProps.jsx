import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ name }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
    </div>
  );
});

function MemoChangingProps() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Lokesh");

  return (
    <div>
      <h2>Example 10 - React.memo with Changing Props</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <p>Current Name: {name}</p>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>

      <ChildComponent name={name} />
    </div>
  );
}

export default MemoChangingProps;