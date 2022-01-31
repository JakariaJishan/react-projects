import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Form from "./components/FormControl/Form/Form";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
