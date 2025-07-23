import { FaHome, FaMailBulk } from "react-icons/fa";
import "./FooterStyles.css";
import {
    AiFillInstagram,
    AiFillGithub,
    AiFillCloseCircle
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Yaba Tech Hub Central</p>
                    <p>Lagos</p>
                </div>
            </div>

            <div className="email">
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                  <p>clickview4freelance@gmail.com</p> 
                </div>
            </div>

         </div>

         <div className="right">
            <h4>Our Mission</h4>
            <p>Empowering individuals and organizations to achieve their goals through creative, reliable, and forward-thinking digital solutions.</p>
            <div className="social">
            <div>

              <a href="https://github.com/clickvieuw?tab=repositories" ><AiFillGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a href="https://x.com/clickvue99" ><AiFillCloseCircle size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a href="https://instagram.com/davi.dbyte/"><AiFillInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
  
             </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
