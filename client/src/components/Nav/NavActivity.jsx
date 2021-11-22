import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCountries } from '../../actions';
import style from './Nav.module.css'

function NavActivity() {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(getCountries())
    }
    return (
        <div className={style.topnav}>
            <Link to='/countries' onClick={handleClick}>Home</Link>
        </div>
    )
}

export default NavActivity