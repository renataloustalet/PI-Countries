import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getByName, getCountries } from '../../actions';
import style from './Nav.module.css'

function Nav() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const error = useSelector(state => state.error)

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getByName(name))
        setName('')
    }

    function handleClick() {
        dispatch(getCountries())
    }

    return (
        <div>
            <div className={style.topnav}>
                <Link to='/countries' onClick={handleClick}>Home</Link>
                <Link to='/activity'>Add Activity</Link>
                <div>
                    <form className={style.li}>
                        <input type="text" placeholder="Country..." onChange={handleChange} value={name} />
                        <button type="submit" onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            </div>
            {error !== "" && <p>{error}</p>}
        </div>
    )
}

export default Nav
