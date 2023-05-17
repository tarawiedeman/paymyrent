import "./Logout.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setError("");
      navigate("/");
    } catch {
      setError(error.response.data);
    }
  };

  return (
    <main className="logout">
      <div className="logout__description--bold">
        Are you sure you want to log out of PayMyRent?
      </div>

      <div className="logout__description">
        You cannot access your rent due, or the option to make a payment for
        rent unless you're logged in.
      </div>

      <button className="button__logout" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}

export default Logout;
