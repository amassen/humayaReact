import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function Footer () {
    return (
        <div className='text-center text-light'>
    
            <section className='d-flex justify-content-center p-4 '>
    <div id='encontranos' className='container-fluid mt-1'>
      <h1 className='text-light text-center '>Encontranos en:</h1>
    </div>
  </section>
      
    {/* Section: Links   */}
    <section className='bg-black pt-5'> 
      <div className='container text-center text-md-start mt-5 '>
        <div className='row mt-3'>
          {/* Grid column  */}
          <div className='col-md-2 mt-5'>
             <img src={'../IMAGENES/Logo/LogoHumaya100x100.png'} alt='' />
          </div>
          
  
         {/* Grid column  */}
          <div className='col-md-2 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
            <p>
              <a href='#!' className='text-reset'>Home</a>
            </p>
            <p>
              <a href='#!' className='text-reset'>Calidad</a>
            </p>
            <p>
              <a href='#!' className='text-reset'>Productos</a>
            </p>
            <p>
              <a href='#!' className='text-reset'>Clientes</a>
            </p>
            <p>
                <a href='#!' className='text-reset'>Contacto</a>
              </p>
          </div>
         
          <div className='col-md-2 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Navegación</h6>
            <p>
              <a href='#' className='text-reset'>Preguntas frecuentes</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Distribuidores</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Prensa</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Recetas exclusivas</a>
            </p>
          </div>
            
          <div className='col-md-2 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Redes</h6>
            <p><i className='fa-brands fa-instagram fa-2xl'></i></p>
            <p>
              <i className='fa-brands fa-square-facebook fa-2xl'></i>
            </p>
            <p><i className='fa-brands fa-tiktok fa-2xl'></i></p>
          </div>

           <div className='col-md-4 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Ubicación</h6>
            <p><i className='fas fa-home'></i> Montes de Oca 2356, CABA</p>
            <p>
              <img src={'../IMAGENES/mapa.png'} id='mapa' alt='mapa' />
            </p>
            
          </div>
        </div>
      </div>
    </section>
  
    {/* Copyright   */}
    <div className='text-center p-3' id='firma'>
      <p>✿ Hecho por Adriana Massenzano ✿</p>
    </div>
    
  </div>
    )
}

export default Footer;