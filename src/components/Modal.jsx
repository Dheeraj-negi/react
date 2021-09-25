import React from 'react'

export default function Modal() {
    return (
        <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
  Launch static backdrop modal
</button>
<div class="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">,
        <p class="modal-title" id="staticBackdropLabel"> <h6>4 chease pizza</h6>Italian Double Cheese ,Double Cheese,Farali Single</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <table className="twidth">
      <tbody>
    <tr>
      
      <td>Size<p style={{"font-size":"12px"}}>you can choose any one option</p></td>
    </tr>
    <tr>
     
      <td>Regular[8 inches]</td>
      <td className="row"> <span className="tb-margin">&#8377; 290</span><span class="form-check"><input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
       </span></td>
      
      
    </tr>
    <tr>
       <td>Large[12 inches]</td>
       <td className="row"> <span className="tb-margin">&#8377; 590</span>
        <span class="form-check">
            <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
        </span>
        </td>
    </tr>
    <tr className="mb-5">
    <td>Extra Large[18 inches]</td>
    <td className="row">
    <span className="tb-margin">&#8377; 1010</span>
        <span class="form-check">
         <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
        </span>
    </td>
    </tr>
       <tr className="mb-5">
          <td>Upgrade<p style={{"font-size":"12px"}}>you can chose upto 1 options</p></td>
          </tr>
          <tr>
          <td>Chese Burst</td>
       <td className="row"> 
       <span className="tb-margin">&#8377; 50</span>
        <span class="form-check">
            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </span></td>
      </tr>
      <tr>
          <td>Extra<p style={{"font-size":"12px"}}>hey this is test</p></td>
          </tr>
          <tr>
          <td>Chese</td>
       <td className="row"> 
       <span className="tb-margin">&#8377; 35</span>
        <span class="form-check">
            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </span></td>
      </tr>
  </tbody>
      </table>
      </div>
      <div class="modal-footer">
      <div class="col-sm-4">
            <div class="input-group">
                <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                 <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                </span>
                <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10"/>
                <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
              <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                </span>
            </div>
        </div>
        
        <button type="button" class="btn btn-primary twidth">Understood</button>
      </div>
    </div>
  </div>
</div>
        </div>
       
    )
}

