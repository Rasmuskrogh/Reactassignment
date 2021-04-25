import React from 'react'
import {Route, BrowserRouter as Router,} from  "react-router-dom"
import CardList from "./CardList";
import Form from "./Form";
import Menu from "./Menu";
import Login from "./Login";
import Home from "./Home";
import View from "./View";

function AppRoute() {
    return (
        <>
          <Router>
            <Menu />
            <Route path="/" exact component={Home}/>
            <Route path="/Form" component={Form}/>
            <Route path="/CardList" component={CardList}/>
            <Route path="/Login" component={Login}/>
            <Route path="/View" component={View}/>

          </Router>  
        </>
    )
}

export default AppRoute