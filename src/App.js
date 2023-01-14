import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer.js/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
