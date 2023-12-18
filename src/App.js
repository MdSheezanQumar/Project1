import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Tours from './Tours';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/Project1" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/holiday" element={<Tours/>}></Route>
        <Route path="/details/:cityId" element={<Details/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
