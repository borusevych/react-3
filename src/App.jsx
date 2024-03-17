import './App.css'
import {Route, Routes, NavLink} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favourites';

function App() {
  return (
    <>
     <header>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/cart">Cart </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>

    </>

  );
}

export default App;