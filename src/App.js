import './App.scss';
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Skills from './components/sections/skills/Skills';
import Contacts from './components/sections/contacts/Contacts';
import About from './components/sections/about/About';

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Header />
            <Skills></Skills>
            <section id='projects'></section>
            <About />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
