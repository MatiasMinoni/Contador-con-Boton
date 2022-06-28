
import { Fragment } from "react";
import {MiComponente} from './itemCount.js';




const ItemListContainer = (props) => {

console.log(props)
return (
<>
  <Fragment>

<p> Texto de prueba {props.items}</p>

  </Fragment>
  <MiComponente></MiComponente>
  </>  
);
}
export default ItemListContainer;