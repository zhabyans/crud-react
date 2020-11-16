import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { deleteUser } from '../actions/userAction';

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                console.log("user dengan id " + id);
                dispatch(deleteUser(id));
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

// page will reload whenever data is updated.


const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const TableComponent = (props) => {
    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return { width: "5%" };
        }
    }, {
        dataField: 'nama',
        text: 'Nama',
        sort: true
    }, {
        dataField: 'alamat',
        text: 'Alamat',
        sort: true
    },
    {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"detail/" + row.id}>
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faInfo} /> Detail
                        </Button>
                    </Link>
                    <Link to={"edit/" + row.id}>
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </Button>
                    </Link>
                    <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)} >
                        <FontAwesomeIcon icon={faTrash} /> Delete
              </Button>
                </div>
            );
        },
    }
    ];

    return (
        <Container>
            {props.userProps ? <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.userProps}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to={"create"}>
                                        <Button color="dark" className="mr-2">
                                            <FontAwesomeIcon icon={faUserPlus} /> Create User
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar {...props.searchProps} placeholder="Masukkan kata" />
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> : <Spinner style={{ width: '5rem', height: '5rem', margin: '0px auto', display: 'block' }} />}

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        userProps: state.users.getUsersList
    }
}

export default connect(mapStateToProps, null)(TableComponent);
