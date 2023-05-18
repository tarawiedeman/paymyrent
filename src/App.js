import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Payment from "./pages/Payment/Payment";
import Success from "./pages/Success/Success";
import Failure from "./pages/Failure/Failure";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Success />} />
        <Route path="failure" element={<Failure />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//could add a payment success page later on and/or a login success page
//login page will redirect to dashboard/:tenantId upon succesfull login
//Home page is now a landing page for all tenants to understand what
//this application is used for.
