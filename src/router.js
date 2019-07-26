import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Nabvar from '../src/components/Navbar/index'
import Ponente from './components/pages/ponentes'
import NotFound from './components/NotFound/'
import Conference from './components/pages/conferencias'
import Evento from './components/eventos/index'
import AddSpeaker from './components/Form/FormSpeaker/'
import AddConference from './components/Form/FormConference/'

const Routers = () => {
    return (
        <BrowserRouter>
        <Nabvar />
        <Switch>
            <Route exact path="/" component={Evento} />
            <Route   path="/conferencias" component={Conference} />
            <Route   path="/ponentes" component={Ponente} />
            <Route   path="/ Speaker" component={AddSpeaker} />
            <Route   path="/ Conferences" component={AddConference} />
            <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routers