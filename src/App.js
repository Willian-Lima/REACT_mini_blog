import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer.js/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser) {
    return (
      <div className='loading'>
        <div></div>
      </div>
    )
  }

  return (
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <NavBar />
        <div className='barra'></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to={'/'} />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} />} />
          <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to={'/login'} />} />
          <Route path='/posts/dasboard' element={user ? <Dashboard /> : <Navigate to={'/'} />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
