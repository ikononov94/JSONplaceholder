import React from 'react'

import './style.css';

const Comment = ({ author }) => (
    <div className="author">
        <div className="author-name">{author.name}</div>
        <div className="author-email">{author.email}</div>
        <div className="author-body">{author.body}</div>
    </div>
)

export default Comment;
