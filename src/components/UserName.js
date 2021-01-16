import React, {Component} from 'react'
import {connect} from "react-redux";

class UserName extends Component {
    render() {
        let currentUser = {}
        if (this.props.users) {
            currentUser = this.props.users.filter(item => (item.id === this.props.id))[0]
        }
        return <div>
            {currentUser && <div>{currentUser.name}</div>}
        </div>
    }
}

function mapStateToProps(state) {
    return {users: state.users}
}

export default connect(mapStateToProps)(UserName)