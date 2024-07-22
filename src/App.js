import Header from "./components/Header/index";
import Home from "./components/Home";

import Travel from "./components/Travels";
import About from "./components/About_Us";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
    <Header cl />
 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/travels" element={<Travel />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <div>
    
    </div>
    </div>
  );
}

export default App;