import axios from 'axios'
import { CURRENCY_LIST_FAIL, CURRENCY_LIST_REQUEST, CURRENCY_LIST_SUCCESS, SET_DEFAULT_CURRENCY, UPDATE_CURRENCY } from './currency.constants'

export const listCurrencies = () => async (
    dispatch
) => {
    try {
        dispatch({ type: CURRENCY_LIST_REQUEST })

        const { data: { data } } = await axios.get('https://api.terawork.com/resources')

        dispatch({
            type: CURRENCY_LIST_SUCCESS,
            payload: data.currencies,
        })
        dispatch({
            type: SET_DEFAULT_CURRENCY,
            payload: data.currencies[0],
        })
    } catch (error) {
        dispatch({
            type: CURRENCY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}
export const updateCurrency = (id) => async (
    dispatch, getState
) => {
    const {
        currencyList: { currencies },
    } = getState()

    const currentCurrency = currencies.find(item => item.id === id)

    dispatch({
        type: UPDATE_CURRENCY,
        payload: currentCurrency,
    })
}