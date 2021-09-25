import React from 'react'

export default class Cart extends React.Component {
  removeFromCart=(ProductId)=>{
    return this.props.updateCart(ProductId)
  }
  render() {
    return (
      <tr>
        <td class="p-4">
          <div class="media align-items-center">
            <img src={this.props.ProductDetail.img}style={{"height":"40px","width":"40px"}} class="d-block ui-w-40 ui-bordered mr-4" alt="" />
            <div class="media-body">
              <a class="d-block text-dark">{this.props.ProductDetail.Title}</a>
            </div>
          </div>
        </td>
        <td class="text-right font-weight-semibold align-middle p-4">&#8377;{this.props.ProductDetail.price}</td>
        <td class="align-middle p-4"><input type="text" disabled class="form-control text-center" value={this.props.ProductDetail.quantity} /></td>
        <td class="text-right font-weight-semibold align-middle p-4">&#8377;{this.props.ProductDetail.price*this.props.ProductDetail.quantity}</td>
        <td class="text-center align-middle px-0"><a onClick={()=>this.removeFromCart(this.props.ProductDetail.id)} class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
      </tr>


    )
  }
}
