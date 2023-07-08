import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function Calidad () {
    return (
        <div id='calidad' className='container-fluid'>
                <h2 className='text-light text-center '>La mejor calidad para vos</h2>
                <div className='d-flex justify-content-center' >
                    <div className='m-4'>
                        <div>
                            <img src={'../IMAGENES/Calidad/organico.png'} alt='100% orgánico' />                        
                        </div>
                        <div>
                            <p className='text-center' id='textoCalidad'>100% ORGÁNICO</p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <div>
                            <img src={'../IMAGENES/Calidad/tacc.png'} alt='Sin TACC' />                         
                        </div>
                        <div>
                            <p className='text-center' id='textoCalidad'>SIN TACC</p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <div>
                            <img src={'../IMAGENES/Calidad/conservantes.png'} alt='Sin Conservantes' />                        
                        </div>
                        <div>
                            <p className='text-center' id='textoCalidad'>SIN CONSERVANTES</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Calidad;