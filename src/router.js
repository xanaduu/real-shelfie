import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShelfView from './components/ShelfView';
// import Contents from './components/Contents';


export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/bins/:label" component={ ShelfView } />
        {/* <Route path="/bin/:id" component={ Contents } /> */}
    </Switch>
)
