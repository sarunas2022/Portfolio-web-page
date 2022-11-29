import './App.scss';
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Header />
            <section id='about'></section>
            <section id='skills'></section>
            <section id='projects'></section>
            <section id='contacts'></section>
            <Footer />
        </div>
    );
}

export default App;
