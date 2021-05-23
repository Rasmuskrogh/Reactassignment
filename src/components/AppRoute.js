import React from 'react'
import {Route, BrowserRouter as Router, Switch} from  "react-router-dom"
import CardList from "./CardList";
import Menu from "./Menu";
import Login from "./Login";
import Home from "./Home";
import View from "./View";
import Register from "./Registration";
import CreateTrip from "./CreateTrip";

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
            <Route path="/view" component={View}/>
            <Route path="/create" component={CreateTrip}/>
            </Switch>
          </Router>  
        </>
    )
}

export default AppRoute