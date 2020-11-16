import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableComponent from '../components/TableComponent'
import { deleteDataUser, getUsersList } from '../actions/userAction'

class HomeContainer extends Component {

    // MENJALANKAN DISPATCH DI DALAM FUNGSI GETUSERSLIST()
    componentDidMount() {
        this.props.dispatch(getUsersList());
        this.props.dispatch(deleteDataUser());
    }

    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}

export default connect()(HomeContainer)