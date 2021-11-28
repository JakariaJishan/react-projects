import "./App.css";
import Courses from "./componants/Courses/Courses";
import Header from "./componants/Header/Header";

function App() {
  //  console.log(cart);
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
