import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { byContinent, byOrder, getCountries } from '../../actions/index'

function Home() {
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')
    const index = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleOrder(e) {
        e.preventDefault();
        dispatch(byOrder(e.target.value))
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleContinents(e){
        dispatch(byContinent(e.target.value))
    }

    /* const mapContinents = index.map(e => e.continent) */
/*     const filterContinents = mapContinents.filter((item, index) => {
        return mapContinents.indexOf(item) === index;
    }) */
    return (
        <div>
            <div>
                <select onChange={handleContinents}>
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option> 
                </select>
            </div>
            <div>
                <select>
                    <option value='Max'>Max</option>
                    <option value='Min'>Min</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrder}>
                    <option value='Asc'>Asc</option>
                    <option value='Desc'>Desc</option>
                </select>
            </div>
            {index.map(e => {
                return (
                    <div>
                        <Link to={'/countries/' + e.id}>
                            <p>{e.name}</p>
                            <img src={e.image} />
                            <p>{e.continent}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
