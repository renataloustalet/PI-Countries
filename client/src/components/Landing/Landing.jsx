import React from 'react'
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

function Landing() {
    return (
        <div>
            <Link to='/countries'>
                <div className={style.container}>
                    <button>Enter</button>
                </div>
            </Link>
        </div>
    )
}

export default Landing;
