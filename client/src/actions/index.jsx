import axios from 'axios'
import {
    GET_ACTIVITY,
    BY_ACTIVITY,
    BY_CONTINENT,
    BY_NAME,
    BY_ODER,
    BY_POPULATION,
    GET_COUNTRIES,
    GET_DETAIL,
    FAILURE,
    LOADING
} from './constantes'

/* const url = 'http://localhost:3003' */
const url = 'https://renataloustalet.com.ar/apicountries';

export function getCountries() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            dispatch({
                type: LOADING
            })
            const res = await axios.get(`${url}/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post('https://renataloustalet.com.ar/apicountries/activity/', payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}

export function byOrder(payload) {
    return {
        type: BY_ODER,
        payload
    }
}

export function byPopulation(payload) {
    return {
        type: BY_POPULATION,
        payload
    }
}

export function byContinent(payload) {
    return {
        type: BY_CONTINENT,
        payload
    }
}

export function byActivity(payload) {
    return {
        type: BY_ACTIVITY,
        payload
    }
}

export function getByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries?name=${name}`)
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getActivity() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/activity`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

