import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./checkout.css";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import {
  freeEventReg,
  addRegisteredUserToEventArray,
} from "../../actions/eventActions";

const CheckOut = ({ history }) => {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);

  const eventId = useParams().eventId;
  const title = useParams().title;
  const price = useParams().price;

  const makePayment = (token) => {};

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const free = useSelector((state) => state.freeEvent);
  const { loading, freeReg, error } = free;

  const freeArr = useSelector((state) => state.freeEventArr);
  const { success } = freeArr;

  const handleFreeReg = () => {
    if (!userInfo) {
      history.push(`/sign-in`);
    }
    dispatch(
      freeEventReg(
        userInfo?.user._id,
        eventId,
        userInfo?.user.username,
        title,
        userInfo?.user.email
      )
    );
    setArr(
      dispatch(addRegisteredUserToEventArray(eventId, userInfo?.user._id))
    );
  };
  console.log(arr);
  return (
    <div className="checkout-container">
      <h4>You are paying ₦{price}</h4>
      <div className="checkout-input">
        <input className="checkout" placeholder="Card Holder Name" />
        <input
          className="checkout"
          placeholder="Credit Card Number"
          type="Number"
        />
        <input className="checkout" placeholder="Expiration Month" />
        <input className="checkout" placeholder="Expiration Year" />
        <input className="checkout" placeholder="CVC" type="Number" />
        <button onClick={handleFreeReg}>Test</button>
        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayment}
        >
          <button>Pay ₦{price}</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default CheckOut;
