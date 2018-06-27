import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/users';
import './style.css';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props)
    return (
      <div></div>
    );
  }
}

export default connect(
  state => ({
    usersById: state.users.byId,
    usersAllIds: state.users.allIds,
    isFetching: state.users.isFetchingUsers,
  }),
  dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
  })
)(Users);
