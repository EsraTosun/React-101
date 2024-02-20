import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  //Arttırmak için fonksiyon
  const increase = () => {
    setCount(count + 1)
  };

  //Azaltmak için fonksiyon
  const decrease = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick= {increase}>Decrease</button>
      <button onClick={decrease}>Increase</button>
    </div>
  );    
}

export default Counter