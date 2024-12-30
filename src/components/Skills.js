import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNodeJs,faMdb,faGooglePlay, faPython } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    icon: faHtml5
  },
  {
    name: 'CSS',
    icon: faCss3
  },
  {
    name: 'Javascript',
    icon: faJs},
  {
    name: 'ReactJs',
    icon: faReact
  },
  {
    name: 'NodeJs',
    icon: faNodeJs
  },
  {
    name: 'ExpressJs',
    icon: faNodeJs
  },
  {
    name: 'MongoDB',
    icon: faMdb
  },
  {
    name: 'Python',
    icon: faPython
  },
  {
    name: 'Machine Learning',
    icon: faGooglePlay
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       What abilities do I bring to the table?
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       In the dynamic world of creativity, my diverse skill set forms the foundation of my impactful work. Fueled by a passion for innovation and a commitment to excellence, I bring a unique blend of creativity, adaptability, and keen attention to detail. Whether designing visuals, developing websites, or managing projects, I approach every task with enthusiasm and expertise. I'm excited to explore how my skills can help drive success.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

