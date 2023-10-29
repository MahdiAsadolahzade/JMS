import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Register from './Components/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default App;
