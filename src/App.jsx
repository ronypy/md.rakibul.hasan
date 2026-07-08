import './App.css'

import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import Research from './components/Research'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Teaching from './components/Teaching'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Hero />
          <FocusAreas />
          <Research />
          <Projects />
          <Experience />
          <Teaching />
          <Skills />
          <Credentials />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
