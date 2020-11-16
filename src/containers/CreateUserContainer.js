import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import swal from 'sweetalert';
import { postUserCreate } from '../actions/userAction';
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'

class CreateUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(postUserCreate(data));
    }

    render() {
        if (this.props.getResponDataUser || this.props.getErrorResponDataUser) {
            if (this.props.getResponDataUser) {
                swal("User Created!", this.props.getResponDataUser.nama + " telah ditambahkan", "success");
            } else {
                swal("Failed!", this.props.getErrorResponDataUser, "error");
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Create</h1>
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

export default connect(mapStateToProps, null)(CreateUserContainer)