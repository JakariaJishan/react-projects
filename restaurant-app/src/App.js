import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ShowDetails from './components/ShowDetails/ShowDetails';

function App() {
  return (
   <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:productId" element={<ShowDetails />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
