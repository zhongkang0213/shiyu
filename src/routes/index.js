import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from 'pages/home';
import Foods from 'pages/foods'
// import Detail from '../detail';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/foods" component={Foods}/>
            {/* <Route exact path="/detail" component={Detail}/> */}
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;