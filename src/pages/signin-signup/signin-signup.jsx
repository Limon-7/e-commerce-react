import React from "react";
import "./signin-signup.style.scss";
import Signin from "../../components/signin/signin";
import SignUp from "../../components/sign-up/sign-up";

const SigninSignup = () => {
    return (
        <div className="signin-signup">
            <Signin />
        </div>
    );
};

export default SigninSignup;
