import React from "react";
import history from "./history";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "abc@gmail.com" &&
      this.state.password === "1234"
    ) {
      this.setState({
        message: <span className="text-success">Logged-In</span>,
      });
      this.props.updateIsLoggedInStatus(true);
      history.replace("/dashboard");
    } else {
      this.setState({
        message: <span className="text-danger">Try-Again</span>,
      });
    }
  };
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="mt-5">
          {/* E-mail starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">
              E-Mail:
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                  console.log(this.state.email);
                }}
              />
            </label>
          </div>
          {/* E-Mail ends */}
          {/* Password-Starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">
              Password:
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                  console.log(this.state.password);
                }}
              />
            </label>
          </div>
          {/* Password-Ends */}
          <div>
            {this.state.message}
            <button
              className="btn btn-secondary m-2 p-2"
              onClick={this.onLoginClick}
            >
              Log-In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
