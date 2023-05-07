import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
// import Dashboard from "./pages/Dashboard/Dashboard";

const baseUrl = "http://localhost:5000";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="login" element={<Login />} />
        <Route path="/dashboard/:tenantId" element={<Dashboard/>} />  */}
        <Route path="payment/:tenantId" element={<Payment />} />
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
