import React from "react";
import { request } from "../../helper/helper";
import {Col, Container,Row} from 'react-bootstrap';
/* import '../styles/empleados.scss'; */
import DataGrid from "../../grid";

const columns = [{
    dataField: '_id',
    text: 'Product ID',
    hidden:true,
}, {
    dataField: 'nombre',
    text: 'Nombre'
}, {
    dataField: 'apellido_p',
    text: 'Apellido paterno'
}, {
    dataField: 'apellido_m',
    text: 'Apellido materno'
}, {
    dataField: 'telefono',
    text: 'Telefono'
}, {
    dataField: 'mail',
    text: 'Email'
}, {
    dataField: 'direccion',
    text: 'Direccion'
}];

export default class EmpleadosBuscar extends React.Component{
    constructor(props){
        super(props);
        this.state={};

        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

    componentDidMount() {

    }
    onClickEditButton(row) {
        this.props.setIdEmpleado(row._id);

        this.props.changeTab('editar');
    }
    render(){

        return(
            <Container id="empleados-buscar-container">
                <Row>
                    <h1>Buscar empleados</h1>
                </Row>
                <Row>
                    <DataGrid
                        url="/empleados"
                        columns={columns}
                        showEditButton={true}
                        onClickEditButton={this.onClickEditButton}
                    />
                </Row>
            </Container>
        );
    }
}
