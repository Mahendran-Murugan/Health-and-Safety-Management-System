import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavBar } from './components/Navbar';
import Aos from "aos";
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Admin } from './components/Admin';
import { User } from './components/User';
import { Auth } from './components/Auth';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1250,
    })
  })
  return (
    <Auth>
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
      </div>
    </Auth>
  );
}

export default App;
