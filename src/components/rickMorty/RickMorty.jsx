import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RickMortyCard from './RickMortyCard'
import './RickMorty.css'
import { useParams ,Link } from 'react-router-dom'


const RickMorty = () => {

    const URL_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character'
    
    const [charters, setCharters] = useState([])

    const { page } = useParams()

    const [pag, setPage] = useState(parseInt(page))

    const nextPage = ()=>{
        let plus = pag + 1;
        pag===42 ? setPage(42) : setPage(plus);
    }

    const previousPage = ()=>{
        let subtraction = pag - 1;
        pag===1 ? setPage(1) : setPage(subtraction);
    }

/*     const pagVeinte = ()=>{
        setPage(20)
    } */

    try {
        useEffect(()=>{
            getChartersAxios();
        },[pag])
        const getChartersAxios = async ()=>{
            const getCharters = await axios.get(URL_RICK_AND_MORTY + `?page=${pag}`);
            setCharters([...getCharters.data.results])
        }  
    } catch (error) {
        console.log(error)
    }

    //{name, image, gender, species, status}
  return (
    
    <section className="dashboard__characters">
        <div className="dashboard__cards" id="dashboardCards">
            {charters.map((charter,index)=>{
                return(
                    <Link to={`/CharacterDetail/${charter.id}/${pag}`} key={index} className={'dashboard__cards-link'}>
                        <RickMortyCard
                            key={index}
                            name={charter.name}
                            image={charter.image}
                            gender={charter.gender}
                            species={charter.species}
                            status={charter.status}
                            id={charter.id}
                        />
                    </Link>
                )
            })}
        </div>

        <div className='button__container'>
            {pag>1 && <button onClick={previousPage} className="button__nextPage" id="previousPage">-</button>}
            <span className='button__container-pagina'>{pag}</span>
            {pag<42 && <button onClick={nextPage} className="button__nextPage" id="nextPage">+</button>}
{/*             <button onClick={pagVeinte} className="button__nextPage">20</button>
 */}        </div>

    </section>
  )
}

export default RickMorty