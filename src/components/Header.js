import React, { Component } from "react";
import "./styles/Header.css";
import { Redirect, Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
        menuOpenStatus:'side-menu'
    };
  }
  toggle=()=>{
    if(this.state.menuOpenStatus ==="side-menu-close"|| this.state.menuOpenStatus ==="side-menu"){
        this.setState({menuOpenStatus: "side-menu-open"});
    }
    else if(this.state.menuOpenStatus ==="side-menu-open"){
        this.setState({menuOpenStatus:"side-menu-close"})
    }
}
  render() {
    return (
      <div className="Header">
        <div className ={`${this.state.menuOpenStatus} hidden-by-default`}></div> 
        <section className="right-header">
          <Link to="/">
            <img
              id="title"
              src="https://res.cloudinary.com/kevin14/image/upload/v1584634032/ftz5icm86lisi4ps3cjb.png"
            ></img>
          </Link>
        </section>
        <section className="left-header">
          <div className="cart" onClick = {this.toggle}>
            <i class="fas fa-shopping-cart"></i>
            <h1>Cart</h1>
          </div>
        </section>
      </div>
    );
  }
}
export default Header;
