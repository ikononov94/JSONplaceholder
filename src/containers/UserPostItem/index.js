import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User';
import Comment from '../../components/Comment';
import Spinner from '../../components/Spinner';
import { fetchCommentsByPostId } from '../../actions/comments';

class UserPostItem extends Component {
    componentDidMount() {
        this.props.fetchCommentsByPostId(this.props.match.params.postId);
    }

    render() {
        const { usersById, match, postsById, commentsById, commentsAllIds, isFetching } = this.props;
        const post = postsById[match.params.postId];

        if(isFetching) return <Spinner />

        return (
            <React.Fragment>
                <User userInfo={usersById[postsById[match.params.postId].userId]} />
                <p className="post">{match.params.postId} {post.title}</p>
                <p className="post-body">{post.body}</p>
                <div className="post-comments">
                    {
                        commentsAllIds.map((commentId) => (
                            <Comment author={commentsById[commentId]} key={commentId}/>
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
        isFetching: state.comments.isFetchingComments,
    }),
    dispatch => ({
        fetchCommentsByPostId: postId => dispatch(fetchCommentsByPostId(postId)),
    })
)(UserPostItem);
