import React from 'react'
import style from './Paginado.module.css'

function Paginado({ countriesPerPage, index, paginado }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(index / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number} className={style.paginado}>
                            <a onClick={() => paginado(number)}>{number}</a>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Paginado;
