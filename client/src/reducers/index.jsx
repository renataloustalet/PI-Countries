import {
    BY_CONTINENT,
    BY_NAME,
    BY_ODER,
    BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    POST_ACTIVITY
} from '../actions/constantes'

const initialState = {
    countries: [],
    allContinents: [],
    details: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allContinents: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        case BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state
            }
        case BY_ODER:
            const orderCountries = action.payload === 'Asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderCountries
            }
        case BY_POPULATION:
            /*             const orderPopulation = action.payload === 'Max' ?
                         */
            return {
                ...state
            }
        case BY_CONTINENT:
            const allContinents = state.allContinents;
            const continentFilter = action.payload === 'All' ? allContinents :
                allContinents.filter(i => i.continent === action.payload)
            return {
                ...state,
                countries: continentFilter
            }
        default: return state;
    }
}

export default reducer;