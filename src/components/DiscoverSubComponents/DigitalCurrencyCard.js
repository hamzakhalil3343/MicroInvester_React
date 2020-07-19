import React from "react";
import "./../../Assets/css/DigitalCurrencyCard.css";
import { Grid } from "@material-ui/core";

const DigitalCurrencyCard = () => {
  return (
    <Grid container xs={12} spacing={3}>
      <div class="abf-frame">
        <div class="abf-header">
          <div>
            <div class="abf-ash1">
              <img
                src={
                  "https://apirone.com/static/promo/bitcoin_logo_vector.svg "
                }
                width="95"
                alt=""
              />
            </div>
          </div>
          <div style={{ textAlign: "center", backgroundColor: "#fff" }}>
            <span class="abf-qr">
              {" "}
              <img
                class="abf-img-height"
                src={
                  "https://apirone.com/api/v1/qr?message=bitcoin%3MeSHt5CCBMoq14BNYjfCfp81ugFVjwZeC%3Famount%3D0.04656914"
                }
                style={{ display: "inline" }}
                alt="QR code for payment"
              />{" "}
            </span>{" "}
          </div>
        </div>
        <div class="abf-form">
          <div class="abf-ash1">
            {" "}
            Please send{" "}
            <strong>
              <span class="abf-totalbtc">0.04656914</span>
            </strong>{" "}
            BTC to address:{" "}
          </div>
          <div class="abf-address abf-topline abf-ash2 abf-input-address">
            3MeSHt5CCBMoq14BNYjfCfp81ugFVj
          </div>
          <div class="abf-data abf-topline">
            <div class="abf-list">
              <div class="abf-list-item">
                <div class="abf-label">Merchant:</div>
                <div class="abf-value">Example Store</div>
              </div>
              <div class="abf-list-item">
                <div class="abf-label">Amount to pay:</div>
                <div class="abf-value">
                  <span class="abf-totalbtc">0.04656914</span> BTC
                </div>
              </div>
              <div class="abf-list-item">
                <div class="abf-label">Arrived amount:</div>
                <div class="abf-value">
                  <span class="abf-arrived">0.00001000</span> BTC
                </div>
              </div>
              <div class="abf-list-item">
                <div class="abf-label">Remains to pay:</div>
                <div class="abf-value">
                  <b style={{ fontSize: "10px" }}>
                    <span class="abf-remains">0.04655914</span> BTC
                  </b>
                </div>
              </div>
              <div class="abf-list-item">
                <div class="abf-label">Date:</div>
                <div class="abf-value">2018-09-25</div>
              </div>
              <div class="abf-list-item abf-tx-block">
                <div class="abf-label">Transaction(s):</div>
                <div class="abf-value abf-tx">
                  <div>
                    <a
                      href={
                        "https://apirone.com/btc/tx/7915799c224327bc9a89cc44e8a98e09aca3ace17bd1f6f5a8423c69b6511b84"
                      }
                    >
                      7915799c22...b6511b84
                    </a>
                    <div
                      class="abf-confirmations abf-green"
                      title="Confirmations count"
                    >
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div class="abf-list-item">
                <div class="abf-label">Status:</div>
                <div class="abf-value">
                  <b style={{ fontSize: "12px" }}>
                    <span class="abf-status">Waiting payment</span>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default DigitalCurrencyCard;
