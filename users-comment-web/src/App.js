import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="app">
    <BrowserRouter >

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route  path="*" element={<Error />} />
        <Route path="/post/:userId" element={<Post/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
