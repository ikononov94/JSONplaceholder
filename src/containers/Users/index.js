import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User';
import { fetchUsers } from '../../actions/users';
import './style.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.prevUsers = this.prevUsers.bind(this);
    this.nextUsers = this.nextUsers.bind(this);

  }
  componentDidMount() {
    this.props.fetchUsers();
  }

  prevUsers() {
    this.container.current.scrollLeft -= 100;
  }

  nextUsers() {
    this.container.current.scrollLeft += 100;
  }

  render() {
    const { usersById, usersAllIds } = this.props;

    return (
      <div className="slider">
       <div className="slider-previous" onClick={this.prevUsers}></div>
        <div className="slider-users" ref={this.container}>
          { 
            usersAllIds.map((userId) => (
              <User userInfo={usersById[userId]} key={userId} />
            ))
          }
        </div>
        <div className="slider-next" onClick={this.nextUsers}></div>
      </div>
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
