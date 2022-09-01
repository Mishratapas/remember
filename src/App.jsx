import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
