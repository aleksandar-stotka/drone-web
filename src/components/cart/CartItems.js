import React from "react";
import "./CartItems.scss";
import { connect } from "react-redux";
import { REMOVE } from "../../actions";

const CartItems = ({ id, title, price, img, amount, cart, remove }) => {
  return (
    <div className="col span-1-of-3">
      <img className="store-img" src={img} alt={title} />
      <div className="store-title">
        <h3>{title}</h3>
        <h4>price:{price}$</h4>
        <span>{amount}</span>
        <button className="btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div className="button-container">
        <button onClick={() => remove(id)}>add</button>
        <button>add</button>
      </div>
    </div>
  );
};

const mapStateToProps = (dispatch, ownProps) => {
  console.log(ownProps); //dostapnost do cel object
  const { id } = ownProps;

  return { remove: () => dispatch({ type: REMOVE, payload: { id } }) };
  //remove is a prop that we use
};

export default connect(null, mapStateToProps)(CartItems);
