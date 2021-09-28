import React from "react";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <h4 className="p-1 border-bottom">SideBar</h4>
        <div className="list-group mt-2">
          {/* <NavLink
            to="/dashboard"
            className="list-group-link list-group-item-action"
          >
            Dashboard
          </NavLink> */}
          <NavLink
            to="/customer"
            className="list-group-link list-group-item-action"
          >
            Customer
          </NavLink>
          <NavLink
            to="/Shop"
            className="list-group-link list-group-item-action"
          >
            Shop
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SideBar;
