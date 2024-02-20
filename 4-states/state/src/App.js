import { useState } from 'react'
/*
React state, React uygulamalarında kullanılan dinamik veri yönetimini sağlayan bir konsepttir. 
React componentlerindeki state, bileşenin iç durumunu ve davranışını saklamak için kullanılır.
State, bir bileşenin zamanla değişebilen verilerini ve kullanıcı etkileşimlerine göre güncellenen bilgilerini tutar.
*/

function App() {
  const [name, setName] = useState('Esra');
  const [age, setAge] = useState(29);
  const [friends,setFriends] = useState(["Ahmet","Murat"]);
  const [address, setAddress] = useState({title: "İstanbul", zip: 34756})

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName('Ahmet')}>
        Change Name
      </button>
      <button onClick={() => setAge(25)}>
        Change Age
      </button>

      <hr />
      <br></br>

      <h2>FRİENDS</h2>
      {
        friends.map((friend,index) => (
          <div key={index}>{friend}</div>  
        ))
      }
      <br/>
      <button onClick={ ()=>
        setFriends([...friends,"Ayşe"])
        //Önceki verileri korumak istiyorsanız => ...friends yazmak zorundasınız.
      }>
        add new friends
      </button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br/>
      <button onClick= {()=>
        setAddress({ ...address,title:"Ankara", zip:4444})
      }>
        change the adress
      </button>
      
    </div>
  );
}

export default App;
