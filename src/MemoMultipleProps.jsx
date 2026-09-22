import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ name, age }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

function MemoMultipleProps() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);

  return (
    <div>
      <h2>Example 4 - React.memo with Multiple Props</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <p>Age: {age}</p>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      <ChildComponent name="Lokesh" age={age} />
    </div>
  );
}

export default MemoMultipleProps;