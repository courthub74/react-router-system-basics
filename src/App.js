import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import More from './components/More';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <Router>
      <div className="App">

        <Nav />
        {/* <About />
        <More />
        <Home /> */}
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/more" component={More} />
        </Routes>
      
      </div>
    </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
