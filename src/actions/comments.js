import * as actionTypes from './types';

export const fetchCommentsByPostId = postId => (
    async (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_COMMENTS_START,
        });

        localStorage.setItem('postId', postId);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

            const comments = await response.json();

            dispatch({
                type: actionTypes.FETCH_COMMENTS_SUCCESS,
                payload: comments,
            })
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_COMMENTS_ERROR,
                errorMessage: e.message,
            });
        } finally {
            dispatch({
                type: actionTypes.FETCH_COMMENTS_END,
            })
        }
    }
)
