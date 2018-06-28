import * as actionTypes from './types';

export const fetchPost = postId => (
    async (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_POST_START,
        });

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

            const post = await response.json();

            dispatch({
                type: actionTypes.FETCH_POST_SUCCESS,
                payload: post,
            });

        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_POST_ERROR,
                errorMessage: e.message,
            });

        } finally {
            dispatch({
                type: actionTypes.FETCH_POST_END,
            })
        }
    }
)