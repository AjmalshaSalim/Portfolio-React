import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Courses/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
