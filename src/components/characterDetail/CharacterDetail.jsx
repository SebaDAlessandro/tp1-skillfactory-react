import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment';
import "./CharacterDetail.css"

const CharacterDetail = () => {

    //Ej URL de un personaje: https://rickandmortyapi.com/api/character/2
    const URL_CHARTER = "https://rickandmortyapi.com/api/character/"

    const [character, setCharter] = useState([])
    const { id, page } = useParams()
    const back = `/rickmorty/${page}`

    try {
        useEffect(()=>{
            getChartersAxios()
        },[])

        const getChartersAxios = async ()=>{
            const getCharter = await axios.get(URL_CHARTER + `${id}`);
            setCharter(getCharter.data)
        }
        
    } catch (error) {
        console.log(error)
    }

   
    return (
        <div className='charter__container'>
            <div className="card__character-details">
            {
            /*console.log('dentro del render: ',character)*/
            }
                <div className={character.status==='unknown' ? "character__status-unknown" : (character.status==='Alive' ? 'character__status-alive' : 'character__status-dead')}>
                    <img className="img__character" src={character.image} alt="img character"/>
                </div>
                <div className="details__character">
                    <h2 className="property__character"><p className="data">Nombre:</p> {character.name}</h2>
                    <h2 className="property__character"><p className="data">Género:</p> {character.gender}</h2>
                    <h2 className="property__character"><p className="data">Especie:</p> {character.species}</h2>
                    <h2 className="property__character"><p className="data">Status:</p> {character.status}</h2>
                    <h2 className="property__character"><p className="data">Creado:</p> {moment(character.created).format('DD/MM/YY')}</h2>
                    <h2 className="property__character"><p className="data">Type:</p> {character.type===''? 'none':character.type}</h2>
    {/*                 <h2 className="status__character"><p className="date">Episodios:</p> {character.episode.length}</h2>     */}
                </div>
                
            </div>
                <Link to={back}><button className="button__back">back</button></Link>
        </div>
  )
}

export default CharacterDetail