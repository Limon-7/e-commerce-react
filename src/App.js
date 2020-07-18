import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/hompage/hompage";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header";
import SigninSignup from "./pages/signin-signup/signin-signup";
import { auth, createUserProfileDocument } from "./utils/firebase.utils";

const hatPage = () => {
    return <h1>Hat pages</h1>;
};
class App extends Component {
    constructor() {
        super();
        this.state = {
            currenUser: null,
        };
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        // this an open subscription method. so we need not unsubscribe after component is closed.
        // onAuthStateChange()= adds an observer for changes to the user sign in state
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);

                (await userRef).onSnapshot((snapshot) => {
                    this.setState({
                        currenUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    });
                });
            }
            this.setState({ currenUser: userAuth });
            console.log("Data:", this.state);
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div className="App">
                <Header currenUser={this.state.currenUser} />
                <Switch>
                    <Route exact path="/" component={Hompage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route path="/shop/hats" component={hatPage} />
                    <Route path="/signin" component={SigninSignup} />
                </Switch>
            </div>
        );
    }
}

export default App;
