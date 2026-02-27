import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaCog,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import homeImg from "../assets/_MG_9971 (4).JPG";

function Dashboard() {
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
        {/* Profile Section */}
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

          {/* Navigation Sidebar */}
          <nav className="navbars">
            <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
            <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
            <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
            <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
            <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
            <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
         
          </nav>
        </section>


        <div className="dashboard">
          <h3>My Dashboard</h3>
          <p>
            Welcome to my professional dashboard. Built with <strong>React.js</strong> and
            <strong> Tailwind CSS</strong>, deployed on <strong>Vercel</strong>.
          </p>
          <hr />

          <div className="dashboard-content">
            <section className="skills">
              <h4>Skills Overview</h4>
              <ul>
                <li>Frontend: React, Vue, Angular, TailwindCSS</li>
                <li>Backend: Node.js, Express, Laravel, PHP,Springboot</li>
                <li>Databases: MongoDB, MySQL, Firebase,Postgre sql</li>
                <li>AI/ML: Python, TensorFlow, NLP</li>
                <li>Tools: Git, Figma, WordPress</li>
                <li>App development:React Native, Flutter(Dart)</li>
                <li>High perfomance Appliations:Java,C++</li>
              </ul>
            </section>

    
        
            <section className="services">
              <h4>Services I provide</h4>
            
              <ul>
                <li>Custom Web Development</li>
                <li>AI Integration & Automation</li>
                <li>UI/UX Design</li>
                <li>Deployment & Hosting</li>
                <li>Mobile App development(CrossPlatform and Android)</li>
                <li>Software design and Archtecture</li>
                <a href="/contact"><button class="cont2">Contact Me</button></a>
              </ul>
            </section>


            <section className="resume-summary">
              <h4>Resume Snapshot</h4>
              <p>
                3+ years of experience in fullstack engineering and AI development. 
                Skilled in building scalable, secure, and user-friendly platforms.
              </p>
            
            </section>

            {/* Contact Section */}
            <section className="contact-info">
              <h4>Contact Information</h4>
              <p>Email:kymbravin24@gmail.com</p>
              <p>Location:Nairobi , Kenya</p>
              
        
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

