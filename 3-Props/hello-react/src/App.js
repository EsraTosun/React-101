import './App.css';

// Header=> html tagları ile karışmaması için büyük harfle başlanması gerekiyor.
import User from './components/User';


function App() {
  return (
    <div>
      <User name="Esra" surname="Tosun" isLoggedIn = {true} age={29} /> 
    </div>
  );
}

export default App;
