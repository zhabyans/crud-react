import React from 'react'
import { connect } from 'react-redux'
import { Spinner, Table } from 'reactstrap'

const DetailUserComponent = props => {
    return (
        <div>
            <Table striped>
                <tbody>
                    <tr>
                        <td width="200px">Nama</td>
                        <td width="10px">:</td>
                        <td>{props.getUsersDetail.nama ? props.getUsersDetail.nama : <Spinner color="primary" />}</td>
                    </tr>
                    <tr>
                        <td width="200px">Alamat</td>
                        <td width="10px">:</td>
                        <td>{props.getUsersDetail.alamat ? props.getUsersDetail.alamat : <Spinner color="primary" />}</td>
                    </tr>
                    <tr>
                        <td width="200px">Umur</td>
                        <td width="10px">:</td>
                        <td>{props.getUsersDetail.umur ? props.getUsersDetail.umur : <Spinner color="primary" />}</td>
                    </tr>
                    <tr>
                        <td width="200px">No HP</td>
                        <td width="10px">:</td>
                        <td>{props.getUsersDetail.nohp ? props.getUsersDetail.nohp : <Spinner color="primary" />}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        getUsersDetail: state.users.getUsersDetail,
        getErrorDetail: state.users.getErrorDetail
    }
}

export default connect(mapStateToProps, null)(DetailUserComponent) 
