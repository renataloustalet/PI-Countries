import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { getByName, getCountries } from '../../actions';
import style from './Nav.module.scss'
import earth from '../../images/earth.svg'
import { AiOutlineSearch } from "react-icons/ai";

function Nav() {

    const dispatch = useDispatch();
    const location = useLocation();
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
                <Link to='/countries' onClick={handleClick}>
                    <img src={earth} />
                </Link>
                {location.pathname === '/countries' ?
                    <>
                        <Link to='/activity' className='activity' className={style.activity}>
                            Add Activity
                        </Link>
                        <div className={style.search}>
                            <input type="text" placeholder="Country..."  onChange={handleChange} value={name} />
                            <AiOutlineSearch type="submit" onClick={handleSubmit} className={style.submit} />
                        </div>
                    </> : " "}
            </div>
            {error !== "" && <p className={style.error}>{error}</p>}
        </div>
    )
}

export default Nav
