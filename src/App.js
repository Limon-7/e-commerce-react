import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/hompage/hompage";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header";
import SigninSignup from "./pages/signin-signup/signin-signup";

const hatPage = () => {
    return <h1>Hat pages</h1>;
};
function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Hompage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route path="/shop/hats" component={hatPage} />
                <Route path="/signin" component={SigninSignup} />
            </Switch>
        </div>
    );
}

export default App;
