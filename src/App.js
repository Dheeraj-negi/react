import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Product from "./data/Product";
import Modal from './components/Modal';
import Checkout from './components/Checkout';
import React from 'react';
import Cart from './components/Cart';
import { render } from '@testing-library/react';

class App extends React.Component {
    state =
        {
            cart: [

            ],
            showCart: false
        }
    cartProductQuantityDescease = (newcart) => {

        var updatedcart = this.state.cart;
        var objIndex = updatedcart.findIndex((obj => obj.id == newcart.Productid));

        if (updatedcart[objIndex].quantity > 1) {
            updatedcart[objIndex].quantity = updatedcart[objIndex].quantity - 1;
        }
        else {
            updatedcart = updatedcart.filter(function (obj) {
                return obj.id !== newcart.Productid;
            });
        }
        this.setState({
            cart: updatedcart
        })

    }
    removeProductfromcart=(productidtoRemove)=>{
        console.log(productidtoRemove)
        var updatedcart=this.state.cart;
        updatedcart = updatedcart.filter(function (obj) {
            return obj.id !== productidtoRemove;
        });
        this.setState({
            cart: updatedcart
        })
    }

    cartHandler = (newcartValue) => {
        var cartnew = this.state.cart;
        console.log(newcartValue);
        var found = false;
        var index = 0;
        for (var i = 0; i < cartnew.length; i++) {
            if (cartnew[i].id == newcartValue.id) {
                found = true;
                index = i;
            }
        }


        if (found) {
            cartnew[index].quantity = cartnew[index].quantity + newcartValue.quantity
            console.log("inside")
            console.log(index);
            console.log(cartnew)
        }
        else {
            cartnew.push(newcartValue)
        }

        this.setState({
            cart: cartnew
        })

    }
    showCartofproduct = () => {
        console.log("show cart product")

        this.setState({
            showCart: true
        })
    }
    hideCartofproduct = () => {
        console.log("hideof cart product")
        this.setState({
            showCart: false
        })
    }

    //   cartHandler=(newValue)=>{
    //       console.log("inside app:"+newValue)
    //   }
    render() {
        var productCard = [];
       var billingAmmount=0;

        Product.forEach(element => {
            productCard.push(
                <Card productDetail={element} addtoCartHandler={this.cartHandler} />
            )
        });
        var totalQuantity = 0;
        this.state.cart.forEach(element => {
            billingAmmount=billingAmmount+(parseInt(element.quantity)*parseInt(element.price));
            totalQuantity = totalQuantity + element.quantity;
        })
        var cartPrductList=[];
        var disabledCheckoutbutton=true;
        if(this.state.cart.length>0){
            disabledCheckoutbutton=false;
        }
        else{
            disabledCheckoutbutton=true
        }
        if(this.state.cart.length>0){
            this.state.cart.forEach(element => {
                cartPrductList.push(<Cart ProductDetail={element} updateCart={this.removeProductfromcart}/>)
            });
        }
       else{
           cartPrductList=[];
           cartPrductList.push(
            <tr>
            <td  colspan="5" style={{textAlign:"center"}} class="p-4">
               <b> No Product in Cart</b>
              </td>
          </tr>
           )
       }
        //     var hideCartstyle={ "border-top": "1px solid grey","display":"none"};
        //    var showCartstyle={ "border-top": "1px solid grey","display":"none"}
        if (this.state.showCart) {
            var hideCartstyle = { "border-top": "1px solid grey", "display": "none" }
            var showCartstyle = { "border-top": "1px solid grey", "display": "block" }
        }
        else {
            var showCartstyle = { "border-top": "1px solid grey", "display": "none" }
            var hideCartstyle = { "border-top": "1px solid grey", "display": "block" }

        }
        // if(!this.state.showCart){

        //    var  showCartstyle={ "border-top": "1px solid grey","display":"none"}

        // }
        // else{
        //    var  hideCartstyle={ "border-top": "1px solid grey","display":"block"}

        // }



        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" style={{ "cursor": "pointer" }} onClick={this.hideCartofproduct}>Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ "cursor": "pointer" }} onClick={this.showCartofproduct}> Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ "cursor": "pointer" }} href="/">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ "cursor": "pointer" }} href="/" >Menus</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ "cursor": "pointer" }} href="/">Photos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-3" style={{ "border-right": "1px solid grey", "border-top": "1px solid grey" }}>
                            <Sidebar />
                        </div>
                        <div className="col-9" style={hideCartstyle}>
                            <div className="row justify-content-between" style={{ "margin-top": "20px" }}>
                                <div className="col-4">
                                    <h2>Order Online</h2>
                                </div>
                                <div className="col-5">
                                    <div class="form-group has-search">
                                        <span class="fa fa-search form-control-feedback"></span>
                                        <input type="text" class="form-control" placeholder="Search" />
                                    </div>
                                    {/* <nav className="navbar navbar-light bg-light">
                                    <form className="form-inline">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search within menu" aria-label="Search"/>
                                    </form>
                                </nav> */}
                                </div>
                            </div>
                            {productCard}

                            {/* <Modal/> */}
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#staticBackdrop">Your order  
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>({totalQuantity})</button>

                                <button class="badge badge-dark badge-pill" style={{ float: "right" }}  disabled={disabledCheckoutbutton} onClick={this.showCartofproduct}>Buy({totalQuantity})</button>
                            </h4>
                            {/* <a className="nav-link" style={{ "cursor": "pointer" }} > Cart</a> */}
                            {/* <button type="submit" class="btn btn-default" style={{float:"right"}} onClick={this.showCartofproduct}>Add to cart</button> */}
                            
                        </div>
                        <div className="col-9" style={showCartstyle}>
                            <h4 class="d-flex justify-content-between align-items-center mb-3" style={{ marginTop: "10px" }}>
                                {/* <span class="text-muted">Your cart</span> */}
                                {/* <span class="badge badge-secondary badge-pill">{totalQuantity}</span> */}
                                <span class="badge badge-dark badge-pill" style={{ float: "right", cursor: "pointer" }} onClick={this.hideCartofproduct}>Go to Home</span>
                            </h4>
                            <Checkout myCart={this.state.cart} productquantiydescrease={this.cartProductQuantityDescease} />

                        </div>
                        <div>
                           
                            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            {/* <h5 class="modal-title" id="staticBackdropLabel">Shopping Cart</h5> */}
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container clearfix">
                                                {/* Shopping cart table --> */}
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h2>Shopping Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></h2>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-bordered m-0">
                                                                <thead>
                                                                    <tr>

                                                                        <th class="text-center py-3 px-4" style={{ "min-width": " 300px" }}>Product Name &amp; Details</th>
                                                                        <th class="text-right py-3 px-4" style={{ "width": "100px" }}>Price</th>
                                                                        <th class="text-center py-3 px-4" style={{ "width": "120px" }}>Quantity</th>
                                                                        <th class="text-right py-3 px-4" style={{ "width": "100px" }}>Total</th>
                                                                        <th class="text-center align-middle py-3 px-0" style={{ "width": "40px" }}><a href="#" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    {cartPrductList}
                                                                    {/* <Cart /> */}


                                                                </tbody>
                                                            </table>
                                                        </div>


                                                        <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
                                                            <div class="d-flex">
                                                                {/* <div class="text-right mt-4 mr-5">
                                                                    <label class="text-muted font-weight-normal m-0">Discount</label>
                                                                    <div class="text-large"><strong>&#8377;20</strong></div>
                                                                </div> */}
                                                                <div class="text-right mt-4"style={{ "float": "right" }}>
                                                                    <label class="text-muted font-weight-normal m-0">Total price</label>
                                                                    <div class="text-large"><strong>&#8377;{billingAmmount}</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" onClick={this.showCartofproduct} disabled={disabledCheckoutbutton} data-dismiss="modal" aria-label="Close">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default App;