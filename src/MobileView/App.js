import React, { PureComponent } from "react";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../Assets/scss/index.scss';

import Store from "../Store";
import AppRoute from "../Routes/mobile-routes";


export default class App extends PureComponent {
    constructor(){
        super();
        // This will hold the reference to dynamic Imported components
        this.state = {
            component : null 
        };
    }

    render(){
        return <Provider store={Store}>
            <Router>
                <Switch>
                   <AppRoute />
                </Switch>
            </Router>
        </Provider>
    }
}