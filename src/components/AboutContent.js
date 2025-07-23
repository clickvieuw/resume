import "./AboutContentStyles.css";

import { Link } from "react-router-dom";
import React1 from "../assets/profile1.png";
import React2 from "../assets/profile3.webp";
import {
    AiFillInstagram,
    AiFillGithub,
    AiFillCloseCircle
} from "react-icons/ai";


const AboutContent = () => {
  return (
    <div className="about">
      
      <div className="lefts">
        <h1>Define Your Brand</h1>
        <p>
          As a dedicated freelance developer, I specialize in crafting modern web applications, automating business processes, and building seamless e-commerce solutions. My mission is to empower businesses with a strong digital presence and efficient workflows, helping them grow and succeed in a competitive online landscape.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="img-container">
            <div className="top">
                <img src={React1} 
                className="img"
                alt="img"/>
            </div>
            <div className="bottom">
                <img src={React2} 
                className="img"
                alt="img"/>
            </div>
        </div>
        <div className="socials">
             <h2>Let's connect</h2>
           <div className="social-links">
              <a href="https://github.com/clickvieuw?tab=repositories"><AiFillGithub size={40} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a href="https://x.com/clickvue99"><AiFillCloseCircle size={40} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a href="https://instagram.com/davi.dbyte/"><AiFillInstagram size={40} style={{color:"#fff", marginRight:"0.5rem"}}/></a>
           </div>
      </div>
      </div>
  
    </div>
  )
}

export default AboutContent
