import Signup from "./pages/signUp/signup";
import './App.css'
import Success from "./pages/success/success";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
  
    <Routes>
      <Route element={<Signup/>} path="/" />
      <Route element={<Success/>} path="/success" />
    
    </Routes>
  );
}

export default App;
