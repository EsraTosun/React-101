import { useState } from "react"
import Counter from "./Components/Counter";

function App() {
  const [isIsvisible,setIsvisible] = useState(true);
  //İlk etapta görünür

  return (
    <div className="App">
      {isIsvisible && <Counter />}  {/* //true ise göster */}

      <br />
      <hr />
      <br />

      <button onClick={() => {setIsvisible(!isIsvisible)}}>
        Toggle Counter
      </button>
      {/* Buton sayesinde Vounter sayfasını görünmez yapacağız */}
    </div>
  );
}

export default App;
