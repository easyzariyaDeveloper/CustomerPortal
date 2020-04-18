import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Component/Home";
import Service from "../Component/Service";
import AddCar from "../Component/AddCar";
import NotFound from "../Component/NotFound";

export default () => {
    return <>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/services" component = {Service} />
        <Route exact path = "/add-car" component = {AddCar} />
        {/* <Route component = {NotFound} /> */}
    </>
}