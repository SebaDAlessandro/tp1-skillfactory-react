import React from 'react'
import './Form.css'

const form = () => {

  const doAlgo = (e)=>{
    e.preventDefault();

    console.log('Nombre: ',e.target[0].value)
    console.log('Email: ',e.target[1].value)
    console.log('Mensaje: ',e.target[2].value)
    e.target[0].value="";
    e.target[1].value=""
    e.target[2].value=""
  }


  return (
    <section className="form">

        <div className="form__titulo">
           <p className="form__titulo-detalle">Complete el siguiente formulario.</p>
        </div>

        <form className="form__container" onSubmit={doAlgo}>
            <div className="form__input-section">
                <label><h2 className="form__input-title">Nombre: </h2></label>
                <input
                  id="inputName"
                  className="form__input-name"
                  type="text"
                  placeholder="Max 30 letras"
                  pattern="[a-zñA-ZÑ]{1,30}"
                  required
                />   
            </div>
            
            <div className="form__input-section">
                <label><h2 className="form__input-title">Email: </h2></label>
                <input
                  id="inputEmail"
                  className="form__input-email"
                  type="email"
                  placeholder="***@***.***"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
                  required
                />
            </div>

            <div className="form__textarea-section">
                <textarea className="form__textarea-menssage" name="message" id="formMensaggeId" rows="10" placeholder="Ingrese su mensaje" required></textarea>
            </div>
            
            <button className="form__btn" id="formBtn">enviar</button>

        </form>

    </section>
  )
}

export default form