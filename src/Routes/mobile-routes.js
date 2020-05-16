import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCar from "../Component/AddCar/MobileView";
import Cart from "../Component/Cart/MobileView";
import Profile from "../Component/Profile/MobileView";
import AddressForm from "../Component/Profile/MobileView/AddressForm";
import Service from "../Component/Service/MobileView";
import Login from "../Component/Login/MobileView";
import SignUp from "../Component/SignUp/MobileView";
import SelectService from "../Component/SelectService/MobileView";
import Otp from "../Component/OtpPage";


export default () => {
  return (
    <>
      <Route path="/select-service" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path="/cart" component={Cart} />
      <Route path="/profile/:id" component={Profile} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/add-address" component={AddressForm} />
      <Route path="/edit-address/:id" component={AddressForm} />
      <Route path= "/service" component={Service}/>
      <Route path = "/login" component={Login}/>
      <Route path = "/signup" component={SignUp}/>
      <Route path = "/otp" component={Otp} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
