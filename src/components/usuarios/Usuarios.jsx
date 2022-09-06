import React, { useEffect, useState } from 'react'
import axios from "axios"
import UsuariosCard from './UsuariosCard.jsx';
import './Usuarios.css'

const Usuarios = () => {

  const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    getUsuariosAxios();
  },[])


  const getUsuariosAxios = async ()=>{
    const getUsuarios = await axios.get(URL_USERS);
    setUsuarios(getUsuarios.data)
/*     console.log(usuarios)
 */  }
   
  return (

    <div className="users">
      <div className="users__container">
        <ul className="users__list-titles">
          <li className="parameter__id">ID</li>
          <li className="parameter__large">Nombre</li>
          <li className="parameter__xlarge">Email</li>
          <li className="parameter__large">Teléfono</li>
          <li className="parameter__large">Ciudad</li>
          <li className="parameter__large">Empresa</li>
        </ul>

        {usuarios.map((usuario,index) =>{
          return(

            <UsuariosCard
              key={index}
              name={usuario.name}
              id={usuario.id}
              email={usuario.email}
              phone={usuario.phone}
              address={usuario.address}
              company={usuario.company}
            />

              )
          })
        }
          
      </div>
    </div>
  )
}

export default Usuarios