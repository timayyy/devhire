import { DEVELOPER_LIST_UPDATE } from "../developer/developer.constants"
import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from "./favorite.constants"

export const addToFavorite = (id) => async (dispatch, getState) => {
    const {
        developerList: { developers },
    } = getState()

    const developer = developers.find(item => item.id === id)

    let tempDevelopers = [...developers]

    const index = tempDevelopers.indexOf(developer)

    const favoriteDeveloper = tempDevelopers[index];
    favoriteDeveloper.isFavorite = true



    dispatch({
        type: FAVORITE_ADD_ITEM,
        payload: favoriteDeveloper
    })
    dispatch({
        type: DEVELOPER_LIST_UPDATE,
        payload: tempDevelopers
    })
}

export const removeFromFavorite = (id) => (dispatch, getState) => {
    const {
        developerList: { developers },
    } = getState()

    const developer = developers.find(item => item.id === id)

    let tempDevelopers = [...developers]

    const index = tempDevelopers.indexOf(developer)

    const removedFavoriteDeveloper = tempDevelopers[index];
    removedFavoriteDeveloper.isFavorite = false

    dispatch({
        type: FAVORITE_REMOVE_ITEM,
        payload: id,
    })
    dispatch({
        type: DEVELOPER_LIST_UPDATE,
        payload: tempDevelopers
    })
}