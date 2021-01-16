import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts, fetchUsers} from "../actions";
import UserName from "./UserName";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchUsers()
    }

    render() {
        const posts = this.props.data.data
        return (
            <div>
                {!posts && <h1>Loading..</h1>}
                {posts && posts.map((post) => {
                    return <div key={post.id}>
                        ----------------------------
                        <h2>
                            {post.title}
                        </h2>
                        <div>
                            <UserName id={post.userId}/>
                        </div>
                        ----------------------------
                    </div>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {data: state.posts, users: state.users}
}

export default connect(mapStateToProps, {fetchPosts, fetchUsers})(PostList)