import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes , Route} from "react-router";
import Signup from "./pages/Signup";


function App(){
  return(
    <>
{/* 
    <Navbar/>
    <Hero/>
    <CoffeeMenu/>
    <SpecialOffer/>
    <About/>
    <Footer/> */}

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/Login" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} /> 


    </Routes>
    
    
    </BrowserRouter>



    
    
    </>
  );
};

export default App;