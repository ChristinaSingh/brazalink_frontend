import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceRequest from "./pages/ServiceRequest";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import QA from "./pages/QA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AddBusiness from "./pages/AddBusiness";
import Login from "./pages/Login";
import Brazapmap from "./pages/Brazapmap";
import DetailsBusiness from "./pages/DetailsBusiness";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import PasswordRest from "./pages/PasswordRest";
import Profile from "./pages/Profile";
import MapSide from "./pages/MapSide";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/details/:id" element={<DetailsBusiness />} />
        <Route path="/q&a" element={<QA />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/brazamap" element={<MapSide />} />
        <Route path="/add-business" element={<AddBusiness />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/password-reset" element={<PasswordRest />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
