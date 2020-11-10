import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableComponent from '../components/TableComponent'
import { getUsersList } from '../actions/userAction'

class HomeContainer extends Component {

    // MENJALANKAN DISPATCH DI DALAM FUNGSI GETUSERSLIST()
    componentDidMount() {
        this.props.dispatch(getUsersList());
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