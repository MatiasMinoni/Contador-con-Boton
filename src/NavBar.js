import React from 'react';
import CartWidget from './CartWidget';
 import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
// // importar iconos de google

 


    const NavBar = () => {
 
      return (
  
 <nav>
   <div class="nav-wrapper">
     <a href="#" class="brand-logo left">MicroStore</a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a href="1.html">Tienda</a></li>
       <li><a href="1.html">Acerca de</a></li>
       <li><a href="1.html">Contacto</a></li>
      <li ><a class='carrito_icon ' title='Carrito' href="1.html" alt='Carrito'><h3><CartWidget /></h3> </a></li>

     </ul>
     
      </div>
   
 </nav>
      
  
  );
}

  export default NavBar;

