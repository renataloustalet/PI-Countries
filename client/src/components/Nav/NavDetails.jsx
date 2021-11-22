import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCountries } from '../../actions';
import style from './Nav.module.css'

function NavDetails() {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(getCountries())
    }
    return (
        <div className={style.topnav}>
            <Link to='/countries' onClick={handleClick}>Home</Link>
            <Link to='/activity'>Add Activity</Link>
        </div>
    )
}

export default NavDetails
