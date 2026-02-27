import HomePage from "./HomePage";
import { FaHome, FaServicestack, FaProjectDiagram, FaEnvelope,FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBars,FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt,FaTachometerAlt,FaUser} from "react-icons/fa";
import homeImg from "../assets/_MG_9971 (4).JPG";
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

const About = () => {

  const [showNav, setShowNav] = useState(false); 
      const dropdown = () => { setShowNav(!showNav); };
  return (
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
        fill="#1DA1F2" // Twitter blue
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
                       <Link to="/Dashboard">< MdDashboard/>Dashboard</Link>
                   </div>
            <div className="navabarr">
                 <Link to="/about"><FaUser /> About</Link>
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
          
    <section id="About">
      <h1>ABOUT ME</h1>
      
      <div className="Abouts">
        <p className="pp">An insightful glimpse on who I am and what i do </p>
        <hr/>
        <p>
          I am a self‑employed <strong>Full‑Stack Engineer</strong> with over 3 years of hands‑on experience
          in the tech industry. My journey has allowed me to collaborate with various companies and
          organizations, where I honed my skills and contributed to impactful projects across multiple domains.

          My expertise spans <strong>Software Engineering</strong>, <strong>App Development</strong>, 
          <strong>Web Design & Development</strong>, and <strong>AI Engineering</strong>. I specialize in
          building scalable applications, crafting intuitive user interfaces, and leveraging modern frameworks
          to deliver solutions that balance creativity with technical precision.
          Beyond technical execution, I am deeply passionate about solving complex problems in society through
          technology. I thrive on designing systems that are not only functional but also sustainable, ensuring
          they can adapt to future needs. My experience working with diverse teams has strengthened my ability
          to merge innovation with collaboration, driving projects from concept to completion.

        </p>
        <p>Currently, as a self‑employed engineer, I continue to push boundaries by exploring emerging
          technologies, refining my craft, and delivering solutions that empower businesses and communities.
          My dedication lies in creating meaningful digital experiences that leave a lasting impact.</p>
      </div>
    </section>

    </div>
      
    </>
    
  );
};

export default About;


