import React from 'react'
import './Form.css'
import { useForm } from "react-hook-form";

const Form = () => {

/*
register es un funcion callback que devuelve props y los inyectara en los inpust y por lo tanto
podemos controlar, leer, validar, etc el input

con handleSubmit obtenemos el valor de cada input: esto se ejecuta dentro de la etiqueta form

formState: {errors}: toma los errores =>
 *required: puede ser boolean o del tipo string
 *minLength: puede ser un valor numeric o un objeto en donde le agregamos el valor y el mensaje
 que queremos que aparezca por consola (con un console.log(errors))

 
List of validation rules supported:
* required
* min
* max
* minLength
* maxLength
* pattern
* validate

Tambien podemos agregar valores por defecto ni bien se carga el componenete en el input que 
querramos, solo debemos inicializar el input segun su registro y agregarle un valor

Estos errores los podemos mostrar por el render.
1ro agregamos el error
2do agregamos el registro
3ro agregamos el mensaje

ej: <p>{errors.firstName?.message}</p>

watch: se utiliza para que verifique cada vez que incorporamos un caracter en el input
de este metodo podemos seleccionar que input queremos que sea observado
solo hay que hacer: watch('firstName')=> solo observara cada letra ingresada en este input

*/

  const { register, handleSubmit, formState: { errors } } = useForm();

  //console.log(errors)

  const onSubmit = (data, e)=>{
    console.log(data)

    // limpiar campos
    e.target.reset();
  }


  return (
    <section className="form">

        <div className="form__titulo">
           <p className="form__titulo-detalle">Complete el siguiente formulario.</p>
        </div>

        <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input-section">
                <label><h2 className="form__input-title">Nombre: </h2></label>
                <input
                  id="name"
                  className="form__input-name"
                  type="text"
                  placeholder="Max 30 letras"
                  autoComplete="off"
                  {...register('name', {
                      required:{
                          value: true,
                          message:'El campo nombre es requerido'
                      }, maxLength: {
                          value: 30,
                          message: 'Debe tener menos de 30 letras'
                      }
                  })}
                />
            </div>
            {errors.name && <span className="form__input-error">{errors.name.message}</span>}
            
            <div className="form__input-section">
                <label><h2 className="form__input-title">Email: </h2></label>
                <input
                  id="inputEmail"
                  className="form__input-email"
                  type="email"
                  placeholder="***@***.***"
                  autoComplete="off"
                  {...register('mail',{
                    required:{
                        value: true,
                        message:'El campo email es requerido'
                    },
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "El formato no es correcto"
                    }
                })}
                />
            </div>
            {errors.mail && <span className="form__input-error">{errors.mail.message}</span>}

            <div className="form__textarea-section">
                <textarea className="form__textarea-menssage" name="message" id="formMensaggeId" rows="7" placeholder="Ingrese su mensaje" {...register('message',{required:'El campo mensaje es requerido'})}></textarea>
            </div>
            {errors.message && <span className="form__input-error">{errors.message.message}</span>}
            
            <button className="form__btn" id="formBtn">enviar</button>

        </form>

    </section>
  )
}

export default Form