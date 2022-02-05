import React from "react";
import { Helmet } from "react-helmet";
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
                <Helmet>
                    <title>Users App</title>
                    <meta property="og:title" content="Users App" />
                </Helmet>
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

    return store.dispatch(fetchUsers());

}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};