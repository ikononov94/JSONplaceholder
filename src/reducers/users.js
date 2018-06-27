import * as actionTypes from '../actions/types';

const users = (
    state = {
        byId: {},
        allIds: [],
        errorMessage: '',
        isFetchingUsers: false,
    },
    action,
) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS_START: {
            return ({
                ...state,
                isFetchingUsers: true,
            })
        }
        case actionTypes.FETCH_USERS_SUCCESS: {
            const byId = {};
            const allIds = [];

            action.payload.forEach((user) => {
                allIds.push(user.id);
                byId[user.id] = user;
            })

            return ({
                ...state,
                byId,
                allIds,
            });
        }
        case actionTypes.FETCH_USERS_ERROR: {
            return ({
                ...state,
                errorMessage: action.errorMessage,
            });
        }
        case actionTypes.FETCH_USERS_END: {
            return ({
                ...state,
                isFetchingUsers: false,
            })
        }
        default: {
            return state;
        }
    }
}

export default users;
