import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const User = ({ userInfo }) => (
    <div className="user">
        <div className="user__name">{userInfo.name}</div>
        <div className="user__company-name">{userInfo.company.name}</div>
        <div className="user__email">{userInfo.email}</div>
        <div className="user__phone">{userInfo.phone}</div>
    </div>
)

User.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })
}

export default User;
