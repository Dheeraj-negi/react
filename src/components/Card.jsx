import React from 'react'

class Card extends React.Component {
//    console.log(this.this.props.productDetail)
// constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     // this.Addtocart = this.Addtocart.bind(this);
//   }
state={quantity:1}
Addtocart=()=>{
    var productObject={
        
        "id": document.getElementById("id_"+this.props.productDetail.id).value,
        "img":document.getElementById("id_img_"+this.props.productDetail.id).src,
        "Title":document.getElementById("id_Title_"+this.props.productDetail.id).innerHTML,
        "Desc": document.getElementById("id_Desc_"+this.props.productDetail.id).innerHTML,
         "ingredient": document.getElementById("id_Ingredient_"+this.props.productDetail.id).innerHTML,
        "price":document.getElementById("id_price_"+this.props.productDetail.id).value,
        "quantity":parseInt(document.getElementById("quantity_"+this.props.productDetail.id).value),
    }
    this.props.addtoCartHandler(productObject)
    // console.log(document.getElementById("id_"+this.props.productDetail.id).value);
}
increaseQuantity=()=>{
    var newquantity=this.state.quantity+1;
    this.setState({
        quantity:newquantity
    })
}
descreaseQuantity=()=>{
    if(this.state.quantity>1){
        var newquantity=this.state.quantity-1;
    this.setState({
        quantity:newquantity
    }) 
    }
   
}
render(){
    
    return (
     <div className="card mb-3" >
        <div className="row no-gutters">
        <div className="col-md-4">
         <img className="img-section" id={"id_img_"+this.props.productDetail.id} src={this.props.productDetail.img} alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title " id={"id_Title_"+this.props.productDetail.id}>{this.props.productDetail.Title}</h5>
        <p className="card-text" id={"id_Desc_"+this.props.productDetail.id}>{this.props.productDetail.Desc}</p>
        <p className="card-text" ><small className="text-muted" id={"id_Ingredient_"+this.props.productDetail.id}>{this.props.productDetail.ingredient}</small></p>
        {/* <button type="submit" class="btn btn-primary">Add to cart</button> */}
        <div class="container" style={{"margin-top":"10px"}}>
    <div class="row">
       <div className="col-sm-8">
       <button type="submit" class="btn btn-primary" onClick={this.Addtocart}>Add to cart</button>
       </div>
        <div class="col-sm-4">
            <div class="input-group">
                <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number"  data-type="minus" onClick={this.descreaseQuantity}>
                 <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                </span>
                <input type="text"  id={"quantity_"+this.props.productDetail.id} class="form-control input-number" value={this.state.quantity}/>
                <input type="hidden" id={"id_"+this.props.productDetail.id} value={this.props.productDetail.id} 
                        />
                <input type="hidden" id={"id_price_"+this.props.productDetail.id} value="32" 
                        />

                <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" onClick={this.increaseQuantity}>
              <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                </span>
            </div>
        </div>
    </div>
</div>
      </div>
</div>
  </div>
 </div>
    )
}
}
export default Card;
