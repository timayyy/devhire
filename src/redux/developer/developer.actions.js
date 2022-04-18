import axios from 'axios'
import { DEVELOPER_LIST_FAIL, DEVELOPER_LIST_REQUEST, DEVELOPER_LIST_SUCCESS } from "./developer.constants"


export const listDevelopers = () => async (
    dispatch
) => {
    try {
        dispatch({ type: DEVELOPER_LIST_REQUEST })

        const { data: { data: { service_search_results: { hits } } } } = await axios.get(
            'https://api.terawork.com/service-categories/sellers-services/computer-software-development'
        )

        let developers = []

        hits.forEach(item => {
            const singleItem = { ...item._source, isFavorite: false, id: item._id }
            developers = [...developers, singleItem]
        })

        dispatch({
            type: DEVELOPER_LIST_SUCCESS,
            payload: developers,
        })
    } catch (error) {
        dispatch({
            type: DEVELOPER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}