import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter  } from 'react-router-dom';

import Users from '../Users'
import UserPosts from '../UserPosts';
import UserPostItem from '../UserPostItem';
import { fetchUsers } from '../../actions/users';

class App extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Users} />
                <Route path="/user/:id" component={UserPosts} />
                <Route path="/post/:postId" component={UserPostItem} />
            </Switch>
        )
    }
}


export default withRouter(connect(
    null,
    dispatch => ({
      fetchUsers: () => dispatch(fetchUsers())
    })
)(App));