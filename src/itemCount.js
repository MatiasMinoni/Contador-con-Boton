import React from "react";
import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';



export const MiComponente =( {miNumero}) => {
    const add_Cart=document.getElementById("addCart");
    const [stock, setStock] = useState(1);
    
function onAdd(){
        onRemove.disabled=false;
        onRemove.disabled=true;
    add_Cart.disabled=false;
    add_Cart.disabled=true;
setStock(stock+1);
onAdd=document.getElementById("onAdd")
    console.log(stock);

        
    if
    (stock>=10){
        setStock(10);
      onAdd.disabled=true;
        onRemove.disabled=false;}
}
function onRemove(){

setStock(stock-1);
onRemove=document.getElementById("onRemove")
    console.log(stock);
    onAdd.disabled=false;
    if (stock<=1){   
        setStock(0);
      console.log("llegue")
      add_Cart.disabled=true;
      onRemove.disabled=true;
       
    }
}

return (
<>

<div class="valign-wrapper center-align contador_carrito">

<p>Agregar al carrito</p>

<button  className="waves-effect waves-light btn" id="onAdd"  onClick={onAdd}> + </button>

<p>    {stock}    </p>

<button className="waves-effect waves-light btn" id="onRemove" onClick={onRemove}> - </button>

</div>
<button className="waves-effect waves-light btn" id="addCart" >  Agregar al carrito</button>
</> 
)
}


