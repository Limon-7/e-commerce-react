import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase.utils";

const Header = ({ currenUser }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currenUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGNOUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGNIN
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
