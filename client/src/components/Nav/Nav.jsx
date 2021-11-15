import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getByName, getCountries } from '../../actions';

function Nav() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

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
            <Link to='/countries' onClick={handleClick}>Home</Link>
            <form>
                <input type="text" placeholder="Country..." onChange={handleChange} value={name} />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Nav
