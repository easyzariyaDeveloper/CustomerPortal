import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCar from "../Component/AddCar/MobileView";
import Cart from "../Component/Cart/MobileView";
// import AddressForm from "../Component/Profile/MobileView/AddressForm";
import SelectService from "../Component/SelectService/MobileView";
import Otp from "../Component/OtpPage";
import ServiceList from "../Component/SelectService/MobileView/ServiceList";
import ServiceDescription from "../Component/SelectService/MobileView/ServiceDescption";
import Account from "../Component/SignUp/MobileView";
import Profile from "../Component/Profile/MobileView";
import Address from "../Component/Cart/MobileView/Address";
import Home from "../Component/Home/MobileView/index";


export default () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/services" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart/address"  component  = {Address} />
      {/* <Route path="/profile/:id" component={Profile} /> */}
      <Route path="/profile" component={Profile} />
      {/* <Route exact path="/add-address" component={AddressForm} /> */}
      {/* <Route path="/edit-address/:id" component={AddressForm} /> */}
      <Route path = "/account" component={Account}/>
      <Route path = "/otp" component={Otp} />
      <Route path = "/service/:mode/:type" component={ServiceList} />
      <Route path = "/service-description/:mode/:type" component={ServiceDescription} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
