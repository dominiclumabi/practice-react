
import React, { useState } from "react";
import CartList from "./CartList";

function Items({name ,oprice, setOprice ,setProductname, orderquantity , setOrderquantity, size, setSize, product, setMyProduct}) {

  //  const [quantity, setTitle] = useState('');
  //  const [myCart, setMyArray] = useState([""]);
var idholder = product.length;
function Add(){
    let QuantityHolder = document.getElementById(name).value;
    if (QuantityHolder === "" )
    {
      alert('Please enter quantity.');
    }
    else if (QuantityHolder < 0){
      alert('Quantity must not be less than 0.');
    }
    else{
      idholder = idholder + 1;
      setOprice(oprice = oprice + orderquantity * 150)
      setMyProduct([...product, {id:idholder, productname:name, orderquantity:orderquantity ,size:size }])
      setProductname('');
      setOrderquantity('');
      setSize('');  
    }
    document.getElementById(name).value = "";
    document.getElementById('SizeSelector').value = 'Small';

 
};
    return (
        <>
        <div className="card col-12 col-md-3">
            <img src="https://i5.walmartimages.com/asr/2a684941-ee35-4e48-8b5e-49ef8f11bc2a_3.b3542297b7a695c4eb78db271af3836f.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                    <p>₱ 150.00</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. <br />   
                    <input className="DropDown" id={name} type='number'placeholder="Enter Quantity"
                    onChange={(e) => setOrderquantity(e.target.value)}/>
                    <select id="SizeSelector" className="DropDown" onChange={(i) => setSize(i.target.value)}>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select></p>
                    <a href="#" className="btn btn-dark" onClick={Add}>Add to bag.</a>
              </div>
          </div>
        </>
    );
}

export default Items;