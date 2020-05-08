import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectService from "../Component/SelectService/MobileView";
import AddCar from "../Component/AddCar/MobileView";
import Profile from "../Component/Profile/MobileView";
import AddressForm from "../Component/Profile/MobileView/AddressForm";
export default () => {
  return (
    <>
      <Route path="/select-service" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/add-address" component={AddressForm} />
      <Route path="/edit-address/:id" component={AddressForm} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
