import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectService from "../Component/SelectService/MobileView";

export default () => {
    return (
      <>
        <Route path = "/select-service" component = {SelectService}/>
        {/* <Route component = {NotFound} /> */}
      </>
    )
}