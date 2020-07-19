import React, { useState } from "react";
import CreditCard from "./CreditCard";
import DigitalCurrencyCard from "./DigitalCurrencyCard";
import Wire from "./Wire";
import "./../../Assets/css/Payment.css";
const Payment = () => {
  const [itemValue, setItem] = useState("");
  const checked = itemValue;
  let showData;
  if (checked === "C_card") {
    showData = <CreditCard></CreditCard>;
  }
  if (checked === "D_card") {
    showData = <DigitalCurrencyCard></DigitalCurrencyCard>;
  }
  if (checked === "B_card") {
    showData = <Wire></Wire>;
  }
  return (
    <div style={{ marginBottom: "255px", paddingBottom: 10 }}>
      <div style={{ textAlign: "left", paddingBottom: 20 }}>
        <input
          type="radio"
          id="p1"
          name="payment"
          value="C_card"
          onChange={() => setItem("C_card")}
        ></input>
        <label for="p1">Pay by credit Card</label>
        <br></br>
        <input
          type="radio"
          id="p1"
          name="payment"
          value="D_card"
          onChange={() => setItem("D_card")}
        ></input>
        <label for="p1">Pay by Digital Currency</label>
        <br></br>
        <input
          type="radio"
          id="p1"
          name="payment"
          value="B_card"
          onChange={() => setItem("B_card")}
        ></input>
        <label for="p1">Pay by bank wire</label>
        <br></br>
      </div>

      <div className="Center"> {showData} </div>
    </div>
  );
};

export default Payment;
