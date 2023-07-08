import "bootstrap/dist/css/bootstrap.min.css";
import React, { useDeferredValue } from "react";


function Portada () {
    return (
        <div>
            <div id='portada' className='container-fluid text-light' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + './IMAGENES/Central/imagenCentral.png'})`}}>
                <div className='row'>
                <div className='col'></div>
                <div className='col'>
                    <h1>HUMAYA</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis molestias a modi nisi soluta nemo odio expedita quaerat tenetur! Doloremque ratione voluptatem dicta deserunt atque molestiae earum ab officiis. </p>
                    <button className='button-1' role='link'>CONOCENOS</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Portada;