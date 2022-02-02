import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return (<li key={user.id}>{user.name}</li>)

        })
    }

    render() {
        return (
            <div>
                Users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        users: state.users

    }
}

function loadData(store) {

    console.log("I am trying to load some data");

    return store.dispatch(fetchUsers());

}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};