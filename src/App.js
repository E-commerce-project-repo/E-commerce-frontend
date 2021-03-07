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

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shoping" exact component={Shop} />
        <Route path="/singlePage" exact component={SingleItem} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/orders" exact component={OrderPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
