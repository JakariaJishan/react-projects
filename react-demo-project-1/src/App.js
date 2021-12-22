import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Preview from "./components/Preview/Preview";


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Cart></Cart>
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Preview" element={<Preview />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
