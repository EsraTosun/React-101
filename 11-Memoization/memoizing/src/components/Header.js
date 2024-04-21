import React from 'react'

function Header( {count, increment}) {
  console.log("Header component re-render");

  return (
    <div>
      Header
      {/* <div>Count: {count}</div> */}
      <button onClick={increment} >
        Arttır
      </button>
    </div>
    
  )
}

export default Header