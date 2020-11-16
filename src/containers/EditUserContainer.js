import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import swal from 'sweetalert'
import { getUsersDetail, putUserUpdate } from '../actions/userAction'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'

class EditUserContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUsersDetail(this.props.match.params.id));
    }

    handleSubmit(data) {
        this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
    }

    render() {
        if (this.props.getResponDataUser || this.props.getErrorResponDataUser) {
            if (this.props.getResponDataUser) {
                swal("User Update!", this.props.getResponDataUser.nama + " telah diupdate", "success");
            } else {
                swal("Failed!", this.props.getErrorResponDataUser, "error");
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Edit User</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getResponDataUser: state.users.getResponDataUser,
        getErrorResponDataUser: state.users.getErrorResponDataUser
    }
}

export default connect(mapStateToProps, null)(EditUserContainer)