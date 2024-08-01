
import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Initialization
  const [count, setCount] = useState<number>(0);

  
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter Value: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
