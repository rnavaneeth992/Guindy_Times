import './App.css';
import Books from './components/Books';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <>
        <div>
        <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/about" element={<About />}></Route>
        </Routes>
        </div>
        <Footer />
        </>
    );
}

export default App;
