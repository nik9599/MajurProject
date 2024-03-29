
import "./App.css";
import Cart from "./Component/Pages/CartPage/Cart";
import Landing from "./Component/Pages/LandingPage/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { SkeletonTheme } from 'react-loading-skeleton';
import SignUp from "./Component/Pages/SIgnupPage/SignUp";
import Login from "./Component/Pages/LoginPages/Login";
import Payment from "./Component/Pages/Payment/Payment";
import Profile from "./Component/Pages/ProfilePage/Profile";

function App() {

  return (
    <BrowserRouter>
     <SkeletonTheme baseColor="#ded9d9" highlightColor="#bdbbbb" >
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/cart" element={<Cart  />} />
          <Route exact path="/signUp" element={<SignUp/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/payment/:orderId" element={<Payment/>} />
          <Route  exact path="/profile" element={<Profile/>} />
        </Routes>
      
      </div>
      </SkeletonTheme>
    </BrowserRouter>
  );
}

export default App;
