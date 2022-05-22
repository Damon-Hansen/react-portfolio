import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import { useState } from 'react';
import NavTest from './Components/NavTest';



function App() {
  const [ pageToRender, setPageToRender ] = useState ('about')
  const RenderedComponent = () => {
switch (pageToRender) {
  case 'about':
    return <About/>
  case 'contact':
    return <Contact/>
  case 'portfolio':
    return <Portfolio/>
}
  }
  return (
    <div className="App">
      < Navigation pageToRender = {pageToRender} setPageToRender = {setPageToRender}/>
      < RenderedComponent />
      < Footer />
      {/* < NavTest /> */}
    </div>
  );
}

export default App;
