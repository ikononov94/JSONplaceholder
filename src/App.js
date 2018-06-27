import React from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';

import Users from './containers/Users'
import UserPosts from './containers/UserPosts';
import UserPostItem from './containers/UserPostItem';

const App = () => (
    <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/user/:id" component={UserPosts} />
        <Route path="/post/:postId" component={UserPostItem} />
    </Switch>
);

export default withRouter(App);