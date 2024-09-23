import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" exact>
                        <h2>Welcome to My Portfolio!</h2>
                        <p>This is the home page.</p>
                    </Route>
                </Switch>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
