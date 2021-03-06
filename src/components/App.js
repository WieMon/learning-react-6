import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

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
            <li><NavLink to='/' exact activeClassName='home_selected' activeStyle={{
                    backgroundColor: 'gray',
                  }}>Start</NavLink></li>
            <li><NavLink to='/news' activeClassName='news_selected'>News</NavLink></li>
            <li><NavLink to='/contact' activeClassName='contact_selected'>Contact</NavLink></li>
            </ul>
          </nav>
        </header>
        <section>
          Hello
        </section>
        <Switch>
          <Route path ='/' exact component={Home} />
          <Route path ='/news' component={News} />
          <Route path ='/contact' component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
