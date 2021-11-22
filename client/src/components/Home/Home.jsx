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

    const index = useSelector(state => state.countries)

    const activity = useSelector(state => state.activity)


    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexLastCountry = currentPage * countriesPerPage
    const indexFirstCountry = indexLastCountry - countriesPerPage
    const allPagCountries = index.slice(indexFirstCountry, indexLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
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

    const mapContinents = index.map(e => e.continent)
    const filterContinents = mapContinents.filter((item, index) => {
        return mapContinents.indexOf(item) === index;
    })

    return (
        <div>
            <Nav />
            <div className={style.filters}>
                <div className={style.filter}>
                    <select onChange={handleContinents}>
                        <option value='All'>All continents</option>
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
            {allPagCountries.map(e => {
                return (
                    <div className={style.row}>
                        <div className={style.column}>
                            <div key={e.id} className={style.card}>
                                <Link to={'/countries/' + e.id}>
                                    <p className={style.title}>{e.name}</p>
                                    <img src={e.image} className={style.images} />
                                    <p className={style.continent}>{e.continent}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={style.pagination}>
                <Paginado
                    countriesPerPage={countriesPerPage}
                    index={index.length}
                    paginado={paginado}
                ></Paginado>
            </div>
        </div>
    )
}

export default Home
