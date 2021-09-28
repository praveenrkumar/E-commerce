import "./App.css";
import Nav from "./Nav";
import Login from "./Login";
import CustomerList from "./customer-list";
import Shop from "./Shop";
// import DashBoard from "./DashBoard";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import React from "react";
import history from "./history";
import SideBar from "./SideBar";
import InsertCustomer from "./Insert-customer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
  render() {
    return (
      <Router history={history}>
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>
            <div className="col-md-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route exact path="/customer" component={CustomerList} />
                {/* <Route exact path="/dashboard" component={DashBoard} /> */}
                <Route exact path="/new-customer" component={InsertCustomer} />

                <Route exact path="/shop" component={Shop} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
