import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from "./favorite.constants"


export const favoriteReducer = (
    state = { favoriteItems: [] },
    action
) => {
    switch (action.type) {
        case FAVORITE_ADD_ITEM:
            const item = action.payload
            return {
                ...state,
                favoriteItems: [...state.favoriteItems, item],
            }
        case FAVORITE_REMOVE_ITEM:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter((item) => item.id !== action.payload),
            }
        default:
            return state
    }
}