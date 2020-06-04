import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import Upload from "./containers/Upload";
import Search from "./containers/Search";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}
        />
        <AppliedRoute path="/login" exact component={Login} props=
            {childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props=
            {childProps} />
        <AppliedRoute path="/search" exact component={Search} props=
            {childProps} />
        <AppliedRoute path="/upload" exact component={Upload} props=
            {childProps} />
        <Route component={NotFound} />
    </Switch>;