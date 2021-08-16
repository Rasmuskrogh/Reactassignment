import React from 'react'
import {Route, BrowserRouter as Router, Switch} from  "react-router-dom"
import CardList from "./CardList";
import Menu from "./Menu";
import Login from "./Login";
import Home from "./Home";
import Register from "./Registration";
import CreateTrip from "./CreateTrip";
import Bookings from "./Bookings";
import Profile from "./Profile";

function AppRoute() {
    return (
        <>
          <Router>
            <Menu />
            <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/" exact component={Home}/>
            <Route path="/cardList" component={CardList}/>
            <Route path="/login" component={Login}/>
            <Route path="/create" component={CreateTrip}/>
            <Route path="/bookings" component={Bookings}/>
            <Route path="/profile" component={Profile}/>
            </Switch>
          </Router>  
        </>
    )
}

export default AppRoute