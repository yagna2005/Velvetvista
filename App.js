import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Furnitures from "./Components/Furnitures";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Header from "./user_blocks/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div className="hero_area">
     <BrowserRouter>
     <Header/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/furnitures" element={<Furnitures/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
