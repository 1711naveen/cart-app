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

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
