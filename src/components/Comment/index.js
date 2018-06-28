import React from 'react'

import './style.css';

const Comment = ({ author }) => (
    <div className="author">
        <div className="author__name">{author.name}</div>
        <div className="author__email">{author.email}</div>
        <div className="author__body">{author.body}</div>
    </div>
)

export default Comment;
