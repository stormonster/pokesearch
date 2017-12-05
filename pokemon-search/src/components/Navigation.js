import React from 'react';
// import { render } from 'react-dom';
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom';
// import logo from '../logo.png';
import '../App.css';
import Search from './Search';
import About from './About';
import Contact from './Contact';



const Navigation = () => {
    return(
        <div>
            <Router>
                <div>
                    <nav>
                        <ul id="menu-top">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Search} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        </div>
    )
}

export default Navigation;