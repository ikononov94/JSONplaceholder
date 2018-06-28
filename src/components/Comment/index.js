import React from 'react'
import PropTypes from 'prop-types';

import './style.css';

const Comment = ({ author }) => (
    <div className="author">
        <div className="author__name">{author.name}</div>
        <div className="author__email">{author.email}</div>
        <div className="author__body">{author.body}</div>
    </div>
)

Comment.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}

export default Comment;
