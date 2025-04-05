import ProtectedRoute from './components/protectedRoute';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/loginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('resumeBuilderAuth') || '';
    console.log('stored auth is', storedAuth);
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        if (new Date().getTime() < authData.expiration) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('resumeBuilderAuth');
        }
      } catch (e) {
        console.log(e)
      }
    }
  }, []);
  const handleLogin = () => {
    const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
    localStorage.setItem('resumeBuilderAuth', JSON.stringify({ isAuthenticated: true, expiration: expirationTime }));
    setIsAuthenticated(true);
  }
  
  const handleLogout = () => {
    console.log('here')
    localStorage.removeItem('resumeBuilderAuth');
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Prevent flickering
  }

  return (
    <div style={{minHeight: '100vh'}}>
      <BrowserRouter>
      {/*isAuthenticated && <Navbar logOutOfApp={handleLogout} />*/}
      {/*  <Routes>
        {!isAuthenticated ?
            <Route path='/' element={<LoginPage logInToApp={handleLogin}/>}/>
          :
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/create" element={<CreationPage isCreating={true} />} />
              <Route path="/feedback" element={<CreationPage isCreating={false} />} />
            </>
          }
        </Routes>
      */}
      <Routes>
        <Route path='/' element={<LoginPage logInToApp={handleLogin}/>}/>
        </Routes>
      </BrowserRouter>

      

    </div>

  );
}

export default App;
