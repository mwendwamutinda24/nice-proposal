import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt } from "react-icons/fa";
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
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiWordpress
} from "react-icons/si";
import HomePage from "./HomePage";

const Intro = () => {
  const tools = [
    { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
    { name: "ExpressJS", icon: <SiExpress color="#000000" /> },
    { name: "NodeJS", icon: <FaNodeJs color="#68A063" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
    { name: "PHP", icon: <FaPhp color="#777BB4" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Angular", icon: <SiAngular color="#DD0031" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "Vue.js", icon: <SiVuedotjs color="#42B883" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Firebase", icon: <SiFirebase color="#F7DF1E" /> },
    { name: "WordPress", icon: <SiWordpress color="#141413" /> }
  ];

  return (
    <>
      <HomePage />
      <div className="intro">
        <h1>Hi, I am Bravin Kimtai</h1>
        <ul className="li">
          <li>Based in Nairobi Kenya, Kenya</li>
          <li>Working remotely</li>
        </ul>
        <p>
          I am an experienced Software and AI engineer with 3 years experience in Web development,
          Application development, Desktop development and AI engineering. My passion is rooted in
          solving real-world complex problems and collaborating with teams to achieve greater heights
          with scalable, user intuitive and mobile responsive software.
        </p>
        <hr />
        <div className="tools">
          <h1>Tools that I use</h1>
          <hr />

          <div className="tool-list row-1">
            {tools.slice(0, 7).map((tool, index) => (
              <div key={index} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
            {tools.slice(0, 7).map((tool, index) => (
              <div key={`dup1-${index}`} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="tool-list row-2">
            {tools.slice(7, 14).map((tool, index) => (
              <div key={index} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
            {tools.slice(7, 14).map((tool, index) => (
              <div key={`dup2-${index}`} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="tool-list row-3">
            {tools.slice(14).map((tool, index) => (
              <div key={index} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
            {tools.slice(14).map((tool, index) => (
              <div key={`dup3-${index}`} className="tool">
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Intro;
