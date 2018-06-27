import * as actionTypes from '../actions/types'

const comments = (
    state = {
        byId: {},
        allIds: [],
        isFetchingComments: false,
        errorMessage: '',
    },
    action
) => {
    switch(action.type) {
        case actionTypes.FETCH_COMMENTS_START: {
            return {
                ...state,
                isFetchingComments: true,
            }
        }
        case actionTypes.FETCH_COMMENTS_SUCCESS: {
            const byId = {};
            const allIds = [];

            action.payload.forEach((comment) => {
                allIds.push(comment.id);
                byId[comment.id] = comment;
            })

            return {
                ...state,
                byId,
                allIds,
            }
        }
        case actionTypes.FETCH_COMMENTS_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        }
        case actionTypes.FETCH_COMMENTS_END: {
            return {
                ...state,
                isFetchingComments: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default comments;
