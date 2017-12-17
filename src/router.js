import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShelfView from './components/ShelfView';
import Product from './components/Product';
import NewProduct from './components/NewProduct';


export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/bins/:label" component={ ShelfView } />
        <Route path="/bin/:id" component={ Product } />
        <Route path="/create/:id" component={ NewProduct } />
    </Switch>
)
