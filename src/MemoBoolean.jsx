import { memo, useState } from "react";

const ChildComponent = memo(function ChildComponent({ isLoggedIn }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>

      {isLoggedIn ? (
        <p>User is logged in </p>
      ) : (
        <p>User is logged out </p>
      )}
    </div>
  );
});

function MemoBoolean() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Example 5 - React.memo with Boolean Prop</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <ChildComponent isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default MemoBoolean;