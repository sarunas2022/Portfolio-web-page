import './App.scss';
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Skills from './components/sections/Skills';

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Header />
            <section id='about'></section>
            <Skills></Skills>
            <section id='projects'></section>
            <section id='contacts'></section>
            <Footer />
        </div>
    );
}

export default App;
