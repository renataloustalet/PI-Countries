import {
    GET_ACTIVITY,
    BY_CONTINENT,
    BY_NAME,
    BY_ODER,
    BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    BY_ACTIVITY,
    FAILURE,
    LOADING
} from '../actions/constantes'

const initialState = {
    countries: [],
    allContinents: [],
    population: [],
    allActivities: [],
    activity: [],
    details: [],
    error: "",
    loading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                error: "",
                countries: action.payload,
                allContinents: action.payload,
                population: action.payload,
                allActivities: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload,
            }
        case BY_NAME:
            return {
                ...state,
                countries: action.payload,
                error: ""
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
                    return 0;
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
        case GET_ACTIVITY:
            return {
                ...state,
                loading: false,
                activity: action.payload
            }
        case BY_POPULATION:
            const orderPopulation = action.payload === 'Min' ?
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                population: orderPopulation
            }
        case BY_CONTINENT:
            const allContinents = state.allContinents;
            const continentFilter = action.payload === 'All' ? allContinents :
                allContinents.filter(i => i.continent === action.payload)
            return {
                ...state,
                countries: continentFilter
            }
        case BY_ACTIVITY:
            const allActivities = state.countries;
            const activityFilter = action.payload === 'All' ? allActivities :
                allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === action.payload.toLowerCase()))
            return {
                ...state,
                countries: activityFilter
            }
        case FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}

export default reducer;