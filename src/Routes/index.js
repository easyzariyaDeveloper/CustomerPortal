import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Component/Home";
import Service from "../Component/Service";
import AddCar from "../Component/AddCar";
import NotFound from "../Component/NotFound";
import Login from "../Component/Login";
import SelectService from "../Component/SelectService";
import MobSelectService from "../Component/SelectService/MobileView";

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/add-car" component={AddCar} />
      <Route path="/login" component={Login} />
      <Route path="/select-service" component={SelectService} />
      <Route path="/mob-select-service" component={MobSelectService} />
      {/* <Route component = {NotFound} /> */}
    </>
  );
};
