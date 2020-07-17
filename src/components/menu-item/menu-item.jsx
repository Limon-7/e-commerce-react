import React from "react";
import "./menu-item.style.scss";
const MenuItem = ({ menuitem }) => {
    return (
        <div className={`${menuitem.size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${menuitem.imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{menuitem.title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};
export default MenuItem;
