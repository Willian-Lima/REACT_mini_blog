import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer.js/Footer';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
