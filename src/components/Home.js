import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                HEY I AM <span>Saurabh Pandey</span>
            </div>
            <div className="des">
            I am a passionate FULL STACK SOFTWARE DEVELOPER skilled in the MERN stack, dedicated to crafting innovative digital solutions. With hands-on experience from diverse projects and internships, I integrate machine learning techniques to deliver intelligent applications that enhance user experiences. My blend of technical expertise and creative problem-solving empowers me to tackle challenges and drive impactful outcomes.
            </div>
            <a href="https://drive.google.com/file/d/1AsnO5FAraTMVgP-sbpuUHG4qoA2-hcju/view" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/my_dp.jpg" alt="" />
                <div className="info">
                    {/* <div>Full stack Developer</div> */}
                    <div>ML Enthusiasm</div>
                    <div>Frontend(Reactjs)</div>
                    {/* <div>Backend</div> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
