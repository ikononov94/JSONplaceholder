import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import User from '../../components/User';
import './style.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.prevUsers = this.prevUsers.bind(this);
    this.nextUsers = this.nextUsers.bind(this);

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
            usersAllIds.map((userId) => {
              const userInfo = usersById[userId];

              return (
                <Link to={`/user/${userInfo.id}`} key={userId} className="link">
                  <User userInfo={userInfo} />
                </Link>
              )
            })
          }
        </div>
        <div className="slider-next" onClick={this.nextUsers}></div>
      </div>
    );
  }
}

Users.propTypes = {
  usersById: PropTypes.object,
  usersAllIds: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
}

export default connect(
  state => ({
    usersById: state.users.byId,
    usersAllIds: state.users.allIds,
    isFetching: state.users.isFetchingUsers,
  }),
  null
)(Users);
