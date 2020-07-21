import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Hompage from "./pages/hompage/hompage";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header";
import SigninSignup from "./pages/signin-signup/signin-signup";
import { auth, createUserProfileDocument } from "./utils/firebase.utils";
import { setCurrentUser } from "./redux/user/user-action";
const hatPage = () => {
    return <h1>Hat pages</h1>;
};
class App extends Component {
    unsubscribeFromAuth = null;
    componentDidMount() {
        const { setCurrentUser } = this.props;
        // this an open subscription method. so we need not unsubscribe after component is closed.
        // onAuthStateChange()= adds an observer for changes to the user sign in state
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);

                (await userRef).onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            }
            setCurrentUser(userAuth);
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Hompage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route path="/shop/hats" component={hatPage} />
                    <Route
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SigninSignup />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
