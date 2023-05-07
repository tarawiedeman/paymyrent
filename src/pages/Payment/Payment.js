import "./Payment.scss";

// import {useEffect} from 'react';

//on page load I believe I need to have this script run:
//Below script calls the Bluesnap Hosted Payment Fields Javascript file
<script
  type="text/javascript"
  src="https://sandpay.bluesnap.com/web-sdk/5/bluesnap.js"
></script>;



function Payment() {
  return (
    <div>
      <form action="" method="POST" id="checkout-form">
        <div>
            <label className="form__label">First Name</label>
            <input className="form__input" type="text" name="firstName"></input>
        </div>
        <div>
            <label className="form__label">Last Name</label>
            <input className="form__input" type="text" name="lastName"></input>
        </div>
        <div>
            <label className="form__label"> Property Name</label>
            <input className="form__input" type="text" name="propertyName"></input>
        </div>
        <div>
            <label className="form__label"> Suite Name</label>
            <input className="form__input" type="text" name="suiteName"></input>
        </div>

        <div data-bluesnap="ccn">
          <label className="form__label" for="creditCard">Card Number</label>
          <input className="form__input" type="text" name="creditCard" id="creditCard"></input>
        </div>

        <div data-bluesnap="cvv">
          <label className="form__label" for="cvv">Security Code</label>
          <input className="form__input" type="text" name="cvv" id="cvv"></input>
        </div>

        <div data-bluesnap="exp">
          <label className="form__label" for="Expiration">Exp. (MM/YYYY)</label>
          <input className="form__input" type="text" name="exp-month" id="exp-month" size="2"></input>
          <span> / </span>
          <input className="form__input" type="text" name="exp-year" id="exp-year" size="4"></input>
        </div>

        <button type="submit" id="submit-button">
          Buy Now
        </button>
      </form>
    </div>
  );
}

export default Payment;


//the following script should run after the <divs> above 

//see step 4 on https://developers.bluesnap.com/v8976-Tools/reference/hosted-payment-fields#before-getting-started