
import { useState } from 'react';

function Counter() {
  // Initialize the count state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Button to reset the count */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
