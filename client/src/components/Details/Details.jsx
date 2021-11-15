import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../actions'

function Details(props) {
    const dispatch = useDispatch()
    const index = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [])

    return (
        <div>
            {index.name}
            <img src={index.image} alt={index.name} />
            <p>codigo: {index.id}</p>
            <p>continent:{index.continent}</p>
            <p>capital: {index.capital}</p>
            <p>population: {index.population}</p>
            <p>subregion: {index.subregion}</p>
            <p>area: {index.area}</p>
            {index.activities?.map(e => {
                return(
                    <div>
                        <h1>Activities</h1>
                        <p>name: {e.name}</p>
                        <p>difficulty: {e.difficulty}</p>
                        <p>duration: {e.duration}</p>
                        <p>season: {e.season}</p>
                        </div> 
                )
            })}
        </div>
    )
}

export default Details
