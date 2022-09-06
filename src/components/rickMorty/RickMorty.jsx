import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RickMortyCard from './RickMortyCard'
import './RickMorty.css'
import { Link } from 'react-router-dom'

const RickMorty = () => {

    const URL_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character'
    
    const [charters, setCharters] = useState([])

    const [page, setPage] = useState(1)

    const nextPage = ()=>{
        let plus = page + 1;
        page===42 ? setPage(42) : setPage(plus);
    }

    const previousPage = ()=>{
        let subtraction = page - 1;
        page===1 ? setPage(1) : setPage(subtraction);
    }

    useEffect(()=>{
        getChartersAxios();
    },[page])

    const getChartersAxios = async ()=>{
        const getCharters = await axios.get(URL_RICK_AND_MORTY + `?page=${page}`);
        setCharters([...getCharters.data.results])
    }


    //{name, image, gender, species, status}
  return (
    
    <section className="dashboard__characters">
        <div className="dashboard__cards" id="dashboardCards">
            {charters.map((charter,index)=>{
                return(
                    <Link to={`/CharacterDetail/${charter.id}`} key={index} className={'dashboard__cards-link'}>
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
            <button onClick={previousPage} className="button__nextPage" id="previousPage">-</button>
            <button onClick={nextPage} className="button__nextPage" id="nextPage">+</button>
        </div>

    </section>
  )
}

export default RickMorty