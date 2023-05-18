import "./Failure.scss";
import { Link } from "react-router-dom";

function Failure() {
  return (
    <section className="failure">
      <p>
        Your payment attempt failed. Please try again using the payment link in
        your{" "}
        <Link to="/payment" className="failure__dashboard">
          dashboard
        </Link>
      </p>
    </section>
  );
}
export default Failure;
