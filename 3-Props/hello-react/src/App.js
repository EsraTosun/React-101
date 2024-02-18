import './App.css';

// Header=> html tagları ile karışmaması için büyük harfle başlanması gerekiyor.
import User from './components/User';

const friends=[
  {
    id: 1,
    name: "Ahmet"
  },
  {
    id: 2,
    name: "Tayfun"
  },
  {
    id: 3,
    name: "Gökhan"
  }
];

function App() {
  return (
    <div>
      <User 
        name="Esra" 
        surname="Tosun" 
        isLoggedIn={true} 
        age={29} 
        friends={friends}
        adress = {{
          title: "Ataşehir/İstanbul",
          zip: 34755
        }}
      />
    </div>
  );
}

export default App;
