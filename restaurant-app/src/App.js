import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import FinalOrder from "./components/FinalOrder/FinalOrder";
import Form from "./components/FormControl/Form/Form";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Products from "./components/Products/Products";
import ShowDetails from "./components/ShowDetails/ShowDetails";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart/>
            </PrivateRoute>
          }
        />
        <Route path="/details/:productId" element={<ShowDetails />} />
        <Route path="/form/*" element={<Form />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/final-order" element={<FinalOrder/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
