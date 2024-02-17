import './App.css';

import Header from './components/Header';
// Header=> html tagları ile karışmaması için büyük harfle başlanması gerekiyor.

const name = "Esra";
const surname = "Tosun";
const isLoggedIn = true;

function App() {
  return (
    <div className="App">
      <Header/>   {/*component'i burda kullanırız.  */ }
      <p className = "xyz">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release 
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <label htmlFor = "myinput">
        Name
        <input id = "myinput"/>
      </label>
      <h1>{name}</h1>
      <h2>{`Benim adım ${name}, soyadım ${surname}`}</h2>
      <h1>
        { isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}
        { !isLoggedIn && "Giriş Yapmadınız"}
      </h1>
      <h3>
        {isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş Yapmadınız"}
      </h3>
    </div>
  );
}

export default App;
