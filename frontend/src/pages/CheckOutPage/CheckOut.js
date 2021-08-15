import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./checkout.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
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

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //   const free = useSelector((state) => state.freeEvent);
  //   const {} = free;

  //   const freeArr = useSelector((state) => state.freeEventArr);
  //   const { success } = freeArr;

  useEffect(() => {
    if (!userInfo) {
      history.push(`/sign-in`);
    }
  });

  const config = {
    public_key: "FLWPUBK_TEST-cd1a2ac453695cbe34fdd884d9c00fe4-X",
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userInfo?.user.email,
      name: userInfo?.user.username,
    },
    customizations: {
      title: title,
      description: `Payment for ${title} event`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  console.log(arr);
  return (
    <div className="checkout-container">
      <div className="checkout-input">
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                if (response.status === "successful") {
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
                    dispatch(
                      addRegisteredUserToEventArray(eventId, userInfo?.user._id)
                    )
                  );
                  history.push("/dashboard");
                }
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          Pay ₦{price} Flutter
        </button>
      </div>
    </div>
  );
};

export default CheckOut;

//

// export default function App() {
//   const config = {
//     public_key: 'FLWPUBK-**************************-X',
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//       phonenumber: '07064586146',
//       name: 'joel ugwumadu',
//     },
//     customizations: {
//       title: 'my Payment Title',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <div className="App">
//      <h1>Hello Test user</h1>

//       <button
//         onClick={() => {
//           handleFlutterPayment({
//             callback: (response) => {
//                console.log(response);
//                 closePaymentModal() // this will close the modal programmatically
//             },
//             onClose: () => {},
//           });
//         }}
//       >
//         Payment with React hooks
//       </button>
//     </div>
//   );
// }
