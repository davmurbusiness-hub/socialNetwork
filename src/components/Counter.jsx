import React from 'react';

const Counter = function () {
  const [likes, setLikes] = React.useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  return (
    <div>
      <h1>{likes} likes</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter;