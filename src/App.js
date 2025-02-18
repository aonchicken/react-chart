import './App.css'
import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import NotFound from "./containers/errors/NotFound"


class App extends Component {

    renderRouter(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        )
    }
    render() {
        return (
            <BrowserRouter>{this.renderRouter()}</BrowserRouter>
        );
    }
}

export default App;
