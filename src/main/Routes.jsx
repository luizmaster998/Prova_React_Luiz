import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../paginas/Home';
import cards from '../paginas/cards';
import pricing from '../paginas/pricing';
import blocks from '../paginas/blocks';
import forms from '../paginas/forms';





export default props => (
    <Router history={hashHistory}>
        <Route path='/Home' component={Home}/>
        <Route path='/cards' component={cards}/>
        <Route path='/pricing' component={pricing}/>
        <Route path='/blocks' component={blocks}/>
        <Route path='/forms' component={forms}/>
                <Redirect from='*' to='/Home'/>
    </Router>
)