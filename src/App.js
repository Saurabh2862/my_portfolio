import './App.css'
import Experience from './components/Experience'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import ChatWithMe from './components/ChatWithMe'


function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Experience/>
      <Projects />
      <Contacts />
      <ChatWithMe />
    </main>
  );
}

export default App;
