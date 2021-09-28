import React from "react";

class InsertCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", city: "", phone: "", photo: "" };
  }
  onSaveClick = async (event) => {
    event.preventDefault();
    let id = this.props.match.params.id;

    var customer = {
      name: this.state.name,
      // city: this.state.city,
      phone: this.state.phone,
      photo: this.state.photo,
    };

    //make post request
    var response = await fetch(`http://localhost:3000/customers`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);

    //after receiving response body, redirect to /customers
    if (body) {
      this.props.history.replace("/customer");
    }
  };
  eName = (e) => {
    this.setState({ name: e.target.value });
  };
  // eCity = (e) => {
  //   this.setState({ city: e.target.value });
  // };
  ePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  ePhoto = (e) => {
    this.setState({ photo: e.target.value });
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h3 className="p-2 border-bottom">Register</h3>
            {/* Customer Name Starts */}
            <div className="form-group form-row">
              <div className="col-lg-4">Customer Name</div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.eName}
                ></input>
              </div>
            </div>
            {/* Customer Name Ends */}

            {/* City Starts */}

            {/* <div className="form-group form-row">
              <div className="col-lg-4"> City</div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.eCity}
                ></input>
              </div>
            </div> */}

            {/* City Ends */}

            {/* Phone Starts */}
            <div className="form-group form-row">
              <div className="col-lg-4">Phone</div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.ePhone}
                ></input>
              </div>
            </div>
            {/* Phoen Ends */}

            {/*Photo starts */}
            <div className="form-group form-row">
              <div className="col-lg-4">Photo</div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.ePhoto}
                ></input>
              </div>
            </div>
            {/* Photo Ends */}
            <div className="border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default InsertCustomer;
