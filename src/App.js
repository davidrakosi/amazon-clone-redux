import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>

                    <Route path='/cart'>
                        <Cart />
                    </Route>

                    <Route path='/checkout'>
                        <Checkout />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
