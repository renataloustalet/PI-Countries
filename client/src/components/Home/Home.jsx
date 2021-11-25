import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getActivity, byContinent, byOrder, byPopulation, getCountries, byActivity } from '../../actions/index'
import Nav from '../Nav/Nav'
import style from './Home.module.css'

import Paginado from './Paginado/Paginado'

function Home() {
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    const countries = useSelector(state => state.countries)

    const activity = useSelector(state => state.activity)
    // paginado
    // guarda en un estado local la pagina actual // empieza en 1 porq arranco de la primera pagina
    const [currentPage, setCurrentPage] = useState(1)
    // los paises que va a mostrar por pagina
    const [countriesPerPage, setCountriesPerPage] = useState(9)

    // pagina actual  X la cantidad de paises por pagina   // 9 + ...      // se multiplica para q de 10
    const indexFirstCountry = currentPage === 1 ? 0 : 9 + (currentPage - 2) * countriesPerPage
    const indexLastCountry = indexFirstCountry + countriesPerPage

    // los paises q estan en la pagina actual
    const allPagCountries = countries.slice(indexFirstCountry, indexLastCountry)

    const paginado = (num) => {
        setCurrentPage(num)
        setCountriesPerPage(num === 1 ? 9 : 10)
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleOrder(e) {
        e.preventDefault();
        dispatch(byOrder(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleContinents(e) {
        e.preventDefault()
        dispatch(byContinent(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleOrderPopulation(e) {
        e.preventDefault();
        dispatch(byPopulation(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleActivity(e) {
        e.preventDefault();
        dispatch(byActivity(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }

    useEffect(() => {
        dispatch(getActivity())
    }, [])


    return (
        <div>
            <Nav />
            <div className={style.filters}>
                <div className={style.filter}>
                    <select onChange={handleContinents}>
                        <option value='All'>All continents</option>
                        {/* {filterRepeatedContinents.map(e => (
                                <option value={e}>{e}</option>))} */}
                        <option value='Africa'>Africa</option>
                        <option value='Antarctica'>Antarctica</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='North America'>North America</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='South America'>South America</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <select onChange={handleOrderPopulation}>
                        <option value='Max'>Max population</option>
                        <option value='Min'>Min population</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <select onChange={handleOrder}>
                        <option value='Asc'>A-Z</option>
                        <option value='Desc'>Z-A</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <select onChange={handleActivity}>
                        <option value='All'>All activities</option>
                        {activity.map(e => (
                            <option value={e}>{e}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={style.column}>
                {allPagCountries.map(e => {
                    return (
                        <div>
                            <div key={e.id} className={style.card}>
                                <Link to={'/countries/' + e.id}>
                                    <p className={style.title}>{e.name}</p>
                                    <img src={e.image} alt={e.name}/>
                                    <p className={style.continent}>{e.continent}</p>
                                    <p>{e.population}</p>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <Paginado
                    countriesPerPage={countriesPerPage}
                    index={countries.length}
                    paginado={paginado}
                />
            </div>
        </div>
    )
}

export default Home
