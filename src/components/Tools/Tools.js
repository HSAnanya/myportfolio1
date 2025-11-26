import { toolsdata } from "./ToolsData";
import { Typewriter } from 'react-simple-typewriter';
import './Tools.css';
function ToolCard(props) {
  return (
    <div className="tool-card">
      <img id="propImg" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        Official Link</a>
    </div>
  );
}
function Tools() {
  return (<>
    <h2> <Typewriter
      words={['Used Tools']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    /></h2>
    <section id="tools">
      <ToolCard {...toolsdata[0]} />
      <ToolCard {...toolsdata[1]} />
      <ToolCard {...toolsdata[2]} />
      <ToolCard {...toolsdata[3]} />
      <ToolCard {...toolsdata[4]} />
      <ToolCard {...toolsdata[5]} />
    </section>
  </>);
}
export default Tools;
