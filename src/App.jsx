import "./App.css";
import CoffeeMenu from "./pages/coffeeMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<ProtectedRoute><CoffeeMenu/></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
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


