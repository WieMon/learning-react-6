import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
            {/* <li><a href='/'>Start</a></li>
            <li><a href='/news'>News</a></li>
            <li><a href='/contact'>Contact</a></li> */}
            <li><Link to='/'>Start</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </header>
        <section>
          Hello
        </section>
        <Route path ='/' exact component={Home} />
        <Route path ='/news' component={News} />
        <Route path ='/contact' component={Contact} />
      </div>
    </Router>
    
  );
}

export default App;
