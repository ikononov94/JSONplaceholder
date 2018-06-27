import * as actionTypes from './types';

export const fetchPostsByUserId = userId => (
    async (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_POSTS_START,
        });

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

            const posts = await response.json();

            dispatch({
                type: actionTypes.FETCH_POSTS_SUCCESS,
                payload: posts,
            });

        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_POSTS_ERROR,
                errorMessage: e.message,
            });

        } finally {
            dispatch({
                type: actionTypes.FETCH_POSTS_END,
            })
        }
    }
)