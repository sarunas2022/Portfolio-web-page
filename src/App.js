import './App.scss';
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Skills from './components/sections/skills/Skills';
import Contacts from './components/sections/contacts/Contacts';
import About from './components/sections/about/About';
import Projects from './components/sections/projects/Projects';

function App() {
    return (
        <div>
            <NavBar />
            <Header />
            <Skills />
            <Projects />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
