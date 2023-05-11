import "./Payment.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Payment () {

  //check if there is a token
  //send request to /users/current with token 
  //user token valid > show user data 
  //user token invalid > show "you must be logged in"
 
  const [user,setUser] = useState(null);
  const [failedAuth,setFailedAuth] = useState(false);
  const params = useParams();
  const id = params.tenantid;
  const [currentTenant, setTenant] = useState(null);

  useEffect(() => { 
    const token = localStorage.getItem("token");
   

    if(!token) {
      return setFailedAuth(true);
    }

    axios.get('http://localhost:8000/api/users/current',{
      headers: {
        Authorization: `Bearer ${token}`
      }
      })
      .then((response) => {
        setUser(response.data);
        console.log(user);
      })
      .catch((error)=> {
        console.log('Error authenticating',error);
        setFailedAuth(true);
      });

      

      axios
      .get(`http://localhost:8000/api/tenants/${id}`)
      //add auth header 
      //decode jot

      .then((response) => {
        let currentTenant={};
        currentTenant=response.data;
        setTenant(currentTenant);
        console.log(currentTenant);
        
       
      })
      .catch((e) => {
        console.log(e.message);
      });
    },[]);
  
    const handleLogout = () => {
      
      localStorage.removeItem('token');
      setUser(null);
      setFailedAuth(true);
    }

    if(failedAuth) {
      return(
        <section className="dashboard">
          <p>You must be logged in to see this page.</p>
          <p>
            <Link to="/login">Login</Link>
          </p>
        </section>
      )
    }

    if(user === null){
      return(
        <section className="dashboard">
          <p>Loading...</p>
        </section>
      )
    }

  
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
  

return (
  <section className="dashboard">
    {/* <h1>{`${currentTenant.tenant_name} - Payment Dashboard`}</h1> */}
    <div>
      <div className="dashboard__description--rent">
      {/* <h5>{`${currentTenant.amount} is due on the first of each month as part of your monthly rent payment. Please pay below.`}</h5> */}
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
