import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectService from "../Component/SelectService/MobileView";
import AddCar from "../Component/AddCar/MobileView";
import Cart from "../Component/Cart/MobileView";
export default () => {
  return (
    <>
      <Route path="/select-service" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      <Route path= "/cart" component ={Cart} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
