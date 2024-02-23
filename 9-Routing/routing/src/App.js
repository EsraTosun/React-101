import './App.css';

//Pages(Sayfalar)
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import UserDetails from './pages/UserDetails';

import Menu from './components/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetails />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
