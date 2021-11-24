import React from 'react'
import style from './Paginado.module.css'

function Paginado({ countriesPerPage, index, paginado }) {

    const pageNumbers = [];

    // va a redondear todos los personajes sobre la cantidad de paises q quiero x pagina
    for (let i = 1; i <= Math.ceil(index / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number} className={style.paginado}>
                            <a onClick={() => paginado(number)} >{number}</a> &nbsp;
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Paginado;
