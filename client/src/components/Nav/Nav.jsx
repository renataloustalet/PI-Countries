import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { getByName, getCountries } from '../../actions';
import style from './Nav.module.scss'
import earth from '../../images/earth.svg'
import { AiOutlineSearch } from "react-icons/ai";

function Nav() {

    const dispatch = useDispatch();
    const location = useLocation();

    const error = useSelector(state => state.error)

    function handleChange(e) {
        dispatch(getByName(e.target.value))
    }

    function handleClick() {
        dispatch(getCountries())
    }

    return (
        <div>
            <div className={style.topnav}>
                {location.pathname === '/countries' ?
                    <>
                        <Link to='/countries' onClick={handleClick}>
                            <img src={earth} className={style.img}/>
                        </Link>
                        <Link to='/activity' className='activity' className={style.activity}>
                            Add Activity
                        </Link>
                        <div className={style.search}>
                            <input type="text" placeholder="Country..." onChange={handleChange} />
                            <AiOutlineSearch className={style.submit} />
                        </div>
                    </> : <Link to='/countries' onClick={handleClick}>
                            <img src={earth} className={style.onlyImg}/>
                        </Link>}
            </div>
            {error !== "" && <p className={style.error}>{error}</p>}
        </div>
    )
}

export default Nav
