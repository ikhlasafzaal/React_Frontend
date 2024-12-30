import Home from "./pages/Home";
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>

        <div>
          <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
