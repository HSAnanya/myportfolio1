import { Typewriter } from 'react-simple-typewriter';
import './Skill.css' ;
function Skill(){
    return( <>
        
         <h2> <Typewriter
      words={['My skills']} 
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    /></h2>  

            <div className="skill">
            <div className="CodingSkill">
            <h3>Coding Skills </h3>
            <h4>HTML</h4>
            <span class="bar"><span class="HTML"></span></span>
            <h4>CSS</h4>
            <span class="bar"><span class="CSS"></span></span>
            <h4>REACT</h4>
            <span class="bar"><span class="REACT"></span></span>
            <h4>JAVA</h4>
            <span class="bar"><span class="JAVA"></span></span>
            <h4>PYTHON</h4>
            <span class="bar"><span class="PYTHON"></span></span>
            <h4>R-programming</h4>
            <span class="bar"><span class="PYTHON"></span></span>
        </div>
        <div className='softskill'>
        <h3>Soft Skills </h3><un>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Team Work</li>
            <li>Adaptability</li>
            <li>Work Ethic</li>
            </un>
        </div>
        </div>
   </> )
}
export default Skill;