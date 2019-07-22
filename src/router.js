import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Nabvar from '../src/components/Navbar/index'
import Ponente from './components/pages/ponentes'
import NotFound from './components/NotFound/'
import Conference from './components/pages/conferencias'
import App from './App';
import Navbar from '../src/components/Navbar/index';
import Evento from './components/eventos/index'

const Routers = () => {
    return (
        <BrowserRouter>
        <Nabvar />
        <Switch>
            <Route exact path="/" component={Evento} />
            <Route  exact path="/conferencias" component={Conference} />
            <Route exact  path="/ponente" component={Ponente} />
            <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routers