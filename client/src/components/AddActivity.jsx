import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getActivity, getCountries, postActivity } from '../actions/index'
import style from '../styles/AddActivity.module.scss';
import Swal from 'sweetalert2'

function valida(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name required"
    }
    return errors;
}

function AddActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector(state => state.countries).sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    })

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
    }, [dispatch])

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

    function handleSeason(e) {
        setInput({
            ...input,
            season: e.target.value
        })
    }

    function handleSelctDifficulty(e) {
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function handleSelectDuration(e) {
        setInput({
            ...input,
            duration: e.target.value
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

       /*  alert('enviado') */
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
        history.push('/countries')
        Swal.fire({
            title: 'Activity created successfully',
            confirmButtonColor: "#34a57f"}/* ).then(function(){ 
                window.location.replace('');
            } */
        ) 
    }

    const season = ['Winter', 'Spring', 'Autumn', 'Summer'];
    const difficulty = [1, 2, 3, 4, 5];
    const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    return (
        <div className={style.form}>
            <div className={style.contenedor}>
                <div>
                    <h2>Add Activity</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className={style.act}>
                                <label>Activity: </label>
                                <input type="text" value={input.name} name="name" onChange={handleChange} placeholder="Activity name..." required />
                                {errors.name && (
                                    <p className={style.error}>{errors.name}</p>
                                )}
                            </div>
                            <div className={style.season}>
                                <label>Season: </label>
                                <select onChange={handleSeason} required>
                                    <option value="" hidden>Select season</option>
                                    {season.map(e => (
                                        <option value={e} name="season" key={e} >{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.diffi}>
                                <label>Difficulty: </label>
                                <select onChange={handleSelctDifficulty} required >
                                    <option value="" hidden>Choose an option</option>
                                    {difficulty.map(e => (
                                        <option value={e} name="difficulty">{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.duration}>
                                <label>Duration: </label>
                                <select onChange={handleSelectDuration} required>
                                    <option value="" hidden>Choose an option</option>
                                    {duration.map(e => (
                                        <option value={e} name="duration">{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.country}>
                                <label>Country: </label>
                                <select onChange={handleSelect} required>
                                    <option value="" hidden>Select country</option>
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
