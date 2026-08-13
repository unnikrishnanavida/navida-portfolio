import Sidebar from './components/Sidebar/Sidebar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070a] text-white">
      {/* Atmospheric layers */}
      <div
        className="page-grid pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />

      <div
        className="page-noise pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />

      {/* Navigation */}
      <Sidebar />

      {/* Main application */}
      <main
        id="main-content"
        className="
          relative
          z-10
          min-h-screen
          lg:pl-[250px]
        "
      >
        <div className="site-container">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Achievements />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App