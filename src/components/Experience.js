import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Internships() {
const [listInternship] = useState([
  {
    name: 'Software Developer Intern',
    des: 'As a Software Developer Intern at Costylee Apparels Private Limited, I specialized in backend development using Node.js, Express, and MongoDB. I developed multiple APIs for crucial features, showcasing my ability to create robust solutions. In addition, I leveraged Flutter to build intuitive frontend features, demonstrating my versatility in both backend and frontend software development.',
    organisation: 'Costylee Apparels Private Limited',
    techStack: 'Flutter, React.js, Node.js, Express.js, MongoDB',
    url:'https://drive.google.com/file/d/18z6YtrSmLwGATFSRTGE1tFL7PqQ/view?usp=sharing',
    images: '/certificate.png'
  },
  {
    name: ' Machine Learning Trainee',
    des: 'Gained experience in over 10 machine learning techniques, including supervised and unsupervised algorithms, through real-world project implementations.',
    organisation: ' MedTourEasy',
    techStack: 'Python,Machine Learning,Flask,Azure,...',
    url:'https://github.com/Saurabh2862/American-sign-Language',
    images: '/MadTourEasy.png'
  },
]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       I’ve Got Experience to Share!
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       Throughout my professional journey, I have made significant contributions to various organizations, specializing in both backend and frontend development, as well as mobile app development. I have successfully created robust features, optimized system performance, and deployed innovative solutions. These experiences have refined my technical skills, showcasing my adaptability and dedication to delivering effective solutions in the ever-evolving field of software development.
       </div>
       <div className="list">
        {
          listInternship.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des} <a href={value.url} target='_blank' rel="noreferrer"> Recognisition of Intership from Oraganisation</a></div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Organisation</h4>
                        <div className="des">{value.organisation}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Tech Stack</h4>
                        <div className="des">{value.techStack}</div>
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
export default Internships;
