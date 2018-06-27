import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCommentsByPostId } from '../../actions/comments';
import User from '../../components/User';
import Comment from '../../components/Comment';

class UserPostItem extends Component {
    componentDidMount() {
        this.props.fetchCommentsByPostId(this.props.match.params.postId);
        console.log(this.props.match)
    }

    render() {
        const { usersById, match, postsById, commentsById, commentsAllIds } = this.props;
        const post = postsById[match.params.postId];
        console.log(commentsById);
        return (
            <React.Fragment>
                <User userInfo={usersById[postsById[match.params.postId].userId]} />
                <p className="post">{match.params.postId} {post.title}</p>
                <p className="post-body">{post.body}</p>
                <div className="post-comments">
                    {
                        commentsAllIds.map((commentId) => (
                            <Comment author={commentsById[commentId]} />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        usersById: state.users.byId,
        postsById: state.posts.byId,
        commentsById: state.comments.byId,
        commentsAllIds: state.comments.allIds,
        isFetching: state.posts.isFetchingComments,
    }),
    dispatch => ({
        fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId)),
    })
)(UserPostItem);
