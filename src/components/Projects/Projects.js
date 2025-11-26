import { myprojects } from "./ProjectsData";
import { Typewriter } from 'react-simple-typewriter';
import './Projects.css';
import React from "react";
import Skill from '../Skill/Skill';
import Tools from "../Tools/Tools";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img id="propImg" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <h4>{props.usedLanguages}</h4>
      <p>{props.description}</p>
      <a href={props.gitLink}>GitLink</a><br></br>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        Live demo</a>
    </div>
  );
}

function Projects() {
  return (<>
    <h2> <Typewriter
      words={['My projects','My Experience']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    /></h2>
    <section id="projects">
      <ProjectCard {...myprojects[0]} />
      <ProjectCard {...myprojects[1]} />
      <ProjectCard {...myprojects[2]} />
      <ProjectCard {...myprojects[3]} />
      <ProjectCard {...myprojects[4]} />
      <ProjectCard {...myprojects[5]} />
      <ProjectCard {...myprojects[6]} />
      <ProjectCard {...myprojects[7]} />
    </section>
    <Skill/>
    <Tools/>
  </>);
}
export default Projects;
