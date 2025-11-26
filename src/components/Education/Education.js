import { education as educationData } from './EducationData';
import { Typewriter } from 'react-simple-typewriter';
import './Education.css';
function EducationCard(props) {
  return (
    <div className="education-card">
      <h3>{props.title}</h3>
      <h4>{props.school}</h4>
      <h4>{props.year}</h4>
      <h4>{props.branch}</h4>
      <h4>{props.score}</h4>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        offical website</a>
    </div>
  );
}
function Education() {
  return (<>
    <h2> <Typewriter
      words={['My Education']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    /></h2>
   
    <section id="education">
      <EducationCard {...educationData[0]} />
      <EducationCard {...educationData[1]} />
      <EducationCard {...educationData[2]} />

    </section>
  </>);
}
export default Education;