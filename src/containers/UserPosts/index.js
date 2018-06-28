import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import Spinner from '../../components/Spinner';
import { fetchPostsByUserId } from '../../actions/posts';

import './style.css';

class UserPosts extends Component {
    constructor(props) {
        super(props);

        this.userId = this.props.match.params.id || localStorage['userId'];
    }
    componentDidMount() {
        this.props.fetchPostsByUserId(this.userId);
    }

    render() {
        const { usersById, postsById, postsAllIds, isFetching } = this.props;

        if(isFetching) return <Spinner />

        return (
            <React.Fragment>
                { postsAllIds.length && 
                <React.Fragment>
                    <User userInfo={usersById[this.userId]} />
                    <div className="user-posts">
                        {
                            postsAllIds.map((postId) => (
                                <Link to={`/post/${postId}`} key={postId} className="link">
                                    <p className="post">
                                        <span className="post__id">
                                            {
                                                parseInt(postId, 10) >= 10 ? postId : `0${postId}`
                                            }
                                        </span> 
                                        {postsById[postId].title}
                                    </p>
                                </Link>
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
        postsById: state.posts.byId,
        postsAllIds: state.posts.allIds,
        isFetching: state.posts.isFetchingPosts,
    }),
    dispatch => ({
        fetchPostsByUserId: userId => dispatch(fetchPostsByUserId(userId)),
    })
)(UserPosts);
