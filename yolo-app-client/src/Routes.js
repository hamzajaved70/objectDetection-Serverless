import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Signup from "./containers/Signup";
import Upload from "./containers/Upload";
import Search from "./containers/Search";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}
        />
        <UnauthenticatedRoute path="/login" exact component={Login} props=
            {childProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} props=
            {childProps} />
        <AuthenticatedRoute path="/search" exact component={Search} props=
            {childProps} />
        <AuthenticatedRoute path="/upload" exact component={Upload} props=
            {childProps} />
        <Route component={NotFound} />
    </Switch>;