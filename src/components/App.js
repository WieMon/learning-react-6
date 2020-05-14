import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
    
  );
}

export default App;
