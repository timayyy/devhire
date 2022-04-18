import { CURRENCY_LIST_FAIL, CURRENCY_LIST_REQUEST, CURRENCY_LIST_SUCCESS, SET_DEFAULT_CURRENCY, UPDATE_CURRENCY } from "./currency.constants"

export const currencyListReducer = (state = { currencies: [] }, action) => {
    switch (action.type) {
        case CURRENCY_LIST_REQUEST:
            return { loading: true, currencies: [] }
        case CURRENCY_LIST_SUCCESS:
            return {
                loading: false,
                currencies: action.payload,
            }
        case CURRENCY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const currentCurrencyReducer = (state = { currency: {} }, action) => {
    switch (action.type) {
        case SET_DEFAULT_CURRENCY:
            return { currency: action.payload }
        case UPDATE_CURRENCY:
            return { currency: action.payload }
        default:
            return state
    }
}