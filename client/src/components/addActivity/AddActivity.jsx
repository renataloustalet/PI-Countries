import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCountries, postActivity } from '../../actions/index'

function AddActivity() {

    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector(state => state.countries)

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    console.log(input)
    console.log(countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input))
        alert("Send")
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
        history.push('/countries')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Activity name:</label>
                <input type="text" value={input.name} name="name" onChange={handleChange} />

                <label>season</label>
                <input type="text" value={input.season} name="season" onChange={handleChange} />

                <label>difficulty</label>
                <input type="text" value={input.difficulty} name="difficulty" onChange={handleChange} />

                <label>duration</label>
                <input type="text" value={input.duration} name="duration" onChange={handleChange} />
                
                <label>Country:</label>
                <select onChange={e => handleSelect(e)}>
                    {countries.map(e => (
                        <option value={e.countries} name="countries">{e.name}</option>
                    ))}
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddActivity
