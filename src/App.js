import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main' >
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </div>
  );
}

export default App;
