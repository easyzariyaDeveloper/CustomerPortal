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
import Address from "../Component/Address";
import Home from "../Component/Home/MobileView/index";
import CheckOutCart from "../Component/CheckOutCart/MobileView";


export default () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path="/cart" component={Cart} />
      {/* <Route path="/address"  component  = {Address} /> */}
      <Route path="/address/add-address"  component = {Address} />
      <Route path="/address/edit-address"  component  = {Address} />
      {/* <Route path="/profile/:id" component={Profile} /> */}
      <Route path="/profile/:type" component={Profile} />
      <Route path="/profile" exact component={Profile} />
      <Route path = "/login" component={Account}/>
      <Route path = "/signup" component={Account}/>
      <Route path = "/otp" component={Otp} />
      <Route path = "/service/:mode/:type" component={ServiceList} />
      <Route path = "/service-description/:mode/:packageId/:packageCode" component={ServiceDescription} />
      <Route path = "/checkout" component = {CheckOutCart} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
