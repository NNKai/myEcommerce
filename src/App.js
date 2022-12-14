import './App.css';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import MobileNavigation from './Component/MobileNavigation/MobileNavigation';
import React from 'react';
import MensCollection from './Pages/MensCollection/MensCollection';
import WomensCollection from './Pages/WomensCollection/WomensCollection';
import Jewelery from './Pages/Jewelery/Jewelery'
import CartProduct from './Component/CartProduct/CartProduct';

import { StateProvider } from './StateProvider';

function App() {
  return (
    
    <Router >
      <div className="main-Container">
        <React.Fragment>
          <MobileNavigation />
        </React.Fragment>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/mens'>
            <MensCollection />
          </Route>
          <Route exact path='/womens'>
            <WomensCollection />
          </Route>
          <Route exact path='/accessories'>
            <Jewelery />
          </Route>
          <Route exact path='/cart'>
            <CartProduct />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
