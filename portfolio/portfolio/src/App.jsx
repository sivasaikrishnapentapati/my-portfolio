import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProvider } from './contexts/ScrollContext';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Navigation />
        <main>
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><Projects /></div>
          <div id="skills"><Skills /></div>
          <div id="experience"><Experience /></div>
          <div id="education"><Education /></div>
          <div id="contact"><Contact /></div>
        </main>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
