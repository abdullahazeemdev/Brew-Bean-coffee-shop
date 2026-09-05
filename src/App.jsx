import "./App.css";
import CoffeeMenu from "./pages/coffeeMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<CoffeeMenu/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* 
    <Navbar/>
    <Hero/>
    <CoffeeMenu/>
    <SpecialOffer/>
    <About/>
    <Footer/> */}


