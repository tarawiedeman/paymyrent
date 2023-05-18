import "./Success.scss";
import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="success">
      <p>Thank you for your payment! A receipt will be emailed to you.</p>
      <p>
        Need to make another payment? Visit your{" "}
        <Link to="/payment" className="success__dashboard">
          dashboard
        </Link>
      </p>
    </section>
  );
}
export default Success;
