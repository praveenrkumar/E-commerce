import React from "react";
import {NavLink} from "react-router-dom"
import history from "./history";

class Nav extends React.Component{

  onLogoutClick=(e)=>{
    e.preventDefault();
    this.props.updateIsLoggedInStatus(false)
    history.replace("/")
  }
    render(){
        return(<div>

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">e-Commerce</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      {!this.props.isLoggedIn?(
          <li className="nav-item">
          <NavLink className="nav-Link " activeClassName="active" to="/">Login</NavLink>
                  </li>
       ):("")}--
       {/* {this.props.isLoggedIn?(
       
       <li className="nav-item">
<NavLink className="nav-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
</li>

):("")} */}
       {this.props.isLoggedIn?(
        
        <li className="nav-item">
<NavLink className="nav-link" activeClassName="active" to="/customer" >Customer</NavLink>
        
        </li>
):("")}
       {this.props.isLoggedIn?(

        <li className="nav-item">
<NavLink className="nav-link" activeClassName="active" to="/shop">Shop</NavLink>
        </li>
):("")}
{this.props.isLoggedIn?(

<li className="nav-item">
<a className="nav-link" style={{cursor:"pointer"}} onClick={this.onLogoutClick} >Logout</a>
</li>
):("")}

        
      
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

        </div>)
    }
}
export default Nav;



// 
