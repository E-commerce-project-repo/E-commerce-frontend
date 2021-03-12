import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { SingleItem } from "./components/SingleView/SingleItem";
import { SignUp } from "./Pages/signup/signup";
import { SignIn } from "./Pages/Login/Login";
import { OrderPage } from "./Pages/Orders/Orders";
import { Carts } from "./Pages/Carts/Carts";
import { AddItem } from "./components/Item/Add";
import { config } from "./constants/constants";
import { Seller } from "./Pages/Seller/Seller";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path={config.carts} exact component={Carts} />
        <Route path={config.home} exact component={Home} />
        <Route path={config.shoping} exact component={Shop} />
        <Route path={config.singlePage} exact component={SingleItem} />
        <Route path={config.signUp} exact component={SignUp} />
        <Route path={config.signIn} exact component={SignIn} />
        <Route path={config.orders} exact component={OrderPage} />
        <Route path={config.addItems} exact component={AddItem} />
        <Route path={config.sellerInfo} exact component={Seller} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
