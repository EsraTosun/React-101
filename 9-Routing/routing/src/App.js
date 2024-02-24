import './App.css';

//Pages(Sayfalar)
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import UserDetails from './pages/UserDetails';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

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
      <Routes>
        <Route path='/' element = {<DashboardLayout />} >
          <Route index element={<Home/>} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          {/* Auto girer girmez login saymasını görmek istediğimiz için index yazıldı */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
