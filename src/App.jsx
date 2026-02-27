import './App.css';
import ContactMe from './Home/contactMe';
import Header from './Home/Header';
import HomePage from './Home/HomePage';
import Projects from './Home/Projects';
import About from './Home/About';
import MyProjects from './Home/MyProjects';
import Intro from './Home/Intro';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Home/Dashboard';
import Resume from './Home/Resume';

function App() {
  return (
    <div>
     

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/services" element={<Projects/>} />
        <Route path="/about" element={<About />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;



