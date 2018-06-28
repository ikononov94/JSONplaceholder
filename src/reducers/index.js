import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import post from './post';
import comments from './comments';

export default combineReducers({
    users,
    posts,
    post,
    comments,
});
