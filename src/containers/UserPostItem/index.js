import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User';
import Comment from '../../components/Comment';
import Spinner from '../../components/Spinner';
import { fetchCommentsByPostId } from '../../actions/comments';
import { fetchPost } from '../../actions/post';

import './style.css';

class UserPostItem extends Component {
    constructor(props) {
        super(props);

        this.postId = this.props.match.params.postId || localStorage['postId'];
        this.userId = localStorage['userId'];
    }
    componentDidMount() {
        this.props.fetchPost(this.postId);
        this.props.fetchCommentsByPostId(this.postId);
    }

    render() {
        const { usersById, post, commentsById, commentsAllIds, isFetching } = this.props;

        if(isFetching) return <Spinner />

        return (
            <React.Fragment>
                { commentsAllIds.length &&
                <React.Fragment>
                <User userInfo={usersById[this.userId]} />
                <p className="post">
                    <span className="post__id">
                    {
                        parseInt(this.postId, 10) >= 10 ? 
                            this.postId : 
                            `0${this.postId}`
                    }
                    </span>
                    {post.title}
                </p>
                <p className="post__body">{post.body}</p>
                <div className="post__comments">
                    {
                        commentsAllIds.map((commentId) => (
                            <Comment author={commentsById[commentId]} key={commentId}/>
                        ))
                    }
                </div>
            </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        usersById: state.users.byId,
        post: state.post.data,
        commentsById: state.comments.byId,
        commentsAllIds: state.comments.allIds,
        isFetching: state.comments.isFetchingComments,
    }),
    dispatch => ({
        fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId)),
        fetchPost: postId => dispatch(fetchPost(postId)),
    })
)(UserPostItem);
