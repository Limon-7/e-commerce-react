import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/hompage/hompage";

const hatPage = () => {
    return <h1>Hat pages</h1>;
};
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Hompage} />
                <Route path="/shop/hats" component={hatPage} />
            </Switch>
        </div>
    );
}

export default App;
