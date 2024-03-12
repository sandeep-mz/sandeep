import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Navbar>
    
  );
}

export default App;
