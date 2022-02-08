import React from "react";
import "./NavCart.scss";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";

const NavCart = ({ amount }) => {
  return (
    <div className="navcart-container">
      <h3>total items</h3>
      <hr></hr>
      <span>{amount}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { amount: state.amount };
  //no we have acsses to state
};
export default connect(mapStateToProps)(NavCart);
//now we have acsses to state
//connect have arguments
//

//
