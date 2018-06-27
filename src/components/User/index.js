import React from 'react';

import './style.css';

const User = ({ userInfo }) => (
    <div className="user">
        <div className="user__name">{userInfo.name}</div>
        <div className="user__company-name">{userInfo.company.name}</div>
        <div className="user__email">{userInfo.email}</div>
        <div className="user__phone">{userInfo.phone}</div>
    </div>
)

export default User;
