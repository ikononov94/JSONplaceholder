import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import { fetchPostsByUserId } from '../../actions/posts';

class UserPosts extends Component {
    componentDidMount() {
        this.props.fetchPostsByUserId(this.props.match.params.id);
    }

    render() {
        const { usersById, match, postsById, postsAllIds } = this.props;

        return (
            <React.Fragment>
                <User userInfo={usersById[match.params.id]} />
                    <div className="user-posts">
                        {
                            postsAllIds.map((postId) => (
                                <Link to={`/post/${postId}`} key={postId} className="link">
                                    <p className="post">{postId} {postsById[postId].title}</p>
                                </Link>
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
        postsAllIds: state.posts.allIds,
        isFetching: state.posts.isFetchingPosts,
    }),
    dispatch => ({
        fetchPostsByUserId: userId => dispatch(fetchPostsByUserId(userId)),
    })
)(UserPosts);
