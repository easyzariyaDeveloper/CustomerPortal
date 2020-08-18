import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCar from "../Component/AddCar/MobileView";
import Cart from "../Component/Cart/MobileView";
import SelectService from "../Component/SelectService/MobileView";
import Otp from "../Component/OtpPage";
import ServiceList from "../Component/SelectService/MobileView/ServiceList";
import ServiceDescription from "../Component/SelectService/MobileView/ServiceDescption";
import Account from "../Component/SignUp/MobileView";
import Profile from "../Component/Profile/MobileView";
import Address from "../Component/Address";
import Home from "../Component/Home/MobileView/index";
import CheckOutCart from "../Component/CheckOutCart/MobileView";
import InitiatePayment from "../Component/CheckOutCart/MobileView/payment";
import OrderDetails from "../Component/OrderDetails/MobileView";

export default () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path = "/cart/add-address" exact component = {CheckOutCart} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/cart/checkout" exact component = {InitiatePayment}/>
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
      <Route path = "/order/:orderId/detail" component={OrderDetails} />
      
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
