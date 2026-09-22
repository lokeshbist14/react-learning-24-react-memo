import { memo, useMemo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ user }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
});

function MemoUseMemo() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return {
      name: "Lokesh",
      age: 25,
    };
  }, []);

  return (
    <div>
      <h2>Example 7 - React.memo with useMemo</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ChildComponent user={user} />
    </div>
  );
}

export default MemoUseMemo;