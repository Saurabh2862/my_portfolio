import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Gorrila-Game',
    des: 'A multiplayer game platform for creating rooms and playing in real-time. Users can share achievements and view online status.',  
    mission: 'Front-end development, user authentication, and media handling.',  
    language: 'HTML, CSS, JavaScript, React, Firebase, Redux, WebSockets.',
    url:'https://gorrila-game.vercel.app/',
    images: '/project1.PNG'
  },
  {  
    name: 'U R NORMAL',  
    des: 'A platform that allows users to create and share articles and blogs with various text formatting options. Users can upload images related to their blogs and have the ability to edit and delete their posts. Additionally, they can explore and read blogs written by others, creating a supportive community.',  
    mission: 'Every day, we navigate a wide range of emotions. Struggling to understand the deeper realms of your mind is not unusual. We are here to provide you with rays of hope and motivation throughout your journey.',  
    language: 'HTML, CSS, JavaScript, ReactJs....',
    url: "https://saurabh2862.github.io/Byteverse_Kaalki-warriors_U_R_Normal/index.html",  
    images: "/project4.PNG",  
     
},
  {
    name: 'Weather App',
    des: 'This application provides real-time weather forecasts and updates for various locations, allowing users to search for cities and view current conditions, forecasts, and additional weather information. The app features a user-friendly interface built with React.js, ensuring a smooth experience across different devices and screen resolutions. It utilizes APIs to fetch and display accurate weather data efficiently.',
    mission: 'To deliver accurate weather information through seamless front-end and back-end integration, ensuring a user-friendly experience and reliable data.n',
    language: 'HTML, CSS, Javascript',
    url:'https://saurabh2862.github.io/Wheather/',
    images: '/project2.jpeg'
  },
  {
    name: 'NyayaSadhak - Multilingual Legal Chatbot',
    des: 'Developed a multilingual legal chatbot that provides insights and assistance in 22 languages, improving accessibility for diverse audiences. The chatbot leverages the Lamini T38 LLM model for context-aware responses and Hugging Faces Lawnchain for efficient language processing.',
    mission: 'Front-end Development, Natural Language Processing, System Design, and Mobile Development',
    language: 'Python, React.js, Lamini T38, Hugging Face, Flask...',
    url:'https://github.com/Saurabh2862/nyayaSadhak',
    images: '/project3.jpg'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       A Glimpse into My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       Explore my creative journey through a variety of projects, each reflecting my passion, innovation, and dedication to excellence. Together, let these projects illustrate the meaningful impact we can achieve.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}. <a href={value.url} target='_blank' rel="noreferrer"> Project Link </a></div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
