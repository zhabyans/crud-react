import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const { SearchBar } = Search;
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
                <Button color="dark" className="mr-2" >
                    <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
            </div>
        );
    },
}
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const TableComponent = (props) => {
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
            </ToolkitProvider> : <Spinner style={{ width: '3rem', height: '3rem' }} />}

        </Container>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        userProps: state.users.getUsersList
    }
}

export default connect(mapStateToProps, null)(TableComponent);
