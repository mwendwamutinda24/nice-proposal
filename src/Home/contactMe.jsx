import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";
import HomePage from "./HomePage";
import homeImg from "../assets/_MG_9971 (4).JPG";
import { Link } from "react-router-dom";
import { FaBars,FaHome, FaServicestack, FaProjectDiagram, FaEnvelope,FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt,FaTachometerAlt,FaUser} from "react-icons/fa";
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



const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:kymbravin24@gmail.com?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };
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
                          <Link to="/services"><FaCog /> Services</Link>
                    </div>
                    <div className="navabarr">
                        <Link to="/my-Projects"><FaProjectDiagram />Projects</Link>
                    </div>
                    <div className="navabarr">
                         <Link to="/contact">< FaEnvelope /> Contact Me</Link>
                    </div>
                      
                              
                    </div>
            
            </section>
    <section id="contact">
      <div className="conect">
        <div className="con1">
          <h1>Contact Me</h1>
          <p>Ineed of answers to your questions on my work,<br/> get in touch</p>
          <p>Find me On Social Media</p>
          <div className="con-buttons">
            <button className="git1"><a href="#"><FaGithub/>Github</a></button>
            <button className="git2"><a href="#">< FaInstagram/>Instagram</a></button>
            <button className="git3"><a href="#"><FaFacebook/>Facebook</a></button>
            <button className="git4"><a href="#"><FaLinkedin/>Linkeldin</a></button>
              
          </div>
          
          <h1>Send Me a Message</h1>
        </div>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <input
              className="input1"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <br />
            <textarea
              className="input2"
              name="message"
              placeholder="Enter your Message"
              required
            />
            <br />
           <button className="btn5" type="submit">
            Send Message <span className="arrow">↑</span>
            </button>

          </form>
        </div>
      </div>
    </section>
    </div>
    
    </>
    
  );
};

export default ContactMe;

