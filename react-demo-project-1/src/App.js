import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "./components/Home/Home";
import ShowFood from "./components/ShowFood/ShowFood";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showfood/:foodId" element={<ShowFood />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
