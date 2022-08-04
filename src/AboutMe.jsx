import React from 'react'
import Contact from "./Contact"

const AboutMe = () => {
  return (
    <div>
      <div id="bio-full">
        <h2>My name is Jake</h2>
        <p>In January 2017, I moved from Memphis, Tennessee to Chicago, Illinois, to begin my professional career and have loved every day since. I love creative expression, particularly through music and digital media, and always aspire to make a positive impact in doing so.</p>
        <p>During the COVID-19 pandemic, I successfully completed FullStack Academy’s Web Development Certification program. Coding feels like a new superpower I’ve obtained, and I love the sense of discovery each project now offers. I’m always fascinated by each app providing a visual reflection for what I’ve learned and where I can continue to grow.</p>
        <p>Like any responsible superpower wielder, I intend to develop applications with the greater good of others in mind. The long uncertainty of COVID-19 illuminated many opportunities to help those in need, and that there are countless possible avenues for doing so with web development. I look forward to where I arrive through exploring these possibilities.</p>
        <button onClick={()=>{<Contact/>}}>Contact Me</button>
        <button onClick={()=>{}}>Download Resume</button>
      </div>
      <div id="skills">
        <h2>Skills</h2>
      </div>
      
      
    </div>
  )
}

export default AboutMe