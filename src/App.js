import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./_static/_header";
import Footer from "./_static/_footer";
import Home from "./pages/home";
import Categories from "./pages/categories";
import AdminPanel from "./pages/admin";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faHeart, faShoppingCart);

export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Categories" component={Categories}/>
            <Route path="/Admin" component={AdminPanel}/>
        </Switch>
      <Footer />
    </Router>
  );
}