import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/project";
import Services from "./routes/Services";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
