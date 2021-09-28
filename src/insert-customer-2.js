// import React from "react";

// class InserCustomer extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "", city: "", phone: "", photo: "" };
//   }
//   onSaveClick = async (event) => {
//     event.preventDefault();
//     var custmomer = {
//       name: this.state.name,
//       city: this.state.city,
//       phone: this.state.phone,
//       photo: this.state.photo,
//     };
//     var response = await fetch(`http://localhost:3000/customers`, {
//       method: "POST",
//       body: JSON.stringify(custmomer),
//       headers: { "Content-type": "application/json" },
//     });
//     var body = await response.json;
//     console.log(body);
//   };
//   render() {
//     return (
//       <div className="row">
//         <div className="col-lg-6 mx-auto">
//           <form>
//             <h3 className="m-2 p-2 border-bottom">Register New Customer</h3>

//             {/* Customer Name Starts */}
//             <div className="form-group form-row">
//               <label className="col-lg-4">Customer Name</label>
//               <div className="col-lg-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.name}
//                   onChange={(event) => {
//                     this.setState({
//                       name: event.target.value,
//                     });
//                   }}
//                 />
//               </div>
//             </div>
//             {/* Customer Name Ends */}
//             {/* City Name Starts */}
//             <div className="form-group form-row">
//               <label className="col-lg-4">City Name</label>
//               <div className="col-lg-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.city}
//                   onChange={(event) => {
//                     this.setState({
//                       city: event.target.value,
//                     });
//                   }}
//                 />
//               </div>
//             </div>
//             {/* City Name Ends */}
//             {/* Phone Name Starts */}
//             <div className="form-group form-row">
//               <label className="col-lg-4">Phone</label>
//               <div className="col-lg-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.phone}
//                   onChange={(event) => {
//                     this.setState({
//                       phone: event.target.value,
//                     });
//                   }}
//                 />
//               </div>
//             </div>
//             {/* Phone Name Ends */}
//             {/* Photo Starts */}
//             <div className="form-group form-row">
//               <label className="col-lg-4">Photo</label>
//               <div className="col-lg-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={this.state.photo}
//                   onChange={(event) => {
//                     this.setState({
//                       photo: event.target.value,
//                     });
//                   }}
//                 />
//               </div>
//             </div>
//             {/* Photo Ends */}
//             <div className="border-top p-2">
//               <button className="btn btn-primary" onChange={this.onSaveClick}>
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default InserCustomer;
