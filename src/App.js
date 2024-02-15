import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import ProductState from './context/products/ProductState';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <div style={{overflow:'hidden'}}>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path="/cart" element={<Cart />} ></Route>
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
