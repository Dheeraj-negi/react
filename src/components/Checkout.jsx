import React from 'react'

export default class Checkout extends React.Component {
  ProductQuantityDecrease = (productid, quantity) => {
    var updateQuantity = {
      "Productid": productid,
      "quatity": quantity,
    }
    this.props.productquantiydescrease(updateQuantity)
  }
  render() {

    var mycartProduct = this.props.myCart;
    var myProduct = []
    var TotalAmount = 0;
    var totalQuantity = 0;
    if (mycartProduct.length > 0) {
      mycartProduct.forEach(element => {
        myProduct.push(
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{element.Title}({element.quantity})</h6>
              <input type="hidden" id={"id_cartProduct_" + element.id} value={element.id} />
              <input type="hidden" id={"quantity_cartProduct_" + element.id} value={element.quantity} />
              <small class="text-muted">{element.Desc}</small>
            </div>
            <span class="text-muted">&#8377;{element.price}</span>
            <button type="button" class="btn btn-default btn-number" data-type="minus" style={{"margin-top": "-8px","height": "0px"}} onClick={() => this.ProductQuantityDecrease(element.id, element.quantity)}>
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
          </li>
        )
        TotalAmount = TotalAmount + (element.quantity * element.price)
        totalQuantity = totalQuantity + element.quantity;
      });

    }
    else {
      myProduct = [];
      myProduct.push(
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">No product</h6>

          </div>

        </li>
      )
    }
    return (
      <div>
        <div class="container" style={{"margin-top":"20px"}}>


          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">{totalQuantity}</span>
              </h4>
              <ul class="list-group mb-3">
                {myProduct}


                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>&#8377;{TotalAmount}</strong>
                </li>
              </ul>


            </div>
            <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Checkout</h4>
          <form class="needs-validation" novalidate="">
          <div className="card">
            <div className="card-body">
              <h5 class="card-title">Delivary Adress</h5>
              <h6 class="card-subtitle mb-2 text-muted">2 ishwarpark opp society,ground floor</h6>
              <p class="card-text">987654123</p>
              <input type="checkbox" name="adress" id=""/> Use this address
            </div>
            </div>
            <hr class="my-4"/>
            <h6>Or</h6>
            <h4 class="mb-3">Add a new adress</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Phone no.</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">+91</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Phone no." required="" />
                    <div class="invalid-feedback" style={{ "width": "100%" }}>
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Adress..." required="" />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

               
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required="">
                      <option value="">Choose...</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required="" />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>

                <hr class="mb-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" />
                    <label class="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                    <label class="custom-control-label" for="debit">Debit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
              </form>
            </div>
          </div>


        </div>
      </div>
    )
  }
}
