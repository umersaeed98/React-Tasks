import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './Pages/mainPage/MainPage';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'
import Blog from './Pages/Blog/Blog'
import Portfolio from './Pages/Portfolio/Portfolio'
import Service from './Pages/Service/Service'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
