import "./Payment.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Payment () {

  function createCheckout(e) {
    e.preventDefault();
    axios
    .post('http://localhost:8000/api/create-checkout',{})
    .then((response) => {
      if (response.status ==200) {
        window.location=response.data;
      }
    })
    .catch((e) => console.log(e.message));
  }
  
  const params = useParams();
  const id = params.tenantid;

  const [currentTenant, setTenant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tenants/${id}`)

      .then((response) => {
        let currentTenant={};
        currentTenant=response.data;
        setTenant(currentTenant);
        console.log(currentTenant);
        // let tenantName = currentTenant.tenant_name;
       
      })
      .catch((e) => {
        console.log(e.message);
      });
  },[]);

  if (!currentTenant) {
    return(
    <div>
      Loading...
    </div>
  )}

return (
  <section className="rent">
    <h1>{`${currentTenant.tenant_name} - Payment Dashboard`}</h1>
    <div>
      <div className="rent__description">
      <h5>{`${currentTenant.amount} is due on the first of each month as part of your monthly rent payment. Please pay below.`}</h5>
      </div>
    </div>
    <div>
      <form onSubmit={createCheckout}>
        <button className="button__submit"type="submit" id="submit-button">
          Pay Now
        </button>
      </form>
    </div>
  </section>
);

}

export default Payment;
