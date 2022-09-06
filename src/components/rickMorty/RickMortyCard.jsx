import React from 'react'
import './RickMorty.css'

const RickMortyCard = ({name, image, gender, species, status}) => {

  return (
    <div className="card__character">
        <div className={status==='unknown' ? "initiation__character" : (status==='Alive' ? 'initiation__character-alive' : 'initiation__character-dead')}>
            <h1 className="name__character">{name}</h1>
            <img className="image__character" src={image} alt="img character"/>
        </div>
{/*         <div className="details__character">
            <h2 className="gender__character"><p className="date">Género:</p> {gender}</h2>
            <h2 className="species__character"><p className="date">Especie:</p> {species}</h2>
            <h2 className="status__character"><p className="date">Status:</p> {status}</h2>
        </div> */}
    </div>
  )
}

export default RickMortyCard