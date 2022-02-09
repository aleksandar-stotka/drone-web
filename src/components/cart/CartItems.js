import React from "react";
import "./CartItems.scss";
import { connect } from "react-redux";
import { INCREASE, REMOVE } from "../../actions";

const CartItems = ({
  id,
  title,
  price,
  img,
  amount,
  cart,
  remove,
  increase,
}) => {
  return (
    <div className="col span-1-of-3">
      <img className="store-img" src={img} alt={title} />
      <div className="store-title">
        <h3>{title}</h3>
        <h4>price:{price}$</h4>
        <span>{amount}</span>
        <button className="btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="button-container">
        <button onClick={() => increase(id)}>INCREASE</button>
        <button>DECREASE</button>
      </div>
    </div>
  );
};

const mapStateToProps = (dispatch, ownProps) => {
  console.log(ownProps); //dostapnost do cel object
  const { id, amount } = ownProps; //ownProps is actualy payload

  //if we want to use dispatch to change something we use two armunets

  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
  };

  //remove is a prop that we use
};

export default connect(null, mapStateToProps)(CartItems);
//have two arguments  1 null for dispatch because still not is happend
// and mapStateProps for our props
