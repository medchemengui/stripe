import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import StripePayment from "./component/StripePayment"; 
import Success from "./component/Success"; 
import Cancel from "./component/Cancel"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/success" element={<Success />} /> 
        <Route path="/cancel" element={<Cancel />} /> 
        <Route path="/" element={<StripePayment />} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
}
export default App;