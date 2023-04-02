import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";


function App() {
  return (
    <Routes>
 <Route path="/" element = {<LoginPage/>} /> 
 <Route path="/product" element = {<Product/>} /> 
    </Routes>
  )
}

export default App;
