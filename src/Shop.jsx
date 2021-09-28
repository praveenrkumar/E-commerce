import React from "react"; 
import Product from "./Product";

class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                        {id:1,productName:"iPhone",price:200,quantity:0},                     
                        {id:2,productName:"Samsung",price:400,quantity:0},
                        {id:3,productName:"Red-MI",price:300,quantity:0},
                        {id:4,productName:"Sony",price:600,quantity:0},                   
                        {id:5,productName:"Ken",price:500,quantity:0},
                        {id:6,productName:"Red",price:900,quantity:0},  
                    ]
        }
    }

    handleIncrement=(data,maxValue)=>{
        // console.log("Incremented",data)
        let allProducts = [...this.state.products];  
        let index = allProducts.indexOf(data);  
        if(allProducts[index].quantity < maxValue){
            allProducts[index].quantity ++;
            this.setState({products:allProducts})
        }
    };


    handleDecrement=(data,minValue)=>{
        // console.log("Decremented",data)
        let allProducts = [...this.state.products];  
        let index = allProducts.indexOf(data);  
        if(allProducts[index].quantity > minValue){
            allProducts[index].quantity --;
        this.setState({products:allProducts})
        } 
    }


    handleDelete=(data)=>{
        console.log("Delete",data)
        let allProducts = [...this.state.products];  
        let index = allProducts.indexOf(data);  
        if(window.confirm("Are you sure ?")){
            allProducts.splice(index,1);
            this.setState({products:allProducts})
        }
    }

    render(){
        return(
        <div className="">
            <h1>Shopping Cart </h1>
            <Product  data={this.state.products}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            >       
            </Product>
        </div>)
        
    }
    
}


export default Shop;