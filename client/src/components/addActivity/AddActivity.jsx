import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getActivity, getCountries, postActivity } from '../../actions/index'
import NavDetails from '../Nav/NavDetails';
import style from './AddActivity.module.css'

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
    }

    function handleSelect(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
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
                            <div className={style.activity}>
                                <label>Activity: </label>
                                <input type="text" value={input.name} name="name" onChange={handleChange} className={style.input} required />
                            </div>

                            <div className={style.activity}>
                                <label>Season: </label>
                                {season.map(e => (
                                    <label className={style.checkboxContainer}>
                                        <input type="radio" value={e} name="season" onChange={handleCheckSeason} required />
                                        {e}
                                    </label>
                                ))}
                            </div>

                            <div className={style.activity}>
                                <label>Difficulty: </label>
                                <select onChange={handleSelctDifficulty} required>
                                    {difficulty.map(e => (
                                        <option value={e} name="difficulty">{e}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={style.activity}>
                                <label>Duration: </label>
                                <input type="text" value={input.duration} name="duration" onChange={handleChange} className={style.input} required />
                            </div>

                            <div className={style.activity}>
                                <label>Country: </label>
                                <select onChange={handleSelect} required>
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
                                        <button onClick={() => handleDelete(i)} type="button">-</button>
                                    </div>)}</li>
                            </ul>
                            </div>
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddActivity
