import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Country from "./components/Country/Country";
import Error from "./components/Error/Error";
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/country/:countryName" element={<Country />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
