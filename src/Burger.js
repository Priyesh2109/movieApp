import React from "react";
import { slide as Burger } from "react-burger-menu";
import "./CSS/Burger.css";

function BurgerMenu() {
  return (
    <Burger>
      <img
        className="header_logo"
        src="https://whatson.ae/wp-content/themes/whatson-grow/images/wo-dubai.png"
        alt=""
      />
      <hr className="break" />

      <a className="menu-item" href="/burgers">
        Action Movies
      </a>

      <a className="menu-item" href="/pizzas">
        Comedy Movies
      </a>

      <a className="menu-item" href="/desserts">
        Horror Movies
      </a>
      <a className="menu-item" href="/desserts">
        Romantic movies
      </a>
    </Burger>
  );
}
export default BurgerMenu;
