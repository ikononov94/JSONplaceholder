import * as actionTypes from '../actions/types'

const posts = (
    state = {
        byId: {},
        allIds: [],
        isFetchingPosts: false,
        errorMessage: '',
    },
    action
) => {
    switch(action.type) {
        case actionTypes.FETCH_POSTS_START: {
            return {
                ...state,
                isFetchingPosts: true,
            }
        }
        case actionTypes.FETCH_POSTS_SUCCESS: {
            const byId = {};
            const allIds = [];

            action.payload.forEach((post) => {
                allIds.push(post.id)
                byId[post.id] = post;
            })

            return {
                ...state,
                byId,
                allIds,
            }
        }
        case actionTypes.FETCH_POSTS_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        }
        case actionTypes.FETCH_POSTS_END: {
            return {
                ...state,
                isFetchingPosts: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default posts;
