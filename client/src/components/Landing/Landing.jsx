import React from 'react'
import { Link } from 'react-router-dom';
import style from './Landing.module.scss';
import earth from '../../images/earth.svg';

function Landing() {
    return (
            <div lassName={style.container}>
                <Link to='/countries'>
                    <img src={earth} />
                </Link>
            </div>
    )
}

export default Landing;
