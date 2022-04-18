import { DEVELOPER_LIST_FAIL, DEVELOPER_LIST_REQUEST, DEVELOPER_LIST_SUCCESS, DEVELOPER_LIST_UPDATE } from "./developer.constants"


export const developerListReducer = (state = { developers: [] }, action) => {
    switch (action.type) {
        case DEVELOPER_LIST_REQUEST:
            return { loading: true, developers: [] }
        case DEVELOPER_LIST_SUCCESS:
            return {
                loading: false,
                developers: action.payload,
            }
        case DEVELOPER_LIST_UPDATE:
            return {
                loading: false,
                developers: action.payload,
            }
        case DEVELOPER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}