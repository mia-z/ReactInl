import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./_static/_header";
import Footer from "./_static/_footer";
import Home from "./pages/home";
import Categories from "./pages/categories";
import AdminPanel from "./pages/admin";
import Brands from "./pages/brands";
import Product from "./pages/Product";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShoppingCart, faEye, faTrashAlt, faGlobe, faPlane, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faHeart, faShoppingCart, faTrashAlt, faGlobe, faPlane, faShieldAlt, faSmile);

export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/admin" component={AdminPanel}/>
            <Route path="/brands" component={Brands}/>
            <Route path="/product/:id" component={Product}/>
        </Switch>
      <Footer />
    </Router>
  );
}