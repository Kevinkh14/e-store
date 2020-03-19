import React, { Component } from "react";
import "./styles/Home.css";
import { connect } from "react-redux";
import { getItems } from "../Redux/Reducers/itemsReducer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    this.props.getItems();
    console.log(getItems);
  }
  render() {
    return (
      <div className="home">
        <img
          id="background"
          src="https://wallpaperaccess.com/full/640208.jpg"
        ></img>
        <div className="store-container">
          <div className="item-container">
            <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section>
          </div>
          <div className="item-container">
          <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section>
          </div>
          <div className="item-container">
          <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section>
          </div>
          <div className="item-container">
          <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section>
          </div>
          <div className="item-container">   <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section></div>
          <div className="item-container">   <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section></div>
          <div className="item-container">   <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section></div>
          <div className="item-container">   <img id="item" src={this.props.pic1} />
            <section className ="info">
              <h2>{this.props.name1}</h2>
              <h1>{this.props.price1}</h1>
              <button>add to cart</button>
            </section></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    name1: reduxState.itemsReducer.item1.name,
    pic1: reduxState.itemsReducer.item1.pic,
    price1: reduxState.itemsReducer.item1.price,
    name2: reduxState.itemsReducer.item2.name
  };
};
export default connect(mapStateToProps, {
  getItems
})(Home);
