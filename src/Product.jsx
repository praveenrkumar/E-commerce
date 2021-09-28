import React from "react";

class Product extends React.Component{

    render() {
        console.log(this.props);
        return (
          <div className="container-fluid">
            <div className="row">
            {this.props.data.map((data) => (
              <div className="col-md-6">
                <div className="card m-2">
                  <div className="card-body ">
                    <div className="text-muted">
                      {data.id}
                      <span
                        className="pull-right handle"
                        onClick={() => {
                          this.props.onDelete(data);
                        }}
                      >
                        <i className="fa fa-times" />
                      </span>
                    </div>
                    <h4 className="p-5 border-top">{data.productName}</h4>
                    <div>${data.price}</div>
                  </div>
                  <div className="card-footer">
                    <div className="float-start">
                      <span className="p-2">{data.quantity}</span>
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-success"
                          onClick={() => {
                            this.props.onIncrement(data, 10);
                          }}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => {
                            this.props.onDecrement(data, 0);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="float-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        );
      }
    
   
}
export default Product;