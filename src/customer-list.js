import React from "react";
import { Link } from "react-router-dom";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Customer",
      customersCount: "",
      customers: [],
    };
  }
  componentDidMount = async () => {
    let response = await fetch("http://localhost:3000/customers", {
      method: "GET",
    });
    if (response.ok) {
      let body = await response.json();
      this.setState({ customers: body, customersCount: body.length });
    } else {
      console.log("Error:" + response.status);
    }
  };
  onDeleteClick = async (id) => {
    if (window.confirm("Are you sure to delete this customer ?")) {
      var response = await fetch(`http://localhost:3000/customers/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        var allCustomers = [...this.state.customers];
        allCustomers = allCustomers.filter((cust) => {
          return cust.id != id;
        });
        this.setState({ customers: allCustomers });
      }
    }
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.name}
          <span className="badge badge-secondary m-2 bg-secondary">
            {this.state.customersCount}
          </span>
          <Link to="/new-customer" className="btn btn-sm btn-secondary">
            Register
          </Link>
        </h4>
        <table className="table">
          <thead className="border-bottom mb-1 pb-2">
            <th>#</th>
            <th>Profile Picture</th>
            <th>Customer Name</th>
            <th>Number</th>
            {/* <th>City</th> */}
            <th>Option</th>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>
                    <img src={cust.photo} />
                  </td>
                  <td>{cust.name}</td>
                  <td>{cust.phone ? cust.phone : <div>No Phone</div>}</td>
                  {/* <td>{cust.city}</td> */}
                  <td>
                    <button
                      className="btn-sm btn-danger "
                      onClick={() => {
                        this.onDeleteClick(cust.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomerList;
