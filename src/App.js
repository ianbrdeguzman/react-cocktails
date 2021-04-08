import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CocktailDetails from './components/CocktailDetails';
import Error from './components/Error';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/cocktails/'>
                        <Home />
                    </Route>
                    <Route exact path='/cocktails/about'>
                        <About />
                    </Route>
                    <Route exact path='/cocktails/details/:id'>
                        <CocktailDetails />
                    </Route>
                    <Route path='/cocktails/*'>
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
