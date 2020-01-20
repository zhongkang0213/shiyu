import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from 'pages/home';
import Foods from 'pages/foods'
// import Detail from '../detail';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/foods" component={Foods}/>
            {/* <Route exact path="/detail" component={Detail}/> */}
        </Switch>
    </HashRouter>
);


export default BasicRoute;