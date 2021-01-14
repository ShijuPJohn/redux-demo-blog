import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends Component {
    render() {
        console.log(this.props)
        this.props.fetchPosts()
        return (
            <div>
                Post List
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps, {fetchPosts})(PostList)