import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function Productos () {
    return (
        <div id='productos' className='container-fluid'>
              <h1 className='text-light text-center '>Productos</h1>
                <div className='card mb-3 bg-black' >
                    <div className='row g-0'>
                      <div className='col-md-6'>
                        <img src={'../IMAGENES/Productos/Producto1.png'} className='img-fluid rounded-start ' alt='...' />
                      </div>
                      <div className='col-md-6'>
                        <div className='card-body '>
                          <h5 className='card-title'>DULCE DE LECHE TRADICIONAL</h5>
                          <p className='card-text text-light'>Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.</p>
                          <p className='card-text' id='presentacion'>Presentación en frasco de vidrio de 580gr.</p>
                          <button type='button' className='btn button-2'>+ INFO</button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='card mb-3 bg-black' >
                    <div className='row g-0'>
                      <div className='col-md-6'>
                        <div className='card-body text-light'>
                          <h5 className='card-title'>DULCE DE LECHE SIN AZÚCAR</h5>
                          <p className='card-text'>Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con stevia</p>
                          <p className='card-text' id='presentacion'>Presentación en frasco de vidrio de 580gr y 280gr.</p>
                          <button type='button' className='btn button-2'>+ INFO</button>
                          
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <img src={'../IMAGENES/Productos/Producto2.png'} className='img-fluid rounded-end' alt='...' />
                      </div>
                    </div>
                </div> 
                <div className='card mb-3 bg-black' >
                    <div className='row g-0'>
                      <div className='col-md-6'>
                        <img src={'../IMAGENES/Productos/Producto3.png'} className='img-fluid rounded-start ' alt='...' />
                      </div>
                      <div className='col-md-6'>
                        <div className='card-body '>
                          <h5 className='card-title'>DULCE CHOCONUT</h5>
                          <p className='card-text text-light'>Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.</p>
                          <p className='card-text' id='presentacion'>Presentación en frasco de vidrio de 280gr.</p>
                          <button type='button' className='btn button-2'>+ INFO</button>
                        </div>
                      </div>
                    </div>
                </div>                           
            </div>
    );
}

export default Productos;