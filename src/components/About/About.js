import { Typewriter } from 'react-simple-typewriter';
import Education from '../Education/Education';
import './About.css';
import DownloadButton from './DownloadButton';
import { FaLinkedin } from 'react-icons/fa';
function About() {
  return (<>
    <h2><Typewriter
      words={['About Me']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    /></h2>
    <section id="Abouthome" >
      <img id="AboutImg" src="./ReImg1.jpg" alt="Lights" style={{ width: "35%" }} />
      Hi I am Ananya, a final year student at Kuvempu University pursuing BCA in Computer Science Department. I am passionate about coding and love to explore new technologies. I have a key interest in web development and have worked on several projects using HTML, CSS, JavaScript, and React. I am also familiar with backend technologies like java and python. Apart from coding, I enjoy listening music, and traveling. I am always eager to learn new things and take up new challenges.

    </section>
    <div
  className="social-links"
  style={{
    marginTop: "1rem",
    marginLeft: "4rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem"
  }}
>
  <a href="https://www.linkedin.com/in/ananyahs4102004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} color="#0A66C2" />
  </a>My LinkedIn Profile
</div>
 <DownloadButton />
    <Education />
  </>);
}

export default About;
