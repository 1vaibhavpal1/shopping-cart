import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
