import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getActivity, byContinent, byOrder, byPopulation, getCountries, byActivity } from '../../actions/index'
import style from './Home.module.scss'


import Paginado from './Paginado/Paginado'

function Home() {
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    const countries = useSelector(state => state.countries)

    const activity = useSelector(state => state.activity)

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);

    const max = Math.round(countries.length / countriesPerPage);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleOrder(e) {
        e.preventDefault();
        dispatch(byOrder(e.target.value))
        setOrder(e.target.value)
    }

    function handleContinents(e) {
        e.preventDefault()
        dispatch(byContinent(e.target.value))
        setOrder(e.target.value)
    }

    function handleOrderPopulation(e) {
        e.preventDefault();
        dispatch(byPopulation(e.target.value))
        setOrder(e.target.value)
    }

    function handleActivity(e) {
        e.preventDefault();
        dispatch(byActivity(e.target.value))
        setOrder(e.target.value)
    }

    useEffect(() => {
        dispatch(getActivity())
    }, [])


    return (
        <div>
            <div className={style.filters}>
            <div className={style.filter}>
                    <select onChange={handleOrderPopulation}>
                        <option value='Max'>Max population</option>
                        <option value='Min'>Min population</option>
                    </select>
                </div>
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
                    <select onChange={handleActivity}>
                        <option value='All'>All activities</option>
                        {activity.map(e => (
                            <option value={e}>{e}</option>
                        ))}
                    </select>
                </div>
                <div className={style.filter}>
                    <select onChange={handleOrder}>
                        <option value='Asc'>A-Z</option>
                        <option value='Desc'>Z-A</option>
                    </select>
                </div>
            </div>
            <div>
                <div className={style.containerCountry}>
                    {countries.slice(
                        (currentPage - 1) * countriesPerPage,
                        (currentPage - 1) * countriesPerPage + countriesPerPage
                    ).map(e => {
                        return (
                            <Link to={'/countries/' + e.id}>
                                <div key={e.id} className={style.card}>
                                    <p>{e.name}</p>
                                    <img src={e.image} alt={e.name} />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div>
                <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
            </div>
        </div>
    )
}

export default Home
