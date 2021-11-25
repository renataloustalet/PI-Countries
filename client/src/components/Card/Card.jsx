import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../actions'
import NavDetails from '../Nav/NavDetails'
import style from './Card.module.css'

function Card(props) {
    const dispatch = useDispatch()
    const details = useSelector(state => state.details)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [])

    const activities = details.activities?.map(e => {
        return {
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })

    return (
        <div>
            <NavDetails />
            <div className={style.card}>
            {loading ? <p>Loading...</p> : details !== null ?
                <div>
                    <h1>{details.name}</h1>
                    <img src={details.image} alt={details.name} className={style.imagen} />
                    <p>Code: {details.id}</p>
                    <p>Continent: {details.continent}</p>
                    <p>Capital: {details.capital}</p>
                    <p>Population: {details.population}</p>
                    <p>Subregion: {details.subregion}</p>
                    <p>Area: {details.area}</p>
                    <h2>Activities</h2>
                    {activities?.length > 0 ?
                        <div>
                            <p>Name: {activities[0].name}</p>
                            <p>Difficulty: {activities[0].difficulty}</p>
                            <p>Duration: {activities[0].duration}</p>
                            <p>Season: {activities[0].season}</p>
                            <hr></hr>
                        </div> : <p>Without activities</p>}
                </div> : <p>Country not found</p>
                }
            </div>
        </div>
    )
}

export default Card
