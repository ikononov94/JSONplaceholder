import * as actionTypes from './types';

export const fetchUsers = () => (
    async (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_USERS_START,
        });

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const users = await response.json();

            dispatch({
                type: actionTypes.FETCH_USERS_SUCCESS,
                payload: users,
            })
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_USERS_ERROR,
                errorMessage: e.message,
            })
        } finally {
            dispatch({
                type: actionTypes.FETCH_USERS_END,
            });
        }
    }
)