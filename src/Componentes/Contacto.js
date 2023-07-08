import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function Contacto () {
    return (
        <div id='contacto' className='container-fluid my-3'>
                <h1 className='text-light text-center '>Contacto</h1>
                <div className='card mb-3 bg-light' >
                      <div className='row g-0'>
                        <div className='col-md-6'>
                          <img src={'../IMAGENES/Productos/alfajores.png'} className='img-fluid rounded-start ' alt='...' />
                        </div>
                        <div className='col-md-6'>
                          <div className='card-body '>
                            <h5 className='card-title mt-3'> Deja tu consulta y nos pondremos en contacto</h5>
                            <form >
                                <div className='mb-3'>
                                    <label for='nombre' className='form-label'>Nombre y apellido</label>
                                    <input type='text' name='nombre' className='form-control bgmarron' placeholder='' />
                                </div>
                                <div className='mb-3'>
                                    <label for='Email' className='form-label'>Email</label>
                                    <input type='email' name='nombre' className='form-control bgmarron' />
                                </div>
                                <div className='mb-3'>
                                    <label for='consulta'>Consulta:</label>
                                    <textarea id='consulta' name='consulta' rows='4' cols='50' className='form-control bgmarron'></textarea>
                                </div>
                                <div className='mb-3'>
                                    <input className='form-check-input' type='checkbox' value='' id='newsletter' checked />
                                    <label className='form-check-label' for='newsletter'>
                                        Quiero recibir el Newsletter
                                    </label>
                                     
                                </div>
                                <div className='mb-3'>
                                    <button type='submit' className='btn button-2'>Enviar</button>
                            </div>
                            </form>
                          </div>
                        </div>
                      </div>
                </div>

            </div>
    )
}

export default Contacto;