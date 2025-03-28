import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Naats from "./pages/Naats";
import Dramas from "./pages/Dramas";
import Films from "./Pages/Films";
import Live from "./pages/Live";

function App() {

  return (  
    <> 
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/naats" element={<Naats />} />
        <Route path="/dramas" element={<Dramas />} />
        <Route path="/films" element={<Films />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </Router>    </>
  )
}

export default App
