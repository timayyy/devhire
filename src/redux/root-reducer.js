import { combineReducers } from 'redux';
import { developerListReducer } from './developer/developer.reducers'
import { favoriteReducer } from './favorite/favorite.reducers';
import { currencyListReducer, currentCurrencyReducer } from './currency/currency.reducers';

const rootReducer = combineReducers({
    developerList: developerListReducer,
    favorite: favoriteReducer,
    currencyList: currencyListReducer,
    currentCurrency: currentCurrencyReducer,
});

export default rootReducer;