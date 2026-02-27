import { FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import HomePage from "./HomePage";
import homeImg from "../assets/_MG_9971 (4).JPG";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack, FaProjectDiagram, FaEnvelope,FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaBars,FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt,FaTachometerAlt,FaUser} from "react-icons/fa";
import { 
  SiMongodb, 
  SiMysql, 
  SiCplusplus, 
  SiLaravel, 
  SiTailwindcss, 
  SiAngular, 
  SiNextdotjs, 
  SiVuedotjs,
  SiFigma, 
  SiExpress ,
  SiJavascript ,
  SiFirebase,
  SiWordpress

} from "react-icons/si";

import { useState } from "react";
const Projects=()=>{
    const [showNav, setShowNav] = useState(false); 
        const dropdown = () => { setShowNav(!showNav); };
    return(
        <>
        <div className="navbar2">
        
                 <div className="fahome">
                  <h3 onClick={dropdown}><FaBars /></h3>
                  <hr/>
                </div>
        
                  {showNav && (
                  <div className="navbars2">
                    <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
                    <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
                    <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
                    <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
                    <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
                    <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
                  
                  </div>
                )}
                </div>
        
        <div className="home-response">
             <section id="home">
             <div className="homepage">
            <div className="home2">
                <img className="img" src="./Kimtai.jpeg" alt="Kelvin Mutinda" />
            </div>
             <div className="Home1">
              <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 Bravin Kimtai
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#1DA1F2"
  >
    <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z"/>
  </svg>
</h2>

              <p>AI | Fullstack Engineer</p>
            </div>
        </div>

         <div className="navbars">
                   <div className="navabarr">
                        <Link to="/"><FaHome /> Home</Link>
                   </div>
                    <div className="navabarr">
                       <Link to="/Dashboard"><MdDashboard/>Dashboard</Link>
                   </div>
                   <div className="navabarr">
                        <Link to="/about"><FaUser/> About</Link>
                   </div>
                     <div className="navabarr">
                       <Link to="/services"><FaCog/> Services</Link>
                   </div>
                   <div className="navabarr">
                       <Link to="/my-Projects"><FaProjectDiagram />Projects</Link>
                   </div>
                   <div className="navabarr">
                        <Link to="/contact">< FaEnvelope /> Contact Me</Link>
                   </div>
                       
                   </div>

        </section>
        <section id="services">
        <div>
            <div className="serv">
                <h3>Explore My Services</h3>
                <p className="po">These are the services i Proffesionally offer </p>
            </div>
            <div className="sserve">
                <div className="services">
               <h3>Web Development</h3>
                <p>
                I specialize in building dynamic, scalable, and user‑friendly web applications using modern frameworks and technologies. 
                My expertise spans across <strong>Django</strong> for robust backend solutions, the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) 
                for full‑stack JavaScript development,<strong>Wordpress</strong> and <strong>PHP (Laravel)</strong> for elegant, secure, and efficient web platforms. 
                 <ul>
                    <li>Experience 3years</li>
                    <li>Projects  10+</li>
                    <li>Occupation Remotely,Fulltime</li>
                 </ul>
                </p>
                </div>
                 
                <div className="services">
                <h3>App Development</h3>
                <p>
                My app development expertise covers a wide spectrum of platforms and technologies, enabling us to deliver 
                high‑performance, intuitive, and scalable mobile and desktop applications. We build cross‑platform solutions 
                with <strong>React Native</strong> and <strong>Flutter</strong>, craft native Android apps with <strong>Java(Springboot)</strong> and <strong>C++</strong>, 
                while <strong>Python</strong> helps integrate advanced features such as AI and automation. 
                 <ul>
                    <li>Experience 1 year,3 Months</li>
                    <li>Projects  3</li>
                    <li>Occupation Remotely,Fulltime</li>
                 </ul>
                </p>

                 </div>

                 <div className="services">

                        <h3>Design</h3>
                        
                           <p>
                            My design approach blends creativity with precision, using industry‑leading tools to craft visuals that inspire and engage. 
                            We create collaborative, modern interfaces with <strong>Figma</strong>, deliver stunning graphics and edits through 
                            <strong>Adobe Photoshop</strong> 
                        </p> 

                 </div>
                <div className="services">
                <h3>AI & Software Engineering</h3>
                <p>
                My AI and software engineering solutions harness the power of <strong>Python</strong> alongside leading frameworks to 
                build intelligent, scalable, and efficient systems. I use  <strong>TensorFlow</strong> and <strong>PyTorch</strong> to  develop 
                advanced machine learning and deep learning models.
                </p>              
                </div>

             </div>
            </div>
            </section>

        </div>
       
        </>

        
    )

}
export default Projects

           

