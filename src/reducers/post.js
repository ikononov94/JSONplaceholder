import * as actionTypes from '../actions/types';

const post = (
    state = {
        data: {},
        isFetchingPost: false,
        errorMessage: '',
    },
    action
) => {
    switch(action.type) {
        case actionTypes.FETCH_POST_START: {
            return {
                ...state,
                isFetchingPost: true,
            }
        }
        case actionTypes.FETCH_POST_SUCCESS: {
            return {
                ...state,
                data: {
                    ...action.payload,
                }
            }
        }
        case actionTypes.FETCH_POST_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        }
        case actionTypes.FETCH_POST_END: {
            return {
                ...state,
                isFetchingPost: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default post;
