import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function QuienesSomos () {
    return (
        <div>
        <div id='quienesSomos' className='container-fluid'>
                <h2 className='text-light text-center '>Quienes somos</h2>  
                <p >Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, </p>
                <p >acompañándote en los momentos más importantes de la vida.</p>      
            </div>
            <div id='clientes'  >
              <h2 className='text-light text-center my-3 '>Clientes</h2>
              <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='card bg-black'>
                    <img className='card-img-top' src={'../IMAGENES/Clientes/Dulce-de-Leche-Cones-1.jpg'} alt='Card image' />
                    <div className='card-body'>
                      <h4 className='card-title text-center'>Delicias de la Costa</h4>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card bg-black'>
                    <img className='card-img-top' src={'../IMAGENES/Clientes/galletas.jpg'} alt='Card image' />
                    <div className='card-body'>
                      <h4 className='card-title text-center'>Repostería della Nona</h4>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card bg-black'>
                    <img className='card-img-top' src={'../IMAGENES/Clientes/panqueque.jpg'} alt='Card image' />
                    <div className='card-body'>
                      <h4 className='card-title text-center'>Maravilla Resto</h4>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card bg-black'>
                    <img className='card-img-top' src={'../IMAGENES/Clientes/postre.jpg'} alt='Card image' />
                    <div className='card-body'>
                      <h4 className='card-title text-center'>Coffee & Deli</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
}

export default QuienesSomos;