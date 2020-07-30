import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
