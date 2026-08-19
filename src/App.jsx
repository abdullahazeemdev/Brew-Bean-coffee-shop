import "./App.css";

import Home from "./pages/home";
import Login from "./pages/Login";
import { BrowserRouter, Routes , Route} from "react-router";


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
      <Route path="Login" element={<Login />} /> 

    </Routes>
    
    
    </BrowserRouter>



    
    
    </>
  );
};

export default App;