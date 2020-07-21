import React from "react";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as Shopping } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Shopping className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(ToggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
