import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const greeting = ["Hello", "Hi", "Hey", "Namaste"];
function getRandomGreeting() {
  const randomIndex = Math.floor(Math.random() * greeting.length);
  return greeting[randomIndex];
}
function Headder() {
  return <h1>{getRandomGreeting()}</h1>
}
function Home() {
  return (<div id="MyHome">
    <div id="main">
      <h1>
        <Headder />
        <Typewriter
          words={['I am Ananya.', 'Welcome to my portfolio.']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
    <About />
    <Projects />
    
    <Contact />
    
  </div>);
}
<About />
export default Home;
