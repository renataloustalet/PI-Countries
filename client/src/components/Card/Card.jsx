import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../actions'
import NavDetails from '../Nav/NavDetails'
import style from './Card.module.css'

function Card(props) {
    const dispatch = useDispatch()
    const index = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [])

    return (
        <div>
            <NavDetails />
            <div className={style.card}>
                <div>
                    <h1>{index.name}</h1>
                    <img src={index.image} alt={index.name} className={style.imagen} />
                    <p>Codigo: {index.id}</p>
                    <p>Continent: {index.continent}</p>
                    <p>Capital: {index.capital}</p>
                    <p>Population: {index.population}</p>
                    <p>Subregion: {index.subregion}</p>
                    <p>Area: {index.area}</p>
                    <h2>Activities</h2>
                    {index.activities?.map(e => {
                        return (
                            <div>
                                <p>Name: {e.name}</p>
                                <p>Difficulty: {e.difficulty}</p>
                                <p>Duration: {e.duration}</p>
                                <p>Season: {e.season}</p>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card
