import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function  Navbar () {
    return (
        <div className='collapse navbar-collapse fixed-top' id='navbarNav'>
            <div className='logo'><a href='#portada'> <img src={'../IMAGENES/Logo/LogoHumaya100x100.png'} alt='' /></a></div>
            <a href='#calidad' className='item navIzq'>Calidad</a>
            <a href='#productos' className='item navIzq'>Productos</a>
            <a href='#quienesSomos' className='item navDer'>¿Quiénes somos?</a>
            <a href='#contacto' className='item navDer'>Contacto</a>
         </div>
    );
}

export default Navbar;