import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    url:'9580355612',
    value: '+919580355612'
  },{
    title: 'Email',
    url:'saurabhpandey5794@gmail.com',
    value: 'saurabhpandey5794@gmail.com'
  },
])
const [socialList] = useState([
  {
    title: 'Linkedin',
    url:'https://www.linkedin.com/in/saurabh-pandey-pandey1008/',
    value: '/linkedin-icon1.png'
  },{
    title: 'GitHub',
    url:'https://github.com/Saurabh2862',
    value: '/github-icon.png'
  },{
    title: 'LeetCode',
    url:'https://leetcode.com/u/SAURABH_PANDEY1008/',
    value: '/leetcode-icon.jpeg'
  },

])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       Connect with Me at Your Fingertips!
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       Don’t hesitate to get in touch—let’s transform ideas into reality! Whether you have a project in mind, want to explore collaboration opportunities, or simply wish to chat, my inbox is always open. I’m eager to connect and discover the possibilities together. Your message could be the next chapter in this creative journey, and I’m excited to be a part of it!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
    {value.title === 'Phone Number' ? (
      <div>
        <h3>{value.title}</h3>
        <a href={`tel:${value.url}`} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{value.value}</a>
      </div>
    ) : (
      <div>
        <h3>{value.title}</h3>
        <a href={`mailto:${value.url}`} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{value.value}</a>
      </div>
    )}
  </div>
  ))}
       </div>
       <div >
       <h2 style={{ textAlign:'center',marginTop:'40px'}}> Social Links</h2>
       <div className="socialList">
        {
          socialList.map((value, key) => (
            <div key={key}>
             <a className='list' href={value.url} target="_blank" rel="noreferrer">
              <img src={value.value} alt={value.title} style={{ width: '40px', height: '40px' }} />
             </a>
           </div>
  ))}
       </div>
       </div>
       
    </section>
  )
}
export default Contacts
