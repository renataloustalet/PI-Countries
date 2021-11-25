import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getActivity, getCountries, postActivity } from '../../actions/index'
import NavDetails from '../Nav/NavDetails';
import style from './AddActivity.module.css'

function valida(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name required"
    } else if (!input.duration) {
        errors.duration = "Duration required"
    } else if (!/\b([1-9]|1[0-9]|2[0-4])\b/.test(input.duration)) {
        errors.duration = "Invalid number. Between 1-24"
    }
    return errors;
}

function AddActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector(state => state.countries)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivity())
    }, [])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(valida({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(id) {
        setInput({
            ...input,
            countries: [...input.countries, id.target.value]
        })
    }

    function handleCheckSeason(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelctDifficulty(e) {
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
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

    console.log(input)

    const season = ['Summer', 'Autumn', 'Winter', 'Spring'];
    const difficulty = [1, 2, 3, 4, 5];

    return (
        <div>
            <NavDetails />
            <div className={style.contenedor}>
                <div>
                    <h1>Add Activity</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Activity: </label>
                                <input type="text" value={input.name} name="name" onChange={handleChange} placeholder="Activity name..." required />
                                {errors.name && (
                                    <p className={style.error}>{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label>Season: </label>
                                {season.map(e => (
                                    <label>
                                        <input type="radio" value={e} name="season" onChange={handleCheckSeason} required />
                                        {e}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <label>Difficulty: </label>
                                <select onChange={handleSelctDifficulty} required >
                                    <option value="">Choose an option</option>
                                    {difficulty.map(e => (
                                        <option value={e} name="difficulty">{e}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label>Duration: </label>
                                <input type="text" value={input.duration} name="duration" onChange={handleChange} required placeholder="Hours...(only number)" />
                                {errors.duration && (
                                    <p className={style.error}>{errors.duration}</p>
                                )}
                            </div>
                            <div>
                                <label>Country: </label>
                                <select onChange={handleSelect} required>
                                    <option value="">Select country</option>
                                    {countries.map(e => (
                                        <option value={e.id} name="countries" key={e.id} >{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <ul>
                                    <li className={style.countriesSelected}>{input.countries.map(i =>
                                        <div>
                                            {i}
                                            <button onClick={() => handleDelete(i)} type="button">X</button>
                                        </div>)}</li>
                                </ul>
                            </div>
                            <button type="submit">Add Activity</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddActivity
