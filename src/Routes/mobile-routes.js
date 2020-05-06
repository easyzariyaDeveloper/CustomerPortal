import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectService from "../Component/SelectService/MobileView";
import AddCar from "../Component/AddCar/MobileView";
export default () => {
  return (
    <>
      <Route path="/select-service" component={SelectService} />
      <Route path="/add-car" component={AddCar} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
